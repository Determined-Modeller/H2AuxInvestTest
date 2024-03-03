# An example script

import pickle
import json
from openapi_client.models.request_schema import RequestSchema
from openapi_client.models.response_schema import ResponseSchema
from lib.h2_aux_cost_calculator import H2AuxCostCalculator
from mapper.api_algorithm_mapper import ApiAlgorithmMapper

# Load the example response data from the pickle file
# with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\example_user_response_data.pkl", "rb") as a_file:
#     response = pickle.load(a_file)
# del a_file

############################################
#### Pre-processing user submitted data ####
############################################




json_string = '''
{
  "hydrogen_inlet_pressure": {
    "value": 10,
    "unit": "BAR"
  },
  "dispensing_type": "TUBETRAILER",
  "energy_price_per_mwh": 10,
  "is_storage_required": true,
  "storage_mass": {
    "value": 10,
    "unit": "KG"
  },
  "storage_pressure": {
    "value": 20,
    "unit": "BAR"
  },
  "dispensing_pressure": {
    "value": 20,
    "unit": "BAR"
  },
  "dispensing_mass": {
    "value": 20,
    "unit": "KG_PER_HOUR"
  },
  "avg_hydrogen_dispensing_rate": {
    "value": 20,
    "unit": "KG_PER_HOUR"
  },
  "peak_hydrogen_dispensing_rate": {
    "value": 30,
    "unit": "KG_PER_HOUR"
  },
  "lifetime_years": 20,
  "wacc": 0.1,
  "is_precooling_used": true,
  "vehicle_type": "TUBETRAILER"
}
'''

request = RequestSchema.from_json(json_string)
print(request.to_dict)

mapper = ApiAlgorithmMapper()
algorithm_input = mapper.requestToAlgInput(request.to_dict())
print('-----------------------')
print(algorithm_input)

# create a class from the mapper 
# call the function from the object variable -> pass in the request 

algorithm = H2AuxCostCalculator()
costs_dict_all_hardware = algorithm.calculate_costs(algorithm_input)

algorithm_output = mapper.algOutToResponse(costs_dict_all_hardware)
response = ResponseSchema.from_dict(algorithm_output)
print('-----------------------')
print(algorithm_output)


# Export to JSON as a test
with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\costs_dict_all_hardware.json", "w") as f:
    json.dump(costs_dict_all_hardware, f, indent=4, sort_keys=False)
    
# Read the data from the JSON file
with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\costs_dict_all_hardware.json", "r") as f:
    loaded_costs_dict = json.load(f)
    
# with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\response.json", "w") as f:
#     json.dump(response, f, indent=4, sort_keys=False)
    
# Read the data from the JSON file
with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\response.json", "r") as f:
    loaded_costs_dict = json.load(f)