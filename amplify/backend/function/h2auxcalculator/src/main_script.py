# An example script

from request_schema import RequestSchema
from calculator_service import CalculatorService

# Load the example response data from the pickle file
# with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\example_user_response_data.pkl", "rb") as a_file:
#     response = pickle.load(a_file)
# del a_file

############################################
#### Pre-processing user submitted data ####
############################################

response = {}
response['hydrogen_inlet_pressure'] = 30
response['hydrogen_inlet_pressure_units'] = 'bar' # 'bar' or 'psi'
response['dispensing_type'] = 'tubetrailer' # 'tubetrailer' or 'vehicle'
response['vehicle_type'] = 'hdv' # 'car' or 'hdv'
response['energy_price_per_mwh'] = 117
response['is_storage_required'] = True
response['storage_requirement'] = 1000
response['storage_requirement_unit'] = 'KG' # 'days', 'kg', or 'Nm3'
response['storage_pressure'] = 500
response['storage_pressure_units'] = 'psi' # 'bar' or 'psi'
# Pressure and mass selected from drop-down list
response['dispensing_pressure_and_mass'] = '500_bar_1300_kg' # or 'user_specified'
# If the user specifies their own pressure and mass
response['dispensing_pressure'] = 999
response['dispensing_mass'] = 99
# User-specified average and peak dispensing rates
response['avg_hydrogen_dispensing_rate'] = 100
response['peak_hydrogen_dispensing_rate'] = 20
# User-specified average and peak dispensing rate units
response['avg_hydrogen_dispensing_rate_unit'] = 'kg_per_day' # 'kg_per_day', 'kg_per_year', 'vehicles_per_day', or 'vehicles_per_year'
response['peak_hydrogen_dispensing_rate_unit'] = 'kg_per_hour' # 'kg_per_hour' or 'vehicles_per_hour'

response['wacc'] = 0.1 # WACC
response['lifetime'] = 20 # lifetime in years

# I think this will be calculated rather than being entered by the user
response['is_precooling_used'] = True # is pre-cooling used (dispensing_var6)


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
    "value": 500,
    "unit": "PSI"
  },
  "dispensing_pressure": {
    "value": 500,
    "unit": "PSI"
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

calculator = CalculatorService()
response = calculator.calculate(request)

# request = RequestSchema.from_json(json_string)
# print(request.to_dict)

# mapper = ApiAlgorithmMapper()
# algorithm_input = mapper.requestToAlgInput(request.to_dict())
# print('-----------------------')
# print(algorithm_input)

# # create a class from the mapper 
# # call the function from the object variable -> pass in the request 

# algorithm = H2AuxCostCalculator()
# costs_dict_all_hardware = algorithm.calculate_costs(algorithm_input)

# algorithm_output = mapper.algOutToResponse(costs_dict_all_hardware)
# response = ResponseSchema.from_dict(algorithm_output)
# print('-----------------------')
# print(response)


# # Export to JSON as a test
# with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\costs_dict_all_hardware.json", "w") as f:
#     json.dump(costs_dict_all_hardware, f, indent=4, sort_keys=False)

# # Read the data from the JSON file
# with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\costs_dict_all_hardware.json", "r") as f:
#     loaded_costs_dict = json.load(f)

# # Export to JSON as a test 
# with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\response.json", "w") as f:
#     json.dump(algorithm_output, f, indent=4, sort_keys=False)

# # Read the data from the JSON file
# with open("C:\\Users\\Culik\\Documents\\GitHub\\H2AuxInvestTest\\amplify\\backend\\function\\h2auxcalculator\\src\\lib\\response.json", "r") as f:
#     loaded_costs_dict = json.load(f)