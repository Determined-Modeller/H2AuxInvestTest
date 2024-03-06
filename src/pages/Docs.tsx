

import { Box, Typography } from "@mui/joy";
import Markdown from 'markdown-to-jsx';


const Docs = () => {
    const documentationSections = `
    **Hydrogen Infrastructure Costing Tool - Documentation**

    **Purpose**
    
    The H2 AuxInvest project aims to solve the problem of poor knowledge transfer in Scotland's Hydrogen Supply Chain by providing an open-source tool. This tool helps developers assess the feasibility and performance of low TRL (Technology Readiness Level) components from small manufacturers, enhancing decision-making and encouraging the use of innovative technologies in hydrogen projects.
    
    **Vision**
    
    H2AuxInvest aims to provide a platform offering:
    
    - **Optimisation and Sizing:** Shortcut methods for storage and compression based on user inputs.
    - **Financial Insights:** Detailed CAPEX and OPEX comparisons of low TRL solutions against established systems.
    - **Clear Reporting:** Comprehensive reports highlighting key metrics, design limitations, and recommendations.
    - **Full Value Chain:** The project aims to expand the tool to cover hydrogen thermal demands, and accurately estimate transport and storage costs from a supply site of your choice.
    - **Supply Chain Visibility:** The project aims to build, update, and share up-to-date open-source cost correlations for multiple low TRL and novel hydrogen technologies.
    - **Benchmarking and Estimation:** Our tool encourages a free comparison of key variables, capable of exploring different multi-technology approaches.
    - **Trusted Partner:** Working with manufacturers using a transparent and fair verification process, we allow them to share important information for potential users and investors in H2 infrastructure.
    
    **Choosing Your Inputs**
    
    In this section, the main input requirements, assumptions, and hints are provided to help selection of inputs for non-expert users.
    
    Supply Pressure
    
    The supply pressure available to the site (either through tube trailers or gas distribution pipes) is essential for sizing and the hydrogen infrastructure.
    
    The placeholder assumption here is of a hydrogen pipeline connected to hydrogen distribution piping, delivering hydrogen at up to 7 bar. Should this instead be via tube trailer, please choose the specific tube trailer delivery pressure, usually available on a public datasheet or by request.
    
    If you are still unsure about what pressure to choose, but know you will not be connected to the gas distribution network, it is sensible to start with one of the following commonly used tube trailer pressures in industry:
    
    - 200 bar
    - 300 bar
    - 380 bar
    - 450 bar
    - 500 bar
    
    H2 User
    
    The parameters of the hydrogen demand (i.e., tank capacity and dispensing pressure of the vehicles) are crucial for specifying the correct hydrogen infrastructure. Please see the vehicle/trailer datasheet, or contact the vendor to confirm that this is correct.
    
    Jargon Buster - H35 is often used to indicate that fuelling is taking place at 350 bar and ambient temperature without precooling.
    
    If you are still unsure about what pressure to choose, but know you will be supplying tube trailers, it is sensible to start with one of the following commonly used configurations:
    
    - 200 bar, 580kg H2
    - 300 bar, 840kg H2
    - 380 bar, 1000kg H2
    - 450 bar, 1150kg H2
    - 500 bar, 1300kg H2
    
    If you are still unsure about what pressure to choose, but know you will be supplying small passenger vehicles, it is sensible to start with one of the following commonly used configurations:
    
    - 350 bar, 5kg H2
    - 700 bar, 5kg H2
    
    If you are still unsure about what pressure to choose, but know you will be supplying heavy duty vehicles, it is sensible to start with one of the following commonly used configurations:
    
    - 350 bar, 30kg H2
    - 700 bar, 30kg H2
    
    H2 Storage
    
    Storage makes up a significant portion of the final cost of any hydrogen supply infrastructure, in this section, you specify what storage infrastructure you wish to use, outside of the fuelling cascade required to meet peak demand (when this is applicable).
    
    If you are directly connected to a part of the national gas grid, in an area where hydrogen will be usable you are advised to not include storage (unless operational integrity is a priority). A generally applied assumption where you are unsure about the distribution of hydrogen demand and do not have available profiles is to size this storage for a minimum of 2 days of demand on site, a worked example of this is below.
    
    Suggested minimum used storage = (number of vehicle fills over 2 days at peak frequency x vehicle storage tank size) or (peak hydrogen delivery flowrate required per hour \* 48 hours)
    
    H2 Demand
    
    The distribution of hydrogen demand is an important part of accurately specifying and costing any hydrogen infrastructure. It is recommended that when finally designing hydrogen infrastructure, that this is completed, using expected/measured delivery and filling schedules, traffic data, vendor information, and other sources.
    
    However, for the purpose of shortcut estimation, as this information is rarely available during early estimation stages, peak and average supply rates can be used with a "standard" normal distribution. Application of more sophisticated options for a probabilistic approach, incorporating different standard profiles, considering queue theory and maximum number of back-to-back fills is an ongoing development task for the project.
    
    If you are unsure about this demand we suggest specifying this using the "vehicles per hour/vehicles per day" units options, specifying your peak demand by the highest number of fills you require during an hour/day. You should then select the average demand by selecting the "number of vehicles per hour/vehicles per day", filling in what you expect to be the average demand level.
    
    If you are looking to explore limitations on pressure selection please consider application of standard values from SAEJ2601. Generally speaking, a maximum filling velocity of 3.6 kg/min and 7.2 kg/min respectively are suggested for H35 and H70 Nozzles respectively. This can be used to estimate the upper bound of the peak flowrate demand.
    
    Detailed Configuration
    
    The Weighted Average Cost of Capital (WACC) represents a firm's blended cost of capital across all sources, including debt and equity, weighted by their respective proportions in the company's capital structure. Choosing a sensible WACC value is crucial for evaluating investment decisions and calculating the net present value (NPV) of future cash flows, where accuracy in estimating the cost components and their weights directly impacts investment appraisal outcomes.
    
    Sensible selection of WACC involves careful consideration of the current market conditions, the firm's capital structure, and risk factors, ensuring that the chosen rate realistically reflects the company's cost of financing. 12% is used as a standard value to be representative of current high interest rates and risk perception for hydrogen infrastructure. The cost of equity can be estimated using models such as the Capital Asset Pricing Model (CAPM), which considers the risk-free rate, the market risk premium, and the company's beta (a measure of its volatility compared to the market).
    
    The lifetime of the project depends on the intensity of use, maintenance applied, and replacement schedule, a standard assumption used is to assume a lifetime in the range of 15-25 years.
    
    Precooling is used to refrigerate hydrogen coming out of storage to achieve a higher number of back-to-back fills and higher State of Charge "SoC" in the hydrogen tanks, this model assumes an ambient filling model (no precooling) where precooling is not selected, and where it is selected, thermodynamic equations are applied to cool hydrogen to -40°C, as per the standard SAEJ2601. There is currently no ability to change this assumption in the tool, which is an active development task.
    
    **Outputs**
    
    The tool provides the following key outputs, separated by purpose:
    
    Engineering Outputs
    
    - Compressor Design Power
    
    – Minimum size requirement of the compressor to satisfy the demand (kW)
    
    - Compressor Cooling Energy
    
    – Average per kg power requirement to cool the hydrogen for efficient interstage compression cooling.
    
    - Compression Specific Energy
    
    \- Average per kg power requirement to compress the hydrogen.
    
    - Storage Capacity
    
    – Maximum hydrogen inventory in additional hydrogen site storage
    
    - Storage Pressure
    
    – Peak hydrogen storage pressure in additional hydrogen site storage
    
    - Number of Dispensers
    
    – Maximum number of dispensing hoses that can be deployed on site with infrastructure
    
    - Dispenser Pressure
    
    – Delivery pressure of hydrogen from dispensers on site
    
    - Technology Configurator
    
    – Advantages and disadvantages of different hydrogen technologies are explored here, this should be read to ensure that configurations are sensible and compatible with undisclosed aspects of the project
    
    Cost Estimation Outputs
    
    - Fixed Costs
    
    – This range shows the estimated up front capital cost (CAPEX) of the hydrogen infrastructure
    
    - Operating Costs
    
    \- This range shows the estimated annual operating cost (OPEX) of the hydrogen infrastructure
    
    - Levelized Cost of Compression, Storage and Compression Breakdown
    
    – This graph shows the breakdown of the contribution of different cost elements (Energy, Installation, Maintenance, Equipment) for all 3 equipment classes (Compression, Dispensing, Compression) together.
    
    - Fixed Costs Breakdown – This graph breaks down fixed costs for all 3 equipment classes (Compression, Dispensing, Compression).
    - Operating Costs Breakdown - This graph breaks down variable costs all 3 equipment classes (Compression, Dispensing, Compression) together.
    
    Note – unless otherwise stated, all financial outputs are in 2024£
    
    **Calculation Methodology**
    
    H2 AuxInvest uses a combination of shortcut optimization algorithms and detailed simulation models to analyze input data against high TRL benchmark and available literature data.
    
    The methodology incorporates real-world data and supplier-agnostic information to provide a balanced view of new vs. established technologies. The functions to calculate this are provided in the project folder. If you notice an issue/wish to improve a function, please raise an issue on the project github and/or send a push request.
    
    Speak about methodology and calculation of the following primary modules:
    
    1. Flowrate Calculation
    2. Compressor Class
    3. Storage Class
    4. Dispenser Class
    5. LCOH Calculator
    
    Flowrate Calculation
    
    Outlined below are two utility functions used for converting mass flow rates and vehicle refueling rates into standardized units of kilograms per hour (kg/h). These functions facilitate the handling of various input units, ensuring consistent calculations across different scenarios.
    
    **1\. convert_mass_flowrate_to_kg_per_hour(mass_kg, time_unit)**
    
    Converts a given mass flow rate from "kilograms per specified time unit" to "kilograms per hour".
    
    Parameters:
    
    - **mass_kg**: The mass flow rate in kilograms per the specified time unit.
    - **time_unit**: The unit of time for the given mass flow rate. Valid options are **"hour"**, **"day"**, and **"year"**.
    
    Returns:
    
    - The converted mass flow rate in kilograms per hour (kg/h).
    
    Example Usage:
    
    avg_flowrate_kg_per_hour = convert_mass_flowrate_to_kg_per_hour(mass_kg=120, time_unit='day')
    
    **2\. convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity, num_vehicles, time_unit)**
    
    Calculates the total mass flow rate in kilograms per hour based on the refueling capacity of a single vehicle and the total number of vehicles refueled within a specified time period.
    
    Parameters:
    
    - **vehicle_capacity**: The fuel capacity of a single vehicle in kilograms (kg).
    - **num_vehicles**: The total number of vehicles refueled within the specified time period.
    - **time_unit**: The unit of time over which the vehicles are refueled. Valid options are **"hour"**, **"day"**, and **"year"**.
    
    Returns:
    
    - The total mass flow rate resulting from refueling the specified number of vehicles, converted to kilograms per hour (kg/h).
    
    Example Usage:
    
    total_kg_per_hour = convert_vehicles_per_time_to_kg_per_hour(vehicle_capacity=5, num_vehicles=24, time_unit='day')
    
    **Usage Notes:**
    
    - These functions are designed to be generic and applicable to various scenarios involving mass flow rates and vehicle refueling.
    - Ensure that the **time_unit** parameter matches one of the expected strings (**"hour"**, **"day"**, or **"year"**) to avoid key errors.
    - The functions can be called separately or in conjunction, depending on the specific conversion requirements of your application.
    
    Compressor Class
    
    **Compressor (Base Class)**
    
    This parent class is designed as a base for specific compressor types and is not intended to be instantiated directly. It implements common calculations and properties shared among different compressor types to avoid duplicating code.
    
    Constructor - Compressor(inputs, avg_flowrate, peak_flowrate, comp_type)
    
    - **Parameters:**
      - **inputs**: User input parameters for the compressor.
      - **avg_flowrate**: Average flow rate through the compressor.
      - **peak_flowrate**: Peak flow rate through the compressor.
      - **comp_type**: The type of compressor (e.g., piston, diaphragm).
    
    Methods
    
    - **set_peak_flowrate(new_peak_flowrate)**: Update the peak flow rate.
    - **do_all_calculations()**: Perform all necessary calculations for the compressor.
    - **calculate_number_of_stages()**: Determine the number of compression stages needed based on the input and output pressures.
    - **calculate_inter_stage_p()**: Calculate inlet and outlet pressures and inlet temperature for each stage.
    - **calculate_outlet_temp()**: Calculate the outlet temperature for each compression stage.
    - **calculate_isentropic_efficiency()**: Calculate or retrieve the isentropic efficiency for each stage.
    - **calculate_work_done()**: Calculate the work done in each compression stage.
    - **calculate_compressor_power()**: Compute the power requirements of the compressor.
    - **calculate_compression_energy()**: Calculate the energy needed to compress one kg of hydrogen for each stage.
    - **calculate_cooling_energy()**: Estimate the energy required for cooling hydrogen between each compression stage.
    - **calculate_compressor_equipment_cost()**, **calculate_compressor_installation_cost()**, **calculate_compressor_maintenance()**, **calculate_compressor_energy()**, **calculate_cost_summary()**: Methods for calculating various costs and summarizing the overall cost.
    
    **PistonCompressor (Child Class)**
    
    Inherits from Compressor. This class is specific to piston compressors and may override parent class methods for calculations specific to piston compressors.
    
    Constructor - PistonCompressor(inputs, avg_flowrate, peak_flowrate)
    
    Overridden Methods
    
    - **calculate_isentropic_efficiency()**: Calculate the isentropic efficiency for each stage, specific to piston compressors.
    
    **DiaphragmCompressor (Child Class)**
    
    Inherits from **Compressor**. This class is specific to diaphragm compressors.
    
    Constructor - DiaphragmCompressor(inputs, avg_flowrate, peak_flowrate)
    
    **CentrifugalCompressor (Child Class)**
    
    Inherits from **Compressor**. This class is specific to centrifugal compressors and may require its own implementation for certain calculations.
    
    Constructor - CentrifugalCompressor(inputs, avg_flowrate, peak_flowrate)
    
    Storage Calculation
    
    **Storage (Base Class)**
    
    The **Storage** class represents a storage system for hydrogen. It includes methods for calculating storage capacity, costs, and the levelized cost of hydrogen (LCOH).
    
    Constructor - Storage(inputs, avg_flowrate, peak_flowrate, storage_type)
    
    - **Parameters:**
      - **inputs**: A dictionary containing input parameters for the storage system.
      - **avg_flowrate**: The average flow rate of hydrogen (assumed placeholder value for calculations).
      - **peak_flowrate**: The peak flow rate of hydrogen.
      - **storage_type**: A string indicating the type of storage system.
    
    Methods
    
    - **set_peak_flowrate(new_peak_flowrate)**: Sets a new peak flowrate.
    - **set_avg_flowrate(new_avg_flowrate)**: Sets a new average flowrate.
    - **calculate_all()**: A convenience method to execute all calculations related to the storage system.
    - **calculate_storage_capacity()**: Converts storage capacity from user-defined units to kg.
    - **calculate_storage_equipment_cost()**: Calculates the cost of the storage equipment.
    - **calculate_storage_installation_cost()**: Estimates the cost of installing the storage equipment.
    - **calculate_storage_maintenance()**: Estimates the maintenance costs for the storage system.
    - **calculate_storage_energy()**: Calculates the energy costs associated with the storage system.
    - **calculate_cost_summary()**: Summarizes the capital and operational expenses and calculates the LCOH.
    
    **Storage_I_II (Child Class)**
    
    Inherits from **Storage**. This class represents Type I/II hydrogen storage systems.
    
    Constructor - Storage_I_II(inputs, avg_flowrate, peak_flowrate)
    
    Overridden Methods
    
    - **calculate_storage_equipment_cost()**: Custom equipment cost calculation for Type I/II storage systems.
    
    **Storage_III_IV (Child Class)**
    
    Inherits from **Storage**. This class is specific to Type III/IV hydrogen storage systems.
    
    Constructor - Storage_III_IV(inputs, avg_flowrate, peak_flowrate)
    
    Overridden Methods
    
    - **calculate_storage_equipment_cost()**: Custom equipment cost calculation for Type III/IV storage systems. Note: The provided method's documentation mentions it's identical to the base class's implementation. If there's no distinct calculation for Type III/IV, this method may not need to be overridden.
    
    Dispenser Class
    
    The **Dispenser** class models a hydrogen fuel dispenser, incorporating calculations for equipment costs, maintenance, installation costs, energy consumption, and the levelized cost of hydrogen (LCOH).
    
    **Constructor**
    
    Dispenser(avg_flowrate, peak_flowrate, inputs)
    
    - **Parameters:**
      - **avg_flowrate**: The average flow rate of hydrogen.
      - **peak_flowrate**: The peak flow rate of hydrogen.
      - **inputs**: A dictionary containing various input parameters such as lifetime, WACC (Weighted Average Cost of Capital), energy price, and specifics about the dispensing vehicle including type, pressure, and mass.
    
    **Methods**
    
    - **calculate_all()**: Executes all relevant calculations for the dispenser setup.
    - **calculate_vehicle_properties(vehicle, pressure, capacity)**: Computes properties related to the vehicle being refuelled, including slow and quick refuel times based on dispensing pressure and mass.
    - **calculate_num_dispensers_needed()**: Determines the number of dispensers required to meet peak hydrogen flow demands.
    - **calculate_dispenser_equipment_cost()**: Estimates the cost of the dispenser equipment based on the pressure requirements.
    - **calculate_dispenser_installation_cost()**: Calculates the cost associated with installing the dispensers.
    - **calculate_dispenser_maintenance()**: Estimates the annual maintenance costs for the dispensers.
    - **calculate_dispenser_energy()**: Computes the energy costs associated with operating the dispensers, which varies by the dispensing pressure.
    - **calculate_cost_summary()**: Summarizes the capital expenditures (CAPEX), operational expenditures (OPEX), and calculates the overall levelized cost of hydrogen (LCOH) for the dispenser setup.
    
    **Calculations and Assumptions**
    
    The class includes several assumptions about refuelling rates and additional time required for connection/disconnection, which are used to determine refuelling times. These values and the specific calculations depend on whether precooling is used and the type of vehicle being refuelled (tube trailer or passenger vehicle).
    
    Cost calculations are influenced by the specified dispensing pressure, affecting equipment cost, installation cost, and energy cost. Maintenance costs are assumed to be a percentage of the equipment cost, and all costs contribute to the calculation of the levelized cost of hydrogen (LCOH).
    
    **Usage**
    
    Instantiate the **Dispenser** class with the average and peak hydrogen flow rates and a dictionary of input parameters. Use the **calculate_all()** method to perform all calculations and access the **results** attribute to retrieve detailed cost and operational information.
    
    LCOH Calculator
    
    The **H2AuxCostCalculator** class is designed to facilitate comprehensive cost analysis for hydrogen supply chain hardware. It integrates functionalities for converting flow rates and pressures, instantiating hardware components, performing necessary calculations, and compiling cost summaries.
    
    **Constructor**
    
    pythonCopy code
    
    H2AuxCostCalculator()
    
    Initializes an instance of the **H2AuxCostCalculator** class.
    
    **Methods**
    
    **calculate_costs(response: dict) -> dict**
    
    Performs all required calculations to estimate the costs associated with different pieces of hydrogen supply chain hardware based on user inputs.
    
    - **Parameters:**
      - **response**: A dictionary containing user-specified parameters and selections for hardware configurations, including pressure and mass values, dispensing rates, and whether storage is required.
    - **Returns:**
      - A dictionary mapping each piece of hardware to its corresponding cost calculations and results.
    
    **Workflow and Calculations**
    
    1. **Extracting Parameters**: The method extracts and processes user inputs, including converting pressure units to bars and determining flow rates in kilograms per hour.
    2. **Instantiation of Hardware Classes**:
        - Creates instances of **Dispenser**, **Storage_I_II**, **Storage_III_IV**, **CentrifugalCompressor**, **DiaphragmCompressor**, and **PistonCompressor** based on the processed inputs.
    3. **Performing Calculations**:
        - For each hardware component, it calls the relevant method (**calculate_all()** or **do_all_calculations()**) to perform the necessary cost and operational calculations.
    4. **Compiling Results**:
        - Aggregates the results from each hardware component into a single dictionary, providing a comprehensive overview of the costs associated with the configured hydrogen supply chain hardware.
    
    **Usage**
    
    Instantiate the class and call the **calculate_costs** method with the user input parameters as a dictionary. The method returns a detailed dictionary containing cost analysis for each piece of hardware involved in the hydrogen supply chain.
    
    Example Usage:
    
    calculator = H2AuxCostCalculator() costs_dict = calculator.calculate_costs(user_input_parameters)
    
    **Notes**
    
    - The **calculate_costs** method relies on helper functions for unit conversions and extracting numerical values from input strings.
    - It supports dynamic inclusion of storage hardware based on user input.
    - This class serves as a central point for initiating cost calculations across various components of hydrogen infrastructure
    
    **Assumptions/Limitations**
    
    The tool's accuracy is dependent on the quality and completeness of the input data. Assumptions are made regarding standard operational conditions and calculation workflow, it is recommended to consult with specialists for critical decisions. The tool is continuously updated to reflect new data and user feedback, yet it may not capture all nuances of every unique project scenario.
    `;

    return (
        <Box
            sx={{
                height: '100vh',
                overflowY: 'scroll',
                padding: '20px',
            }}
        >
            <Typography level="h1" sx={{ marginBottom: '20px' }}>Documentation</Typography>
            <Markdown>{documentationSections}</Markdown>
        </Box>
    );
};

export default Docs;