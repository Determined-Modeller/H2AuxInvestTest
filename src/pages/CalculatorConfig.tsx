

import { Box, Typography, Button, FormControl, FormLabel, Input, Switch, FormHelperText, Slider, Divider } from "@mui/joy";


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
                    Detailed Configuration
                </Typography>
                <Typography>
                    The calculation tool uses some standard financial, as well as engineering assumptions.

                    Please review and customise to your use to these to ensure the results are as accurate as possible.
                    If you have any questions about these assumptions, please see the 'Choosing Your Inputs' portion of the documentation.
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
                            <FormLabel>Energy Cost (p/kWh)</FormLabel>
                            <Input type="number" defaultValue={29.0} />
                            <FormHelperText>
                                Please provide your energy cost, to allow accurate estimation of the operating cost
                            </FormHelperText>
                        </FormControl>

                        <Box width={400} marginTop={4} marginBottom={3}>
                            <Divider sx={{ '--Divider-childPosition': `50%` }}>
                                Advanced (optional)
                            </Divider>
                        </Box>

                        <Box width={300}>
                            <FormControl>
                                <FormLabel>LIFETIME (years)</FormLabel>
                                <Slider valueLabelDisplay="on" min={10} defaultValue={20} max={30} />
                            </FormControl>
                        </Box>

                        <FormControl>
                            <FormLabel>WACC (%)</FormLabel>
                            <Input type="number" defaultValue={12} />
                            <FormHelperText>
                                WAAC - Standing for Weighted Average Cost of Capital, represents the average % interest expected on finance for the infrastructure
                            </FormHelperText>
                        </FormControl>
                        <Box width={300} marginTop={3}>
                            <FormControl>

                                <Typography component="label" endDecorator={<Switch
                                    disabled={false}
                                    size="lg"
                                    variant="solid"
                                />}>
                                    Use precooling?
                                </Typography>
                                <FormHelperText>
                                    This shows whether the hydrogen supply cooled before dispensing to allow for a higher fill level
                                </FormHelperText>
                            </FormControl>
                        </Box>




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
                            href={ROUTE_CONSTANTS.CALCULATOR_RESULTS}
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