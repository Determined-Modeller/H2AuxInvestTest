import CoolProp.CoolProp as CP

# A place to store constants that may be used across multiple files
specific_heat_r = 1.41
specific_gas_constant = 8.314
h2_molar_mass = CP.PropsSI('MOLARMASS', 'T', 293, 'P', 100000, 'Hydrogen') * 1000