'''
Tests for the flowrate conversion functions.
Test cases are generated using the Excel sheet "flowrate_conversion_utility.xlsx"

'''

import pytest
import numpy as np
import math

from lib.flowrate_conversion import convert_mass_flowrate_to_kg_per_hour, convert_vehicles_per_time_to_kg_per_hour


# Test the function for converting vehicles per time to kg per hour
@pytest.mark.parametrize("vehicle_capacity, num_vehicles, time_unit, expected_result", [
    # Define the test cases you want to run here
    (50, 3, 'hour', 150),
    (50, 25, 'day', 52.083), 
    (50, 600, 'year', 3.425)
])
def test_convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity, num_vehicles, time_unit, expected_result):
    result = convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity, num_vehicles, time_unit)
    result = np.round(result, 3)
    
    # Assert the result is as expected
    assert math.isclose(result, expected_result)
    
    
# Test the function for converting kg per time to kg per hour
@pytest.mark.parametrize("hydrogen_mass, time_unit, expected_result", [
    # Define the test cases you want to run here
    (600, 'hour', 600),
    (35000, 'day', 1458.333), 
    (560000, 'year', 63.927)
])
def test_convert_mass_flowrate_to_kg_per_hour(hydrogen_mass, time_unit, expected_result):
    result = convert_mass_flowrate_to_kg_per_hour(hydrogen_mass, time_unit)
    result = np.round(result, 3)
    
    # Assert the result is as expected
    assert math.isclose(result, expected_result)