

import { Box, Typography } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";


const CalculatorIntake = () => {


    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                py={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" color="primary" fontSize="lg" fontWeight="lg">
                    H2 Aux Invest Calculator
                </Typography>
                <Typography level="h2">
                    Let's calculate [need some text here]
                </Typography>
            </Box>
            <Box
                py={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <ProgressTracker activeStep={2} />
            </Box>
        </Box>
    );
}

export default CalculatorIntake;