import numpy as np
import sys

def calculate_lcoh(lifetime, calculation_type, cost, wacc, h2_flow):
    
    # setup a dataframe to store cost values for each year of the project duration
    time_series = np.arange(0, lifetime+1, 1)
    discounted_cost_series = []
    hydrogen_flow_series = []
    
    # run calculations for each year of the project duration
    for year in time_series:
        
        # calculate discount rate of current year
        discount = (1+wacc)**(year)
        
        # calculate the discounted series of hydrogen production volumes anually
        if year>0:
            hydrogen_flow_series.append(h2_flow*8760/discount)
        else:
            hydrogen_flow_series.append(0)
            
            
        if calculation_type == 'capex':
            
            # in year 0 - equipment costs and installation costs apply
            if year == 0:    
                discounted_cost_series.append(cost/discount)
            # in year 8 - major equipment replacement at 1/4 of the initial cost
            elif year == 8:    
                discounted_cost_series.append(cost/discount/4)
            # no major capital investements in all other years
            else:
                discounted_cost_series.append(0)
                
        elif calculation_type == 'opex':
            
            # in year 0 - none of the operating costs apply and hydrogen is not produced    
            if year>0:
                discounted_cost_series.append(cost/discount)
            # in year 1 and beyond - energy and maintenance costs apply, hydrogen is produced
            else:
                discounted_cost_series.append(0)
                
        else:
            sys.exit('incorrect calculation_type')
            
    # sum all discounted hydrogen volumes
    sum_hydrogen = sum(hydrogen_flow_series)
    
    # set up a dataframe for LCOH of all categories 
    lcoh = sum(discounted_cost_series)/sum_hydrogen

    return lcoh