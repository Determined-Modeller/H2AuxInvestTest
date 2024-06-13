#Storage Classes

from lib.lcoh_calculator import calculate_lcoh

    
class Storage():
    
    def __init__(self, inputs, avg_flowrate, peak_flowrate, storage_type):
        self.variable_lib=inputs
        self.average_hydrogen_flow = avg_flowrate # This is a dummy variable. Meant to be replaced with calculated average h2 flowrate in kg/h
        self.peak_flowrate = peak_flowrate
        self.storage_type = storage_type
        # A name to specify the type of equipment when reporting costs
        self.name = 'type ' + storage_type + ' storage'
        
        self.storage_capacity = inputs['storage_requirement'] # name to be updated and connected to resposne
        self.storage_capacity_unit = inputs['storage_requirement_unit']
        self.storage_pressure = inputs['storage_pressure']
        self.wacc = inputs['wacc']
        self.lifetime = inputs['lifetime']
        
        self.results = {}
        self.results['pressure'] = {
            'amount': inputs['storage_pressure'],
            'unit': inputs['storage_pressure_unit']
        }
        
        
    def set_peak_flowrate(self, new_peak_flowrate):
        self.peak_flowrate = new_peak_flowrate
        
        
    def set_avg_flowrate(self, new_avg_flowrate):
        self.avg_flowrate = new_avg_flowrate
    
    
    def calculate_all(self):
        '''
        A convenience method to run all calculations.
        '''
        self.calculate_storage_capacity()
        self.calculate_storage_equipment_cost()
        self.calculate_storage_installation_cost()
        self.calculate_storage_maintenance()
        self.calculate_storage_maintenance()
        self.calculate_storage_energy()
        self.calculate_cost_summary()
        
        
    def calculate_storage_capacity(self):
        '''
        Convert storage capacity value from user-defined units to kg.
        '''
        if self.storage_capacity_unit == 'kg':
            pass
        elif self.storage_capacity_unit == 'nm3':
            self.storage_capacity = self.storage_capacity * 0.08899
        elif self.storage_capacity_unit == 'days':
            self.storage_capacity = self.average_hydrogen_flow * self.storage_capacity
        else:
            print('Wrong storage unit specified. Assuming units in kg and continuing calculation.')
            
        self.results['capacity'] = {'amount':  self.storage_capacity ,
                                    'unit': self.storage_capacity_unit}
        
            
    def calculate_storage_equipment_cost(self):
        
        base = (0.002875 * (self.storage_pressure)**2 - 0.283705 * (self.storage_pressure) + 572.55) * self.storage_capacity
        
        self.results['equipment'] = {'min':  (base * 0.9),
                                     'avg':  (base),
                                     'max':  (base * 1.1)}
        
        self.results['equipment_lcoh'] = {'min':  calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.average_hydrogen_flow ),
                                          'avg':  calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['avg'], self.wacc, self.average_hydrogen_flow ),
                                          'max':  calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['max'], self.wacc, self.average_hydrogen_flow )}
        
        
    def calculate_storage_installation_cost(self):
        self.results['installation'] = {'min':  (self.results['equipment']['min'] * 0.25),
                                        'avg':  (self.results['equipment']['avg'] * 0.25),
                                        'max':  (self.results['equipment']['max'] * 0.25)}
        
        self.results['installation_lcoh'] = {'min':  calculate_lcoh(self.lifetime, 'capex', self.results['installation']['min'], self.wacc, self.average_hydrogen_flow ),
                                             'avg':  calculate_lcoh(self.lifetime, 'capex', self.results['installation']['avg'], self.wacc, self.average_hydrogen_flow ),
                                             'max':  calculate_lcoh(self.lifetime, 'capex', self.results['installation']['max'], self.wacc, self.average_hydrogen_flow )}
        
    def calculate_storage_maintenance(self):
        self.results['maintenance'] = {'min':  (self.results['equipment']['min'] * 0.02),
                                       'avg':  (self.results['equipment']['avg'] * 0.02),
                                       'max':  (self.results['equipment']['max'] * 0.02)}
        
        self.results['maintenance_lcoh'] = {'min':  calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['min'], self.wacc, self.average_hydrogen_flow ),
                                            'avg':  calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['avg'], self.wacc, self.average_hydrogen_flow ),
                                            'max':  calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['max'], self.wacc, self.average_hydrogen_flow )}
        
    def calculate_storage_energy(self): 
        self.results['energy'] = {'min':  0,
                                  'avg':  0,
                                  'max':  0}
        
        self.results['energy_lcoh'] = {'min':  calculate_lcoh(self.lifetime, 'opex', self.results['energy']['min'], self.wacc, self.average_hydrogen_flow ),
                                       'avg':  calculate_lcoh(self.lifetime, 'opex', self.results['energy']['avg'], self.wacc, self.average_hydrogen_flow ),
                                       'max':  calculate_lcoh(self.lifetime, 'opex', self.results['energy']['max'], self.wacc, self.average_hydrogen_flow )}
        
    def calculate_cost_summary(self): 
        self.results['sum_capex'] = {'min': self.results['equipment']['min'] + self.results['installation']['min'],
                                     'avg': self.results['equipment']['min'] + self.results['installation']['avg'],
                                     'max': self.results['equipment']['max'] + self.results['installation']['max']}
         
        self.results['sum_opex'] = {'min': self.results['energy']['min'] + self.results['maintenance']['min'],
                                    'avg': self.results['energy']['avg'] + self.results['maintenance']['avg'],
                                    'max': self.results['energy']['max'] + self.results['maintenance']['max']}
      
        self.results['sum_lcoh'] = {'min': sum([self.results[i]['min'] for i in self.results if 'lcoh' in i]),
                                    'avg': sum([self.results[i]['avg'] for i in self.results if 'lcoh' in i]),
                                    'max': sum([self.results[i]['max'] for i in self.results if 'lcoh' in i])}
      
        
        
class Storage_I_II(Storage):
    
    def __init__(self, inputs, avg_flowrate, peak_flowrate):
        super().__init__(inputs, avg_flowrate, peak_flowrate, storage_type='I/II')
        
    
    # overridden method
    def calculate_storage_equipment_cost(self):
        
        base = (0.0025 * (self.storage_pressure)**2 - 0.2467 * (self.storage_pressure) + 497.87)  * self.storage_capacity * (self.storage_capacity/500)**0.9
        
        self.results['equipment'] = {'min': (base * 0.9),
                                     'avg': (base * 1.0),
                                     'max': (base * 1.1)}
        
        self.results['equipment_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.average_hydrogen_flow ),
                                          'avg': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['avg'], self.wacc, self.average_hydrogen_flow ),
                                          'max': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['max'], self.wacc, self.average_hydrogen_flow )}
    
class Storage_III_IV(Storage):
    
    def __init__(self, inputs, avg_flowrate, peak_flowrate):
        super().__init__(inputs, avg_flowrate, peak_flowrate, storage_type='III/IV')
    
    
    # overridden method
    def calculate_storage_equipment_cost(self):
        '''
        This method is currently using the same calculation as the parent
        class's method of the same name. Unless there is a difference between
        how the results are calculated, we don't need to define this method
        in the child class.
        
        '''
        
        base = (0.002875 * (self.storage_pressure)**2 - 0.283705 * (self.storage_pressure) + 572.55)  * self.storage_capacity * (self.storage_capacity/500)**0.9
        
        self.results['equipment'] = {'min': (base * 0.9),
                                     'avg': (base * 1.0),
                                     'max': (base * 1.1)}
        
        self.results['equipment_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.average_hydrogen_flow ),
                                          'avg': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['avg'], self.wacc, self.average_hydrogen_flow ),
                                          'max': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['max'], self.wacc, self.average_hydrogen_flow )}
