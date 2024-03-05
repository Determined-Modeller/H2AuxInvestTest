/* eslint-disable react-hooks/exhaustive-deps */


import { Box, Typography, Input, Select, Option, FormControl, FormLabel, FormHelperText } from "@mui/joy";

import ROUTE_CONSTANTS from "../routing/routeConstants";
import { Pressure, RequestSchema } from "../api/calculator";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Ajv, { ErrorObject } from 'ajv';
import schema from '../api/calculator/schema.json'; // replace with the path to your JSON schema
import { InfoOutlined } from "@mui/icons-material";
import CalculatorInputLayout from "../components/CalculatorInputLayout";




const CalculatorIntake = () => {
    const [request, setRequest] = useState({} as RequestSchema)
    const [errorMessages, setErrorMessages] = useState({} as Record<string, string>);
    const location = useLocation();
    const navigate = useNavigate();
    const ajv = new Ajv({ strictRequired: 'log' });
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

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR, { state: request })
    }

    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE, { state: request })
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (newValue: any, path: string[]) => {
        setRequest(prevRequest => {
            const updatedRequest = { ...prevRequest };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let target: any = updatedRequest;
            for (let i = 0; i < path.length - 1; i++) {
                target = target[path[i]];
            }
            target[path[path.length - 1]] = newValue;

            const valid = validate(updatedRequest);
            const newErrorMessages = { ...errorMessages };
            if (!valid && validate.errors) {
                validate.errors.forEach((error: ErrorObject) => {
                    if (error.instancePath === '/' + path.join('/')) {
                        newErrorMessages[path.join('.')] = error.message || '';
                    }
                });
            } else {
                delete newErrorMessages[path.join('.')];
            }
            setErrorMessages(newErrorMessages);
            return updatedRequest;
        });
    };

    return (
        <CalculatorInputLayout
            activeStep={0}
            onBack={goToPrevious}
            onNext={goToNext}
        >
            <Box
                className='content'
                sx={theme => ({
                    paddingBottom: theme.spacing(8)
                })}
            >
                <Typography level="h3" fontSize={'lg'} pb="20px">
                    H2 Supply
                </Typography>
                <Typography fontSize={'sm'}>
                    In order to calcuate the size and cost of your hydrogen infrastructure, we need to start with an estimate of the supply pressure and units of hydrogen delivered to the site.
                    If you are unsure of this please see the 'Choosing Your Inputs' portion of the documentation, or use a standard assumption provided to explore the tool.
                </Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: "420px",
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    '& > *': { flex: 'auto' },
                }}
            >
                <FormControl error={!!errorMessages['hydrogen_inlet_pressure.value']}>
                    <FormLabel>Inlet Pressure</FormLabel>
                    <Input
                        name="hydrogen_inlet_pressure"
                        type="number"
                        placeholder="7"
                        size="lg"
                        value={request?.hydrogen_inlet_pressure?.value ?? undefined}
                        onChange={(event) => handleChange(
                            parseFloat(event.target.value),
                            ['hydrogen_inlet_pressure', 'value'])}
                    />
                    {!!errorMessages['hydrogen_inlet_pressure.value'] && <FormHelperText>
                        <InfoOutlined />
                        {errorMessages['hydrogen_inlet_pressure.value']}
                    </FormHelperText>}
                </FormControl>
                <FormControl error={!!errorMessages['hydrogen_inlet_pressure.unit']}>
                    <FormLabel>Units</FormLabel>
                    <Select size="lg" color="neutral"
                        value={request.hydrogen_inlet_pressure?.unit ?? ''}
                        onChange={(_e, value) => handleChange(value ?? '', ['hydrogen_inlet_pressure', 'unit'])}
                        sx={{
                            width: "110px",
                        }}
                    >
                        {Object.entries(Pressure).map(([key, value]) => (
                            <Option key={key} value={value}>
                                {value}
                            </Option>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </CalculatorInputLayout>
    );
}

export default CalculatorIntake;