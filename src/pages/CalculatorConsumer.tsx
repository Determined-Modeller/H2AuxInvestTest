

import { Option, Box, Typography, Button, FormControl, FormHelperText, Switch, FormLabel, Select, Input } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mass, Pressure, RequestSchema } from "../api/calculator";
import ROUTE_CONSTANTS from "../routing/routeConstants";

const CalculatorConsumer = () => {

    const [request, setRequest] = useState({} as RequestSchema)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const locationRequest = location.state as RequestSchema;

        // if (!locationRequest?.peak_hydrogen_dispensing_rate || !locationRequest?.avg_hydrogen_dispensing_rate) {
        //     goToPrevious();
        // }
        if (!locationRequest?.vehicle_type || !locationRequest?.dispensing_type) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE)
        }

        setRequest({
            ...locationRequest,
            is_storage_required: false,
            storage_pressure: {
                value: 0,
                unit: Pressure.Bar
            },
            storage_mass: {
                value: 0,
                unit: Mass.Kg
            }
        })
    }, [])

    const goToNext = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_SALES, { state: request })
    }

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE, { state: request })
    }

    const handleDispensingUnitChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        setRequest({
            ...request,
            storage_pressure: {
                ...request.storage_pressure,
                unit: Pressure[newValue as keyof typeof Pressure]
            }
        })
    }

    const handleDispensingMassUnitChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        setRequest({
            ...request,
            storage_mass: {
                ...request.storage_mass,
                unit: Mass[newValue as keyof typeof Mass]
            }
        })
    }


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
                <ProgressTracker activeStep={2} />
            </Box>
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" pb="20px">
                    H2 Equipment
                </Typography>
                <Typography>
                    Enter details of the hydrogen equipment you are looking to supply on site,
                    if you are unsure of this please see the 'Choosing Your Inputs' portion of the documentation,
                    or use default values provided for commonly available industry equipment.
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

                        <Box width={300} marginTop={3}>
                            <FormControl>

                                <Typography component="label" endDecorator={<Switch
                                    disabled={false}
                                    checked={request.is_storage_required}
                                    onChange={(e) => setRequest({ ...request, is_storage_required: e.target.checked })}
                                    size="lg"
                                    variant="solid"
                                />}>
                                    Is storage required?
                                </Typography>
                                <FormHelperText>
                                    This shows whether the hydrogen supply cooled before dispensing to allow for a higher fill level
                                </FormHelperText>
                            </FormControl>
                        </Box>
                        {request.is_storage_required && <>
                            <FormControl>
                                <FormLabel>Dispensing Pressure</FormLabel>
                                <Input
                                    name="storage_pressure"
                                    type="number"
                                    placeholder="10"
                                    size="lg"
                                    value={request?.storage_pressure?.value}
                                    onChange={(event) => setRequest({
                                        ...request,
                                        storage_pressure: {
                                            ...request.storage_pressure,
                                            value: parseFloat(event.target.value),
                                        }
                                    })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Units</FormLabel>
                                <Select size="lg" defaultValue={Object.keys(Pressure)[0]} onChange={handleDispensingUnitChange}
                                    sx={{
                                        width: "110px",
                                    }}
                                >
                                    {Object.entries(Pressure).map(([key, value]) => (
                                        <Option key={key} value={key}>
                                            {value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Dispensing Mass</FormLabel>
                                <Input
                                    name="storage_mass"
                                    type="number"
                                    placeholder="10"
                                    size="lg"
                                    value={request?.storage_mass?.value}
                                    onChange={(event) => setRequest({
                                        ...request,
                                        storage_mass: {
                                            ...request.storage_mass,
                                            value: parseFloat(event.target.value),
                                        }
                                    })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Units</FormLabel>
                                <Select size="lg" defaultValue={request.dispensing_mass.unit} onChange={handleDispensingMassUnitChange}
                                    sx={{
                                        width: "110px",
                                    }}
                                >
                                    {Object.entries(Mass).map(([key, value]) => (
                                        <Option key={key} value={value}>
                                            {value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormControl>

                        </>
                        }

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
                            onClick={goToNext}
                            component="a"
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

export default CalculatorConsumer;