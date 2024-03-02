# An example script

import pickle
import json
from h2_aux_cost_calculator import H2AuxCostCalculator


# Load the example response data from the pickle file
with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\example_user_response_data.pkl", "rb") as a_file:
    response = pickle.load(a_file)
del a_file

############################################
#### Pre-processing user submitted data ####
############################################

algorithm = H2AuxCostCalculator()
costs_dict_all_hardware = algorithm.calculate_costs(response)


# Export to JSON as a test
with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\costs_dict_all_hardware.json", "w") as f:
    json.dump(costs_dict_all_hardware, f, indent=4, sort_keys=False)
    
# Read the data from the JSON file
with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\costs_dict_all_hardware.json", "r") as f:
    loaded_costs_dict = json.load(f)