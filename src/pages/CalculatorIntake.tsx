

import { Box, Typography, Input, Button, Select, Option, FormControl, FormLabel } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import ROUTE_CONSTANTS from "../routing/routeConstants";
import { Pressure, RequestSchema } from "../api/calculator";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Ajv from 'ajv';
import schema from '../api/calculator/schema.json'; // replace with the path to your JSON schema




const CalculatorIntake = () => {
    const [request, setRequest] = useState({} as RequestSchema)
    const location = useLocation();
    const navigate = useNavigate();
    const ajv = new Ajv({ allErrors: true, strictRequired: 'log' });
    const modifiedSchema = schema;
    modifiedSchema.required = ['hydrogen_inlet_pressure']
    const validate = ajv.compile(modifiedSchema);

    useEffect(() => {
        const locationRequest = location.state as RequestSchema;
        setRequest({
            ...locationRequest,
            hydrogen_inlet_pressure: {
                ...request.hydrogen_inlet_pressure,
                unit: Pressure[Object.keys(Pressure)[0] as keyof typeof Pressure],
            }
        })
    }, [])


    const canProceed = () => {
        const valid = validate(request);
        if (valid) {
            return true;
        } else {
            console.log(validate.errors);
            return false;
        }
    }

    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE, { state: request })
        }
    }

    const handleChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        setRequest({
            ...request,
            hydrogen_inlet_pressure: {
                ...request.hydrogen_inlet_pressure,
                unit: Pressure[newValue as keyof typeof Pressure],
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
                    H2 Supply
                </Typography>
                <Typography>
                    In order to calcuate the size and cost of your hydrogen infrastructure, we need to start with an estimate of the supply pressure and units of hydrogen delivered to the site.
                    If you are unsure of this please see the 'Choosing Your Inputs' portion of the documentation, or use a standard assumption provided to explore the tool.
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
                            maxWidth: "420px",
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <FormControl>
                            <FormLabel>Inlet Pressure</FormLabel>
                            <Input
                                name="hydrogen_inlet_pressure"
                                type="number"
                                placeholder="Placeholder"
                                size="lg"
                                value={request?.hydrogen_inlet_pressure?.value}
                                onChange={(event) => setRequest({
                                    ...request,
                                    hydrogen_inlet_pressure: {
                                        ...request.hydrogen_inlet_pressure,
                                        value: parseFloat(event.target.value),
                                    }
                                })}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Units</FormLabel>
                            <Select size="lg" defaultValue={Object.keys(Pressure)[0]} onChange={handleChange}
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

export default CalculatorIntake;