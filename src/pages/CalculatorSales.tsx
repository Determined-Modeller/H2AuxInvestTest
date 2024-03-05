

import { Box, Typography, Button, FormControl, FormLabel, Input, Select, Option } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import ROUTE_CONSTANTS from "../routing/routeConstants";
import { DispensingRateUnitEnum, RequestSchema } from "../api/calculator";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";



const CalculatorSales = () => {

    const [request, setRequest] = useState({} as RequestSchema)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const locationRequest = location.state as RequestSchema;

        if (!locationRequest?.vehicle_type) {
            goToPrevious();
        }

        setRequest({
            ...locationRequest,
            peak_hydrogen_dispensing_rate: {
                ...request.peak_hydrogen_dispensing_rate,
                unit: DispensingRateUnitEnum[Object.keys(DispensingRateUnitEnum)[0] as keyof typeof DispensingRateUnitEnum],

            },
            avg_hydrogen_dispensing_rate: {
                ...request.avg_hydrogen_dispensing_rate,
                unit: DispensingRateUnitEnum[Object.keys(DispensingRateUnitEnum)[0] as keyof typeof DispensingRateUnitEnum],

            }
        })
    }, [])

    const canProceed = () => {
        return request.avg_hydrogen_dispensing_rate?.value !== undefined && request.peak_hydrogen_dispensing_rate?.value !== undefined;
    }

    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_CONFIG, { state: request })
        }
    }

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_CONSUMER, { state: request })
    }

    const handleAvgUnitChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        console.log("does this even work2?");
        setRequest({
            ...request,
            avg_hydrogen_dispensing_rate: {
                ...request.avg_hydrogen_dispensing_rate,
                unit: DispensingRateUnitEnum[newValue as keyof typeof DispensingRateUnitEnum],
            }
        })
    };

    const handlePeakUnitChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        console.log("does this even work?");

        setRequest({
            ...request,
            peak_hydrogen_dispensing_rate: {
                ...request.peak_hydrogen_dispensing_rate,
                unit: DispensingRateUnitEnum[newValue as keyof typeof DispensingRateUnitEnum],
            }
        })
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
                    {JSON.stringify(request)}
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
                            maxWidth: "500px",
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <FormControl>
                            <FormLabel>Best case sales estimate</FormLabel>
                            <Input
                                name="peak_hydrogen_dispensing_rate"
                                type="number"
                                placeholder="Placeholder"
                                size="lg"
                                value={request?.avg_hydrogen_dispensing_rate?.value}
                                onChange={(event) => setRequest({
                                    ...request,
                                    avg_hydrogen_dispensing_rate: {
                                        ...request.avg_hydrogen_dispensing_rate,
                                        value: parseFloat(event.target.value),
                                    }
                                })}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Units</FormLabel>
                            <Select size="lg" defaultValue={Object.keys(DispensingRateUnitEnum)[0]} onChange={handleAvgUnitChange}
                                sx={{
                                    width: "200px",
                                }}
                            >
                                {Object.entries(DispensingRateUnitEnum).map(([key, value]) => (
                                    <Option key={value} value={key}>
                                        {key}
                                    </Option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Best case sales estimate</FormLabel>
                            <Input
                                name="peak_hydrogen_dispensing_rate"
                                type="number"
                                placeholder="Placeholder"
                                size="lg"
                                value={request?.peak_hydrogen_dispensing_rate?.value}
                                onChange={(event) => setRequest({
                                    ...request,
                                    peak_hydrogen_dispensing_rate: {
                                        ...request.peak_hydrogen_dispensing_rate,
                                        value: parseFloat(event.target.value),
                                    }
                                })}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Units</FormLabel>
                            <Select size="lg" defaultValue={Object.keys(DispensingRateUnitEnum)[0]} onChange={handlePeakUnitChange}
                                sx={{
                                    width: "200px",
                                }}
                            >
                                {Object.entries(DispensingRateUnitEnum).map(([key, value]) => (
                                    <Option key={value} value={key}>
                                        {key}
                                    </Option>
                                ))}
                            </Select>
                        </FormControl>

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
                            onClick={goToPrevious}
                            size="lg" variant="outlined" color="neutral">
                            Back
                        </Button>
                        <Button
                            component="a"
                            onClick={goToNext}
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