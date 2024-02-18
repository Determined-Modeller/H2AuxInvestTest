

import { Box, Typography, Button } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import { useForm, SubmitHandler } from "react-hook-form"
import ROUTE_CONSTANTS from "../routing/routeConstants";

type Inputs = {
    example: string
    exampleRequired: string
}

const CalculatorConfig = () => {
    const {
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it


    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                py={'70px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <ProgressTracker activeStep={4} />
            </Box>
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" pb="20px">
                    [NEEDS A STEP NAME]
                </Typography>
                <Typography>
                    [THIS WILL HAVE THE ENERGY COST AND OTHER "ADVANCED" SETTINGS]
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore.
                </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    pb={'50px'}
                    sx={{
                        maxWidth: '800px',
                        margin: 'auto',
                        display: 'grid',
                        gap: 3,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: "400px",
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <Typography>
                            [ADD INPUT FIELDS FOR ENERGY COST, WACC, LIFETIME, IS PRECOOLING USED - THE FINAL THREE OF WHICH WILL HAVE PRE SET VALUE DEFAULTS AND WILL BE IN AN ADVANCED SECTION]
                        </Typography>


                        {errors.exampleRequired && <span>This field is required</span>}
                    </Box>


                    <Box
                        sx={{
                            maxWidth: "400px",
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            my: 7,
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <Button
                            component="a"
                            href={ROUTE_CONSTANTS.CALCULATOR_SALES}
                            size="lg" variant="outlined" color="neutral">
                            Back
                        </Button>
                        <Button
                            component="a"
                            href={ROUTE_CONSTANTS.HOME}
                            size="lg"
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </form >
        </Box >
    );
}

export default CalculatorConfig;