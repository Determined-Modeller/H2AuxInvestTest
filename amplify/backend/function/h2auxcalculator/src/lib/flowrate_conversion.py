# Use the user inputs to convert flow rates to kg/hour

import numpy as np

# def calculate_flowrates(inputs):
#     '''
#     Calculate average and peak hydrogen flow rates in kg/hour.
    
#     NOTE - the user is specifying average and peak flow rates already.
#             We don't need to multiply by mass - this gives us units of
#             [kg].[kg]/[hour], which is not a flow rate.
            
#             This function should simply be responsible for doing a unit
#             conversion between the user-specified flow rate units, and kg/h.
            
#             At the moment there are errors in the conditional statements:
#             - A unit of 'day' (not 'hour') should have a division by 24 to get 'hour' 
#             - A unit of 'year' (not 'day') should have a division by 8760 to get 'hour' 
            
#             I've updated this below. However, note that *if* the user can specify
#             'vehicles' rather than 'kg', there will be a further conversion
#             required here.
            
#             ____________________________________________________________________
            
#             Example:
#                 User specifies a flow rate of 1000 kg/day and we want
#                 to find kg/hour:
                
#                 1000 [kg]      
#                     [day]         41.667 [kg] . [day]   
#                 -----------   =         [day]  [hour]  =  41.667 kg/hour
#                 24 [hour]
#                     [day]
                    
#             ____________________________________________________________________
            
#             Example:
#                 User specifies a flow rate of 300000 kg/year and we want
#                 to find kg/hour:
                
#                 300000 [kg]      
#                       [day]             41.667 [kg] . [day]   
#              ----------------------   =        [day]  [hour]  =  34.24 kg/hour
#              365 [day] . 24 [hour]
#                  [year]     [day]


#     '''
    
#     # Peak flowrate
#     if inputs['peak_hydrogen_dispensing_rate_unit'] == 'hour':
#         # We don't need to do anything to the rate because the time is already hours
#         pass
#     elif inputs['peak_hydrogen_dispensing_rate_unit'] == 'day':    
#         peak_flowrate = inputs['peak_hydrogen_dispensing_rate'] / 24
#     elif inputs['peak_hydrogen_dispensing_rate_unit'] == 'year':
#         peak_flowrate = inputs['peak_hydrogen_dispensing_rate'] / 8760
        
#     # Average flowrate
#     if inputs['avg_hydrogen_dispensing_rate_unit'] == 'hour':    
#         # We don't need to do anything to the rate because the time is already hours
#         pass
#     elif inputs['avg_hydrogen_dispensing_rate_unit'] == 'day':
#         avg_flowrate = inputs['avg_hydrogen_dispensing_rate'] / 24
#     elif inputs['avg_hydrogen_dispensing_rate_unit'] == 'year':
#         avg_flowrate = inputs['avg_hydrogen_dispensing_rate'] / 8760
        

#     return avg_flowrate, peak_flowrate
        


def convert_mass_flowrate_to_kg_per_hour(mass_kg, time_unit):
    '''
    Converts the user-specified value from units of "kg per time unit" to
    "kg per hour".
    
    It is also generic, so if we want average flow rate and peak flow rate,
    then we simply call it twice with the appropriate inputs.

    '''    
    # The division factors for converting from "per time_unit" to "per hour"
    factors = {'hour': 1, 'day': 24, 'year': 8760}
    div_factor = factors[time_unit]
    return mass_kg / div_factor


def convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity, num_vehicles, time_unit):
    kg_per_time = num_vehicles * vehicle_capacity
    kg_per_hour = convert_mass_flowrate_to_kg_per_hour(kg_per_time, time_unit)
    return kg_per_hour