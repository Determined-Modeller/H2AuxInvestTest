

import { Box, Typography, Button, FormControl, FormLabel, Input, Switch, FormHelperText, Slider, Divider } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import ROUTE_CONSTANTS from "../routing/routeConstants";


const CalculatorConfig = () => {



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
            <form>
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

export default CalculatorConfig;