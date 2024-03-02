# Helper functions

# Define some helper functions
def extract_pressure_and_mass_from_string(input_str):
    '''
    Extract pressure and mass information from a string in the format "200_bar_580_kg".
    
    Inputs:
        input_str (str)
            Name of option selected by user from drop-down list, containing the
            pressure and mass information. Follows the format "200_bar_580_kg".
            
    Returns:
        pressure (float)
        mass (float)
    '''
    
    # Split the string into individual words
    words = input_str.split("_")
    pressure, mass = float(words[0]), float(words[2])
    return pressure, mass


def get_dispensing_rate_unit_from_string(rate_str):
    '''
    Extract the dispensing rate time unit from a string in the format "kg_per_day".
    
    Inputs:
        rate_str (str)
            Name of option selected by user from drop-down list, containing the
            dispensing rate information. Follows the format "X_per_Y", where
            X is "kg" or "vehicles", and Y is a time "hour", "day", or "year".
            
    Returns:
        quant_unit (str)
            A string "vehicles" or "kg".
        rate_unit (str)
            A string representing "per unit time", e.g. "hour", "day", or "year".
    '''
    # Split the string into individual words
    words = rate_str.split("_")
    quant_unit = words[0]
    rate_unit = words[-1]
    
    return quant_unit, rate_unit