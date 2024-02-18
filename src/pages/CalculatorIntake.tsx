

import { Box, Typography, Input, Button, Select, Option, FormControl, FormLabel } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import { useForm, SubmitHandler } from "react-hook-form"
import ROUTE_CONSTANTS from "../routing/routeConstants";

type Inputs = {
    example: string
    exampleRequired: string
}

const CalculatorIntake = () => {
    const {
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    const handleChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        console.log(event, newValue)
    };

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
                <ProgressTracker activeStep={0} />
            </Box>
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" pb="20px">
                    Inlet
                </Typography>
                <Typography>
                    [Explain what this step does ... ]
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
                        <FormControl>
                            <FormLabel>Inlet Pressure</FormLabel>
                            <Input placeholder="Placeholder" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Units</FormLabel>
                            <Select defaultValue="dog" onChange={handleChange}
                                sx={{
                                    width: "120px",
                                }}
                            >
                                <Option value="BAR">Bar</Option>
                                <Option value="PSI">PSI</Option>
                            </Select>
                        </FormControl>
                        {/* <FormControl>
                            <FormLabel>Energy Price (£/MWh)</FormLabel>
                            <Input placeholder="Placeholder" />
                        </FormControl> */}

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
                            href={ROUTE_CONSTANTS.CALCULATOR}
                            size="lg" variant="outlined" color="neutral">
                            Back
                        </Button>
                        <Button
                            component="a"
                            href={ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE}
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

export default CalculatorIntake;