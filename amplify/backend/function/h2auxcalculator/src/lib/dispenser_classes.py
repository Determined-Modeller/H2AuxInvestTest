# Dispenser class

import pandas as pd
import math
from lcoh_calculator import calculate_lcoh

class Dispenser():
    
    def __init__(self, avg_flowrate, peak_flowrate, inputs):
        self.refuel_rate_slow1 = 1.8
        self.refuel_rate_fast1 = 3.6
        self.refuel_rate_slow2 = 3.6
        self.refuel_rate_fast2 = 7.2
        self.extra_time = 3
        
        self.avg_flowrate = avg_flowrate
        self.peak_flowrate = peak_flowrate
        self.inputs = inputs

        self.lifetime = inputs['lifetime']
        self.wacc = inputs['wacc']
        self.energy_price = inputs['energy_price_per_mwh']
        
        self.costs = {}
        self.results = {}
        self.dispensing_vehicle_vol = self.calculate_vehicle_properties(vehicle=self.inputs['dispensing_type'],
                                                                        pressure=self.inputs['dispensing_pressure'],
                                                                        capacity=self.inputs['dispensing_mass'])
        
        # Obtain the numerical value for refueling time from the vehicle properties
        disp_time_str = 'refuel_time_quick' if inputs['is_precooling_used'] else 'refuel_time_slow'
        self.dispensing_time = self.dispensing_vehicle_vol[disp_time_str]
    
        self.name = 'dispenser'
        
    
    def calculate_all(self):
        self.calculate_num_dispensers_needed()
        self.calculate_dispenser_capex()
        self.calculate_dispenser_equipment_cost()
        self.calculate_dispenser_maintenance()
        self.calculate_dispenser_installation_cost()
        self.calculate_dispenser_energy()
        self.calculate_cost_summary()
    

    def calculate_vehicle_properties(self, vehicle, pressure, capacity):
        '''
        Given a user-defined dispensing pressure and mass, compute the slow
        and quick refuel times, and return a dictionary of the vehicle properties.

        Parameters
        ----------
        pressure: float
            User-specified dispensing pressure value (bar)
        capacity: float
            User-specified dispensing mass value (kg)
            

        Returns
        -------
        vehicle_properties: dict
            Vehicle properties ('pressure', 'capacity', 'refuel_time_slow', 'refuel_time_quick')

        '''
        
        # Calculate refueling times for tubetrailer or car
        if vehicle == 'tubetrailer' or (vehicle=='vehicle' and capacity>=20):
            refueling_time_slow = (capacity / self.refuel_rate_slow1) + self.extra_time
            refueling_time_quick = (capacity / self.refuel_rate_fast1) + self.extra_time
            
        # Calculate refueling times for HDV
        elif (vehicle=='vehicle' and capacity<20):
            refueling_time_slow = (capacity / self.refuel_rate_slow2) + self.extra_time
            refueling_time_quick = (capacity / self.refuel_rate_fast2) + self.extra_time
            
        # Create a vehicle properties dictionary
        keys = ['pressure', 'capacity', 'refuel_time_slow', 'refuel_time_quick']
        values = [pressure, capacity, refueling_time_slow, refueling_time_quick]
        return dict(zip(keys, values))
        
        
    def calculate_num_dispensers_needed(self):
        '''
        Calculate the number of dispensers that are needed.
        (Originally this method was named dispenser_quantity.)

        Returns
        -------
        None.

        '''
                
        # if self.inputs['peak_hydrogen_dispensing_rate_unit'] == 'hour':
        #     self.num_dispensers_needed = math.ceil(self.inputs['peak_hydrogen_dispensing_rate'] * self.dispensing_time / 60)
        # elif self.inputs['peak_hydrogen_dispensing_rate_unit'] == 'day':
        #     self.num_dispensers_needed = math.ceil(self.inputs['peak_hydrogen_dispensing_rate'] * self.dispensing_time / 60 / 24)
           
            
        self.num_dispensers_needed = math.ceil(self.peak_flowrate * self.dispensing_time / 60)
       
            
            
        '''
        if we are passing peak and average hydrogen flow rates (in kg/hour) to the class
        constructor, we should use those attributes in place of self.inputs['peak_hydrogen_dispensing_rate']
        e.g.
        self.num_dispensers_needed = math.ceil(self.peak_flowrate * self.dispensing_time)
        
        TODO - Pavel please take a look at this calculation and make sure it is correct.
        
        '''
        

    def calculate_dispenser_capex(self):
        if self.dispensing_vehicle_vol['pressure'] <= 200:
            self.costs['equipment'] = 19350 * self.num_dispensers_needed ** (-0.113)
        elif self.dispensing_vehicle_vol['pressure'] <= 350:
            self.costs['equipment'] = 50673 * self.num_dispensers_needed ** (-0.117)
        elif self.dispensing_vehicle_vol['pressure'] > 350:
            self.costs['equipment'] = 66572 * self.num_dispensers_needed ** (-0.122)
         
        self.costs['installation_and_BoP'] = (8.1981 * self.costs['equipment'] ** (-0.345))
        
        
    def calculate_dispenser_equipment_cost(self):
        if self.dispensing_vehicle_vol['pressure'] <= 200:
            base = 19350 * self.num_dispensers_needed ** (-0.113)
        elif self.dispensing_vehicle_vol['pressure'] <= 350:
            base = 50673 * self.num_dispensers_needed ** (-0.117)
        elif self.dispensing_vehicle_vol['pressure'] > 350:
            base = 66572 * self.num_dispensers_needed ** (-0.122)
        
        self.results['equipment'] = {'min':  (base * 0.9),
                                     'max':  (base * 1.1)}
        
        self.results['equipment_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['min'], self.wacc, self.avg_flowrate ),
                                          'max': calculate_lcoh(self.lifetime, 'capex', self.results['equipment']['max'], self.wacc, self.avg_flowrate )}
        
        
    def calculate_dispenser_installation_cost(self):
        
        self.results['installation'] = {'min':  (9.1981 * (self.results['equipment']['min'] ** 0.655)),
                                        'max':  (9.1981 * (self.results['equipment']['max'] ** 0.655))}
        
        self.results['installation_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'capex', self.results['installation']['min'], self.wacc, self.avg_flowrate ),
                                             'max': calculate_lcoh(self.lifetime, 'capex', self.results['installation']['max'], self.wacc, self.avg_flowrate )}
        
    def calculate_dispenser_maintenance(self):
        self.results['maintenance'] = {'min':  (self.results['equipment']['min'] * 0.03),
                                       'max':  (self.results['equipment']['max'] * 0.03)}
        
        self.results['maintenance_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['min'], self.wacc, self.avg_flowrate ),
                                            'max': calculate_lcoh(self.lifetime, 'opex', self.results['maintenance']['max'], self.wacc, self.avg_flowrate )}
        
    def calculate_dispenser_energy(self): 
        
        if self.dispensing_vehicle_vol['pressure'] <= 200:
            base = 0
        elif self.dispensing_vehicle_vol['pressure'] <= 350:
            base = 0.1 * self.avg_flowrate * 8.760 * self.energy_price
        elif self.dispensing_vehicle_vol['pressure'] > 350:
            base = 0.2 * self.avg_flowrate * 8.760 * self.energy_price
        
        self.results['energy'] = {'min':  base * 0.9,
                                  'max':  base * 1.1}
        
        self.results['energy_lcoh'] = {'min': calculate_lcoh(self.lifetime, 'opex', self.results['energy']['min'], self.wacc, self.avg_flowrate ),
                                     'max': calculate_lcoh(self.lifetime, 'opex', self.results['energy']['max'], self.wacc, self.avg_flowrate )}
        
    def calculate_cost_summary(self): 
        self.results['sum_capex'] = {'min': self.results['equipment']['min'] + self.results['installation']['min'],
                                     'max': self.results['equipment']['max'] + self.results['installation']['max']}
         
        self.results['sum_opex'] = {'min': self.results['energy']['min'] + self.results['maintenance']['min'],
                                    'max': self.results['energy']['max'] + self.results['maintenance']['max']}
      
        self.results['sum_lcoh'] = {'min': sum([self.results[i]['min'] for i in self.results if 'lcoh' in i]),
                                    'max': sum([self.results[i]['max'] for i in self.results if 'lcoh' in i])}
      