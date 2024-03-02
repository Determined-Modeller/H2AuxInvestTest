import pickle

# A dictionary containing examples of user responses
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


# Save to pickle file
with open("example_user_response_data.pkl", "wb") as a_file:
    pickle.dump(response, a_file)
    