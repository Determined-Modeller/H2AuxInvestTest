#Compressor Classes

import os
import lib.constants as const
import pandas as pd
from lib.lcoh_calculator import calculate_lcoh


class Compressor:
    '''
    This parent class is not intended to be instantiated.
    The child classes should be instantiated.
    
    This is a parent Compressor class with methods implementing calculations
    whose equations are identical for more than one type of compressor.
    This avoids duplicating code between compressor child classes.
    
    For example, if the equation for calculating work done is the same for piston
    and diaphragm compressors, but it differs for centrifugal compressors, the
    CentrifugalCompressor class would have its own overridden method for this.
    
    
    '''
    
    def __init__(self, inputs, avg_flowrate, peak_flowrate, comp_type):
        self.inputs = inputs
        self.comp_type = comp_type
        # A name to specify the type of equipment when reporting costs
        self.name = self.comp_type + " compressor"
        
        self.avg_flow = avg_flowrate
        self.peak_flowrate = peak_flowrate
        self.compressor_leak = 0.03
        
        # Data sheet containing values for constants for different types of compressor
        base_path = os.path.dirname(os.path.abspath(__file__))
        self.comp_data = pd.read_excel(io=base_path + "/compressor_specs_example.xlsx", index_col=0)
        
        # Extract relevant data from user inputs
        self.pressure_in = self.inputs['hydrogen_inlet_pressure']
        self.pressure_out = self.inputs['dispensing_pressure']
        self.lifetime = inputs['lifetime']
        self.wacc = inputs['wacc']
        self.num_stages = self.calculate_number_of_stages()
        self.pressure_ratio = (self.pressure_out / self.pressure_in) ** (1 / self.num_stages)
        self.energy_price = inputs['energy_price_per_mwh']
        # Build a DataFrame to store computed P, T, work_done, etc. at each stage.
        # Specify initial row names.
        self.conditions = pd.DataFrame(data=0.0,
                                       index=['inlet_p', 'outlet_p', 'inlet_t', 'outlet_t', 'isentropic_eff', 'work_done', 'power', 'compression_energy', 'cooling_energy'],
                                       columns=[f'stage_{i+1}' for i in range(self.num_stages)])
        
        # Create empty dictionary to store isentropic efficiency for every stage
        self.isen_efficiencies = {f'stage_{i+1}': None for i in range(self.num_stages)}
        self.results = dict()
        
        self.do_all_calculations()
        
    def set_peak_flowrate(self, new_peak_flowrate):
        self.peak_flowrate = new_peak_flowrate

    
    def do_all_calculations(self):
        
        self.calculate_inter_stage_p()
        self.calculate_isentropic_efficiency()
        self.calculate_outlet_temp()
        self.calculate_work_done()
        self.calculate_compressor_power()
        self.calculate_compression_energy()
        self.calculate_cooling_energy()
        self.calculate_compressor_equipment_cost()
        self.calculate_compressor_installation_cost()
        self.calculate_compressor_maintenance()
        self.calculate_compressor_maintenance()
        self.calculate_compressor_energy()
        self.calculate_cost_summary()
    
    
    def calculate_number_of_stages(self):
        '''
        Description.
        
        '''
        
        if self.pressure_out / self.pressure_in < 4:
            num_stages = 1
        elif self.pressure_out / self.pressure_in < 17:
            num_stages = 2
        else:
            num_stages = 3
            
        return num_stages
    
    
    def calculate_inter_stage_p(self):
        '''
        Calculate inlet pressure, outlet pressure, and inlet temperature
        for each stage.
        
        '''
        
        # Explicitly speficy the names of the rows we are assigning values to
        row_names = ['inlet_p', 'outlet_p', 'inlet_t']
        
        # Calculate the 3 values for each stage only once and store the
        # results for later lookup according to the value of self.num_stages 
        stages = dict()
        stages[1] = [self.pressure_in, self.pressure_in * self.pressure_ratio, 303]
        stages[2] = [self.pressure_in * self.pressure_ratio, self.pressure_in * self.pressure_ratio ** 2, 323]
        stages[3] = [self.pressure_in * self.pressure_ratio ** 2, self.pressure_in * self.pressure_ratio ** 3, 323]
        
        # Add values to new columns to check for equality with existing columns
        for stage_number in range(1, self.num_stages+1):
            self.conditions.loc[row_names, f'stage_{stage_number}'] = stages[stage_number]
            
        
    def calculate_outlet_temp(self):
        '''
        Description.
        
        '''
        
        specific_heat_r_eq = (const.specific_heat_r - 1) / const.specific_heat_r
        for stage in self.conditions.columns:
            self.conditions.loc['outlet_t', stage] = self.conditions.loc['inlet_t', stage] * (1 + ((self.pressure_ratio) ** (specific_heat_r_eq) - 1) / self.isen_efficiencies[stage])

        
    def calculate_isentropic_efficiency(self):
        '''
        If the type of compressor has a constant isentropic efficiency, this
        constant value is obtained from the Excel data sheet. Otherwise,
        the isentropic efficiency should be calculated in a child class by
        overriding this method.
        '''
        self.isen_efficiencies = {stage: self.comp_data.loc[self.comp_type, 'isen_eff'] for stage in self.conditions.columns}
        
        for stage in self.conditions.columns:
            self.conditions.loc['isentropic_eff', stage] = self.isen_efficiencies[stage]
    
    
    def calculate_work_done(self):
        '''
        The work done equation is the same for piston and diaphragm compressors,
        so they will use this implementation from the parent class.
        The centrifugal compressor class will have its own overridden version
        of this method because it is calculated differently.
        
        '''
        
        specific_heat_r_eq = const.specific_heat_r / (const.specific_heat_r - 1)        
        # Populate DataFrame with work done for each stage
        for stage in self.conditions.columns:
            self.conditions.loc['work_done', stage] = specific_heat_r_eq * (const.specific_gas_constant * self.conditions.loc['inlet_t', stage] / const.h2_molar_mass) * (self.pressure_ratio ** (specific_heat_r_eq ** (-1))-1) / self.isen_efficiencies[stage]
            
            
    def calculate_compressor_power(self):
        '''
        This method requires peak flowrate in kg/h as an input
        It calculates the power requirements of the compressor based on the work done, efficiency and hydrogen flowrate
        
        '''
        
        # TODO - these values may vary by compressor type. Extract values from self.comp_data
        # self.mechanical_eff = 0.95
        # self.electrical_eff = 0.95
        
        # print(f"{self.comp_type.capitalize()} Compressor")
        # print(f"Mechanical efficiency: {self.mechanical_eff}, from file: {self.comp_data.loc[self.comp_type, 'mech_eff']}")
        # print(f"Electrical efficiency: {self.electrical_eff}, from file: {self.comp_data.loc[self.comp_type, 'elec_eff']}")
        # print("--------------------------------------------")
        
         
        # for stage in self.conditions.columns:
        #      self.conditions.loc['power', stage] = self.peak_flowrate / 3600 * self.conditions[stage]['work_done'] * (1 + self.compressor_leak) / (self.mechanical_eff * self.electrical_eff)
 
        
        mech_eff = self.comp_data.loc[self.comp_type, 'mech_eff']
        elec_eff = self.comp_data.loc[self.comp_type, 'elec_eff']
        
        for stage in self.conditions.columns:
             self.conditions.loc['power', stage] = self.peak_flowrate / 3600 * self.conditions[stage]['work_done'] * (1 + self.compressor_leak) / (mech_eff * elec_eff)
 
        
    def calculate_compression_energy(self):
        '''
        Calculates the energy needed to compress one kg of hydrogen for each stage.
        Uses peak flow rate
        
        '''
        
        for stage in self.conditions.columns:
             self.conditions.loc['compression_energy', stage] = self.conditions.loc['power', stage] / self.peak_flowrate
        
        
    def calculate_cooling_energy(self):
        '''
        calculates energy needed to cool hydrogen between each compression stage and after the last stage
        
        '''
        
        # TODO - this 0.4 factor should be stored somewhere central, for each compressor type
        for stage in self.conditions.columns:
             self.conditions.loc['cooling_energy', stage] = self.conditions.loc['compression_energy', stage] * 0.4
 
    
    def calculate_compressor_equipment_cost(self):
        '''
        Overridden in some child classes.
        
        '''
        
        cepci_88 = 342.5
        cepci_24 = 800
        
        self.results['power'] = sum(self.conditions.loc['power'])
        
        base = cepci_24/cepci_88 * 8305 *  self.results['power'] ** 0.82
        
        
        self.results['equipment'] = {'min':  base * 0.9,
                                     'avg':  base,
                                     'max':  base * 1.1}
        
        self.results['equipment_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.avg_flow ),
                                          'avg': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['avg'], self.wacc, self.avg_flow ),
                                          'max': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['max'], self.wacc, self.avg_flow )}
        
        
    def calculate_compressor_installation_cost(self):
        self.results['installation'] = {'min':  (9.1981 * (self.results['equipment']['min'] ** 0.655)),
                                        'avg':  (9.1981 * (self.results['equipment']['avg'] ** 0.655)),
                                        'max':  (9.1981 * (self.results['equipment']['max'] ** 0.655))}
        
        self.results['installation_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['installation']['min'], self.wacc, self.avg_flow ),
                                             'avg': calculate_lcoh(self.lifetime, 'capex', self.results['installation']['avg'], self.wacc, self.avg_flow ),
                                             'max': calculate_lcoh(self.lifetime, 'capex', self.results['installation']['max'], self.wacc, self.avg_flow )}
        
    def calculate_compressor_maintenance(self):
        self.results['maintenance'] = {'min':  (self.results['equipment']['min'] * 0.03),
                                       'avg':  (self.results['equipment']['avg'] * 0.03),
                                       'max':  (self.results['equipment']['max'] * 0.03)}
        
        self.results['maintenance_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['min'], self.wacc, self.avg_flow ),
                                            'avg': calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['avg'], self.wacc, self.avg_flow ),
                                            'max': calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['max'], self.wacc, self.avg_flow )}
        
    def calculate_compressor_energy(self): 
        
        self.results['cooling_energy'] = sum(self.conditions.loc['cooling_energy'])
        self.results['compression_energy'] = sum(self.conditions.loc['compression_energy'])
        
        base = (self.results['cooling_energy'] + self.results['compression_energy']) * self.avg_flow * 8.760 * self.energy_price
        
        self.results['energy'] = {'min':  base * 0.9,
                                  'avg':  base,
                                  'max':  base * 1.1}
        
        self.results['energy_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'opex', self.results['energy']['min'], self.wacc, self.avg_flow ),
                                       'avg': calculate_lcoh(self.lifetime, 'opex', self.results['energy']['avg'], self.wacc, self.avg_flow ),
                                       'max': calculate_lcoh(self.lifetime, 'opex', self.results['energy']['max'], self.wacc, self.avg_flow )}
        
    def calculate_cost_summary(self): 
        self.results['sum_capex'] = {'min': self.results['equipment']['min'] + self.results['installation']['min'],
                                     'avg': self.results['equipment']['avg'] + self.results['installation']['avg'],
                                     'max': self.results['equipment']['max'] + self.results['installation']['max']}
         
        self.results['sum_opex'] = {'min': self.results['energy']['min'] + self.results['maintenance']['min'],
                                    'avg': self.results['energy']['avg'] + self.results['maintenance']['avg'],
                                    'max': self.results['energy']['max'] + self.results['maintenance']['max']}
      
        self.results['sum_lcoh'] = {'min': sum([self.results[i]['min'] for i in self.results if 'lcoh' in i]),
                                    'avg': sum([self.results[i]['avg'] for i in self.results if 'lcoh' in i]),
                                    'max': sum([self.results[i]['max'] for i in self.results if 'lcoh' in i])}
      
        


class PistonCompressor(Compressor):
    def __init__(self, inputs, avg_flowrate, peak_flowrate):
        super().__init__(inputs, avg_flowrate, peak_flowrate, comp_type='piston')
        
        
    # overridden method    
    def calculate_isentropic_efficiency(self):
        '''
        Calculate the isentropic efficiency for each stage.
        
        '''
        
        self.isen_efficiencies = {stage: max(0.6, (-2.3082 * (self.pressure_ratio ** 2) + 20.717 * self.pressure_ratio + 40.719) / 100) for stage in self.conditions.columns}
    
        for stage in self.conditions.columns:
            self.conditions.loc['isentropic_eff',stage] = self.isen_efficiencies[stage]

    
class DiaphragmCompressor(Compressor):
    def __init__(self, inputs, avg_flowrate, peak_flowrate):
        super().__init__(inputs, avg_flowrate, peak_flowrate, comp_type='diaphragm')
        
        
class CentrifugalCompressor(Compressor):
    def __init__(self, inputs, avg_flowrate, peak_flowrate):
        super().__init__(inputs, avg_flowrate, peak_flowrate, comp_type='centrifugal')
        