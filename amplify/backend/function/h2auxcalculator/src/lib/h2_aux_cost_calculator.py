from flowrate_conversion import convert_mass_flowrate_to_kg_per_hour, convert_vehicles_per_time_to_kg_per_hour
from storage_classes import Storage_I_II, Storage_III_IV
from dispenser_classes import Dispenser
from compressor_classes import CentrifugalCompressor, DiaphragmCompressor, PistonCompressor
import helper_functions as helper

class H2AuxCostCalculator:
    def __init__(self):
        pass

    def calculate_costs(self, response: dict) -> dict:

        # Extract pressure and mass values from string obtained from drop-down list
        if response['dispensing_pressure_and_mass'] != 'user_specified':
            response['dispensing_pressure'], response['dispensing_mass'] = helper.extract_pressure_and_mass_from_string(response['dispensing_pressure_and_mass'])

        # Get the strings from the average and peak dispensing questions e.g. 'kg_per_hour'
        avg_str = response['avg_hydrogen_dispensing_rate_unit']
        peak_str = response['peak_hydrogen_dispensing_rate_unit']

        # We need to know the quantity (kg or vehicles) and rate (per hour, per day, per year) specified
        response['avg_hydrogen_dispensing_rate_quant'], response['avg_hydrogen_dispensing_rate_unit'] = helper.get_dispensing_rate_unit_from_string(avg_str)
        response['peak_hydrogen_dispensing_rate_quant'], response['peak_hydrogen_dispensing_rate_unit'] = helper.get_dispensing_rate_unit_from_string(peak_str)


        # Handle peak/avg flowrate conversion between vehicles/time to kg/time
        # Average flow rate conversion
        if response['avg_hydrogen_dispensing_rate_quant'] == 'vehicles':
            avg_flowrate = convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity=response['dispensing_mass'],
                                                                    num_vehicles=response['avg_hydrogen_dispensing_rate'],
                                                                    time_unit=response['avg_hydrogen_dispensing_rate_unit'])

        elif response['avg_hydrogen_dispensing_rate_quant'] == 'kg':
            avg_flowrate = convert_mass_flowrate_to_kg_per_hour(mass_kg=response['avg_hydrogen_dispensing_rate'],
                                                                time_unit=response['avg_hydrogen_dispensing_rate_unit'])


        # Peak flow rate conversion
        if response['peak_hydrogen_dispensing_rate_quant'] == 'vehicles':
            peak_flowrate = convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity=response['dispensing_mass'],
                                                                    num_vehicles=response['peak_hydrogen_dispensing_rate'],
                                                                    time_unit=response['peak_hydrogen_dispensing_rate_unit'])

        elif response['peak_hydrogen_dispensing_rate_quant'] == 'kg':
            peak_flowrate = convert_mass_flowrate_to_kg_per_hour(mass_kg=response['peak_hydrogen_dispensing_rate'],
                                                                time_unit=response['peak_hydrogen_dispensing_rate_unit'])

        print(avg_flowrate)
        print(peak_flowrate)


        ####################################################
        ##### Create instances of all hardware classes #####
        ####################################################

        # Dispenser class
        dispenser = Dispenser(inputs=response, avg_flowrate=avg_flowrate, peak_flowrate=peak_flowrate)

        # Storage classes - pass the calculated average flow rate to constructor
        storage_a = Storage_I_II(inputs=response, avg_flowrate=avg_flowrate, peak_flowrate=peak_flowrate)
        storage_b = Storage_III_IV(inputs=response, avg_flowrate=avg_flowrate, peak_flowrate=peak_flowrate)

        # Compressor classes
        centrifugal_compressor = CentrifugalCompressor(inputs=response, avg_flowrate=avg_flowrate, peak_flowrate=peak_flowrate)
        diaphragm_compressor = DiaphragmCompressor(inputs=response, avg_flowrate=avg_flowrate, peak_flowrate=peak_flowrate)
        piston_compressor = PistonCompressor(inputs=response, avg_flowrate=avg_flowrate, peak_flowrate=peak_flowrate)

        # Store references to hardware class instances for later use
        hardware = [dispenser,
                    centrifugal_compressor,
                    diaphragm_compressor,
                    piston_compressor]

        if response['is_storage_required']:
            hardware += [storage_a, storage_b]


        #########################################################
        ##### Run calculations for each piece of equipment ######
        #########################################################

        # Storage
        if response['is_storage_required']:
            storage_a.calculate_all()
            storage_b.calculate_all()

        # Compressors
        centrifugal_compressor.do_all_calculations()
        diaphragm_compressor.do_all_calculations()
        piston_compressor.do_all_calculations()

        # Dispenser
        dispenser.calculate_all()

        #########################################################
        ###### Compile results for all pieces of equipment ######
        #########################################################

        # Get the 'results' dictionary for every piece of equipment
        costs_dict_all_hardware = {hw.name: hw.results for hw in hardware}

        return costs_dict_all_hardware