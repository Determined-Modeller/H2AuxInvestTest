

import { Box, Typography } from "@mui/joy";



const Docs = () => {
    const documentationSections = [
        {
            title: "Purpose",
            content: "The H2 AuxInvest project aims to solve the problem of poor knowledge transfer in Scotland's Hydrogen Supply Chain by providing an open-source tool. This tool helps developers assess the feasibility and performance of low TRL (Technology Readiness Level) components from small manufacturers, enhancing decision-making and encouraging the use of innovative technologies in hydrogen projects."
        },
        {
            title: "Choosing Your Inputs",
            content: "Inputs for the H2 AuxInvest tool include project location, expected hydrogen production or usage volume, specific auxiliary equipment types under consideration, and available data on equipment performance and costs. Users are encouraged to gather as much precise and relevant data as possible to ensure accurate analyses and recommendations."
        },
        {
            title: "Outputs",
            content: "The tool provides various outputs, including optimized equipment sizing, capital expenditure (CAPEX), operational expenditure (OPEX) estimates, environmental impact assessments, and risk analysis. These outputs aim to inform users about the potential financial and operational performance of integrating low TRL hydrogen technologies into their projects."
        },
        {
            title: "Calculation Methodology",
            content: "H2 AuxInvest uses a combination of shortcut optimization algorithms and detailed simulation models to analyze input data against high TRL benchmarks. The methodology incorporates real-world data and supplier-agnostic information to provide a balanced view of new vs. established technologies."
        },
        {
            title: "Assumptions/Limitations",
            content: "The tool's accuracy is dependent on the quality and completeness of the input data. Assumptions are made regarding standard operational conditions, and it is recommended to consult with specialists for critical decisions. The tool is continuously updated to reflect new data and user feedback, yet it may not capture all nuances of every unique project scenario."
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
            <Typography level="h1" sx={{ marginBottom: '20px' }}>H2 AuxInvest Documentation</Typography>
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