'''
An example of how to build a dictionary structure that will contain the
min/max calculated costs for all costs associated with every piece of equipment.

This will be passed to the front-end for filtering and displaying results
based on user selection.

This is implemented separately in the main script. This is just for illustration.

'''


import json

cost_names = ['equipment',
              'installation',
              'maintenance',
              'energy',
              'equipment_lcoh',
              'installation_lcoh',
              'maintenance_lcoh',
              'energy_lcoh',
              'capacity',
              'sum_capex',
              'sum_lcoh',
              'sum_opex']

hardware = ['piston compressor',
            'diaphragm compressor',
            'centrifugal compressor',
            'type I/II storage',
            'type III/IV storage',
            'dispenser'
            ]

# Placeholder dummy values
cost_values = {cost_type: {'min': 0, 'max': 10} for cost_type in cost_names}

# Add the dummy dictionary for min/max costs for each type of hardware in the list
costs = {hw: cost_values for hw in hardware}
# Replace the min/max placeholder for 'capacity' with amount/unit
for hw in costs:
    costs[hw]['capacity'] = {'amount': 1000, 'unit': 'KG'}

# Save a JSON file containing the nested dictionary structure
with open("example_structure.json", "w") as f:
    json.dump(costs, f, indent=4, sort_keys=False)
    
# Read the data from the JSON file
with open("example_structure.json", "r") as f:
    loaded_dict = json.load(f)