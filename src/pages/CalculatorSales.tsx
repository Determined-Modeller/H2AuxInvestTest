

import { Box, Typography, Button, FormControl, FormLabel, Input, Select, Option } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import { useForm, SubmitHandler } from "react-hook-form"
import ROUTE_CONSTANTS from "../routing/routeConstants";

type Inputs = {
    example: string
    exampleRequired: string
}

const CalculatorSales = () => {
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
                <ProgressTracker activeStep={3} />
            </Box>
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" pb="20px">
                    H2 Demand
                </Typography>
                <Typography>
                    To output reliable results, the end user demand for hydrogen needs to be approximated.
                    Please enter expected peak and average demand levels for the hydrogen demand.
                    If you are unsure of this please see the 'Choosing Your Inputs' portion of the documentation
                    - or use the standard inputs provided to explore the tool.
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
                            <FormLabel>Average sales estimate</FormLabel>
                            <Input placeholder="Placeholder" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Units</FormLabel>
                            <Select defaultValue="BAR" onChange={handleChange}
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
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <FormControl>
                            <FormLabel>Best case sales estimate</FormLabel>
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
                            href={ROUTE_CONSTANTS.CALCULATOR_CONSUMER}
                            size="lg" variant="outlined" color="neutral">
                            Back
                        </Button>
                        <Button
                            component="a"
                            href={ROUTE_CONSTANTS.CALCULATOR_CONFIG}
                            size="lg"
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </form >
            <Typography color="neutral" fontSize="sm" fontWeight="sm">
                All calculations and data provided by H2AuxInvest's Hydrogen Infrastructure Costing Tool are for informational purposes only. While this tool aims to provide helpful and accurate information, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information produced.
The information provided by the Hydrogen Infrastructure Costing Tool is not a substitute for professional advice. Engineering decisions should not be made solely on the basis of this tool. Always seek the guidance of qualified professionals before making any such decisions.
H2AuxInvest's Hydrogen Infrastructure Costing Tool is an open-source project developed for educational and informational purposes under principles of fair use. The tool is designed to support and further the understanding and roll-out of hydrogen infrastructure.
In no event shall H2AuxInvest or contributors to the Hydrogen Infrastructure Costing Tool be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the tool or the contents of the tool. H2AuxInvest reserves the right to make additions, deletions, or modifications to the contents of the tool at any time without prior notice.
The Hydrogen Infrastructure Costing Tool is provided under a MIT License, which allows for redistribution and use in source and binary forms, with or without modification. Users are expected to credit the original creation and not use the tool in a manner that infringes upon the intellectual property rights of H2AuxInvest or any third parties.
By using the Hydrogen Infrastructure Costing Tool, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use the provided tool or any affiliated websites or services
                </Typography>
        </Box >
    );
}

export default CalculatorSales;