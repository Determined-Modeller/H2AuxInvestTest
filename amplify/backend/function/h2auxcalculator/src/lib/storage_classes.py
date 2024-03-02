#Storage Classes

from lcoh_calculator import calculate_lcoh

    
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
        '''
        Overridden in some child classes.
        
        The code duplication in these methods can be removed as follows:
        #######################################################################
        base = (0.003125 * (self.storage_pressure)**2 - 0.308375 * (self.storage_pressure) + 622.3375) * self.storage_capacity
        
        self.results['equipment_RG'] = {'min': base * 0.9,
                                        'max': base * 1.1}
        
        self.results['equipment_lcoh_RG'] = {k: calculate_lcoh(self.lifetime, 'capex', self.results['equipment'][k], self.wacc, self.average_hydrogen_flow)
                                             for k in ['min', 'max']}
        
        # Check results match
        for k in self.results['equipment']:
            assert(math.isclose(self.results['equipment'][k], self.results['equipment_RG'][k]))
            assert(math.isclose(self.results['equipment_lcoh'][k], self.results['equipment_lcoh_RG'][k]))
        #######################################################################
        
        
        '''
        base = (0.003125 * (self.storage_pressure)**2 - 0.308375 * (self.storage_pressure) + 622.3375) * self.storage_capacity
        
        self.results['equipment'] = {'min':  (base * 0.9),
                                     'max':  (base * 1.1)}
        
        self.results['equipment_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.average_hydrogen_flow ),
                                          'max': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['max'], self.wacc, self.average_hydrogen_flow )}
        
        
    def calculate_storage_installation_cost(self):
        self.results['installation'] = {'min':  (self.results['equipment']['min'] * 0.25),
                                        'max':  (self.results['equipment']['max'] * 0.25)}
        
        self.results['installation_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['installation']['min'], self.wacc, self.average_hydrogen_flow ),
                                             'max': calculate_lcoh(self.lifetime, 'capex', self.results['installation']['max'], self.wacc, self.average_hydrogen_flow )}
        
    def calculate_storage_maintenance(self):
        self.results['maintenance'] = {'min':  (self.results['equipment']['min'] * 0.02),
                                       'max':  (self.results['equipment']['max'] * 0.02)}
        
        self.results['maintenance_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['min'], self.wacc, self.average_hydrogen_flow ),
                                            'max': calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['max'], self.wacc, self.average_hydrogen_flow )}
        
    def calculate_storage_energy(self): 
        self.results['energy'] = {'min':  0,
                                  'max':  0}
        
        self.results['energy_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'opex', self.results['energy']['min'], self.wacc, self.average_hydrogen_flow ),
                                     'max': calculate_lcoh(self.lifetime, 'opex', self.results['energy']['max'], self.wacc, self.average_hydrogen_flow )}
        
    def calculate_cost_summary(self): 
        self.results['sum_capex'] = {'min': self.results['equipment']['min'] + self.results['installation']['min'],
                                     'max': self.results['equipment']['max'] + self.results['installation']['max']}
         
        self.results['sum_opex'] = {'min': self.results['energy']['min'] + self.results['maintenance']['min'],
                                    'max': self.results['energy']['max'] + self.results['maintenance']['max']}
      
        self.results['sum_lcoh'] = {'min': sum([self.results[i]['min'] for i in self.results if 'lcoh' in i]),
                                    'max': sum([self.results[i]['max'] for i in self.results if 'lcoh' in i])}
      
        
        
class Storage_I_II(Storage):
    
    def __init__(self, inputs, avg_flowrate, peak_flowrate):
        super().__init__(inputs, avg_flowrate, peak_flowrate, storage_type='I/II')
        
    
    # overridden method
    def calculate_storage_equipment_cost(self):
        self.results['equipment'] = {'min': ((0.00275 * (self.storage_pressure)**2 - 0.27137 * (self.storage_pressure) + 547.657) * 0.9 * self.storage_capacity),
                                   'max': ((0.00275 * (self.storage_pressure)**2 - 0.27137 * (self.storage_pressure) + 547.657) * 1.1 * self.storage_capacity)}
        
        self.results['equipment_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.average_hydrogen_flow ),
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
        self.results['equipment'] = {'min': ((0.003125 * (self.storage_pressure)**2 - 0.308375 * (self.storage_pressure) + 622.3375) * 0.9 * self.storage_capacity),
                                     'max': ((0.003125 * (self.storage_pressure)**2 - 0.308375 * (self.storage_pressure) + 622.3375) * 1.1 * self.storage_capacity)}
        
        self.results['equipment_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.average_hydrogen_flow ),
                                          'max': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['max'], self.wacc, self.average_hydrogen_flow )}
