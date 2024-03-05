

import { Box, Typography } from "@mui/joy";



const Docs = () => {
    const documentationSections = [
        {
            title: "Purpose",
            content: `The H2 AuxInvest project aims to solve the problem of poor knowledge transfer in Scotland's Hydrogen Supply Chain by providing an open-source tool. This tool helps developers assess the feasibility and performance of low TRL (Technology Readiness Level) components from small manufacturers, enhancing decision-making and encouraging the use of innovative technologies in hydrogen projects.

**Open-Source Software Tool**  
We created a powerful open-source calculation tool, made it accessible and free to access, aiming to:
- Utilize real-world, low TRL datasets from new manufacturers alongside high TRL data.
- Allow for the easy integration of user data sources.
- Generate key metrics to enable informed equipment investment decisions.

**Vision for H2AuxInvest**  
*A Comprehensive Webtool*  
H2AuxInvest aims to provide a platform that offers:
- **Optimisation and Sizing:** Shortcut methods for storage and compression based on user inputs.
- **Financial Insights:** Detailed CAPEX and OPEX comparisons of low TRL solutions against established systems.
- **Clear Reporting:** Comprehensive reports highlighting key metrics, design limitations, and recommendations.
- **Full Value Chain:** The project aims to expand the tool to cover hydrogen thermal demands, and accurately estimate transport and storage costs from a supply site of your choice.
- **Supply Chain Visibility:** The project aims to build, update and share up-to-date open-source cost correlations for multiple low TRL and novel hydrogen technologies.
- **Benchmarking and Estimation:** Our tool encourages a free comparison of key variables, capable of exploring different multi-technology approaches.
- **Trusted Partner:** Working with manufacturers using a transparent and fair verification process, we allow them to share important information for potential users and investors in H2 infrastructure.`,
        },
        {
            title: "Choosing Your Inputs",
            content: `In this section the main input requirements, assumptions and hints are provided to help selection of inputs for non-expert users

**Supply Pressure** 

The supply pressure available to the site (either through tube trailers or gas distribution pipes) is essential for sizing and the hydrogen infrastructure. 

The placeholder assumption here is of a hydrogen pipeline connected to the gas distribution network (GDN), delivering hydrogen at up to 7 bar. Should this instead be via tube trailer, please choose the specific tube trailer delivery pressure. If you are still unsure about what pressure to choose, but know you will not be connected to the gas distribution network, it is sensible to start with one of the following commonly used trailer pressures in industry:
- 200 bar
- 300 bar
- 380 bar
- 450 bar
- 500 bar

**H2 User**

The parameters of the hydrogen demand (i.e. tank capacity and dispensing pressure of the vehicles) are crucial for specifying the correct hydrogen infrastructure.  Please see the vehicle/trailer datasheet, or contact the vendor to confirm that this is correct.

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


**H2 Storage**

Storage makes up a significant portion of the final cost of any hydrogen supply infrastructure, in this section, you specify what storage infrastructure you wish to use, outside of the fuelling cascade required to meet peak demand (when this is applicable).  

If you are directly connected to a part of the national gas grid, in an area where hydrogen will be usable you are advised to not include storage (unless operational integrity is a priority). A generally applied assumption where you are unsure about the distribution of hydrogen demand and do not have available profiles is to size this storage for a minimum of 2 days of demand on site, a worked example of this is below.  

Suggested minumum used storage = (number of vehicle fills over 2 days at peak frequency x vehicle storage tank size) 
or (peak hydrogen delivery flowrate required per hour * 48 hours)


**H2 Demand**

The distribution of hydrogen demand is an important part of accurately specifying and costing any hydrogen infrastructure. It is recommended that when finally designing hydrogen infrastructure, that this is completed, using expected/measured delivery and filling schedules, traffic data, vendor information and other sources. 

However, for the purpose of shortcut estimation, as this information is rarely available during early estimation stages, peak and average supply rates can be used with a "standard" normal distribution. Application of more sophisiticated options for a probablistic approach, incorporating different standard profiles, considering queue theory and maximum number of back to back fills is an ongoing development task for the project.  

If you are unsure about this demand we suggest specifying this using the "vehicles per hour/vehicles per day" units options, specifying your peak demand by the highest number of fills you require during an hour/day.  You should then select the average demand by selecting the "number of vehicles per hour/vehicles per day", filling in what you expect to be the average demand level.

If you are looking to explore limitations on pressure selection please consider application of standard values from SAEJ2601.  Generally speaking a maximum filling velocity of 3.6 kg/min and 7.2 kg/min respectively are suggested for H35 and H70 Nozzles respectively.  This can be used to estimate the upper bound of the peak flowrate demand:


**Detailed configuration**

The Weighted Average Cost of Capital (WACC) represents a firm's blended cost of capital across all sources, including debt and equity, weighted by their respective proportions in the company's capital structure. Choosing a sensible WACC value is crucial for evaluating investment decisions and calculating the net present value (NPV) of future cash flows, where accuracy in estimating the cost components and their weights directly impacts investment appraisal outcomes. 

Sensible selection of WACC involves careful consideration of the current market conditions, the firm's capital structure, and risk factors, ensuring that the chosen rate realistically reflects the company's cost of financing.  12% is used as a standard value to be representative of current high interest rates and risk perception for hydrogen infrastructure. The cost of equity can be estimated using models such as the Capital Asset Pricing Model (CAPM), which considers the risk-free rate, the market risk premium, and the company's beta (a measure of its volatility compared to the market).

The lifetime of the project depends on the intensity of use, maintainance applied and replacement schedule, a standard assumption used is to assume a lifetime in the range of 15-25 years.

Precooling is used to refrigerate hydrogen coming out of storage to achieve a higher number of back-to-back fills and higher State of Charge "SoC" in the hydrogen tanks, this model assumes a ambient filling model (no precooling) where precooling is not selected, and where it is selected, thermodynamic equations are applied to cool hydrogen to -40c, as per the standard SAEj2601.  There is currently no ability to change this assumption in the tool, which is an active development task.`,
        },
        {
            title: "Outputs",
            content: "The tool provides various outputs, including shortcut equipment sizing, capital expenditure (CAPEX), operational expenditure (OPEX) estimates, levelised costs, key engineering parameters, and technology configuration. These outputs aim to allow users to fairly compare financial and operational considerations for integrating low TRL hydrogen technologies into their projects."
        },
        {
            title: "Calculation Methodology",
            content: "H2 AuxInvest uses a combination of shortcut optimization algorithms and detailed simulation models to analyze input data against high TRL benchmark and avaialble literatre data. The methodology incorporates real-world data and supplier-agnostic information to provide a balanced view of new vs. established technologies."
        },
        {
            title: "Assumptions/Limitations",
            content: "The tool's accuracy is dependent on the quality and completeness of the input data. Assumptions are made regarding standard operational conditions and calculation workflow, it is recommended to consult with specialists for critical decisions. The tool is continuously updated to reflect new data and user feedback, yet it may not capture all nuances of every unique project scenario."
        },
    ];
    return (
        <Box
            sx={{
                height: '100vh',
                overflowY: 'scroll',
                padding: '20px',
            }}
        >
            <Typography level="h1" sx={{ marginBottom: '20px' }}>Hydrogen Infrastructure Costing Tool - Documentation</Typography>
            {documentationSections.map((section, index) => (
                <Box key={index} sx={{ marginBottom: '40px' }}>
                    <Typography level="h2" sx={{ marginBottom: '10px' }}>{section.title}</Typography>
                    <Typography>{section.content}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Docs;