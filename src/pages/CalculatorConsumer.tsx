

import { Option, Box, Typography, FormControl, FormHelperText, Switch, FormLabel, Select, Input } from "@mui/joy";


import { useLocation, useNavigate } from "react-router-dom";
import { Mass, Pressure, RequestSchema } from "../api/calculator";
import ROUTE_CONSTANTS from "../routing/routeConstants";
import CalculatorInputLayout from "../components/CalculatorInputLayout";
import schema from '../api/calculator/schema.json';
import useRequest from "../hooks/useValidatedRequestForm";
import { InfoOutlined } from "@mui/icons-material";

const CalculatorConsumer = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const locationRequest = location.state as RequestSchema;
    const modifiedSchema = {
        ...schema,
        required: []
    }

    const { request, errorMessages, handleChange } = useRequest({
        ...locationRequest,
        storage_pressure: {
            ...locationRequest?.storage_pressure,
            unit: locationRequest?.storage_pressure?.unit ?? Pressure[Object.keys(Pressure)[0] as keyof typeof Pressure],
        },
        storage_mass: {
            ...locationRequest?.storage_mass,
            unit: locationRequest?.storage_mass?.unit ?? Mass[Object.keys(Mass)[0] as keyof typeof Mass],
        }
    }, modifiedSchema);

    const canProceed = () => {
        return hasAllRequiredFields() && Object.keys(errorMessages).length === 0;
    }

    const hasAllRequiredFields = () => {
        return request.is_storage_required ? (request.storage_mass?.value !== undefined && request.storage_pressure?.value !== undefined) : true;
    }



    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_SALES, { state: request })
        }
    }

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE, { state: request })
    }


    return (
        <CalculatorInputLayout
            onBack={goToPrevious}
            onNext={goToNext}
            activeStep={2}
        >
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" fontSize={'lg'} pb="20px">
                    H2 Storage
                </Typography>
                <Typography fontSize={'sm'}>
                    Enter details of additional hydrogen storage you wish to have on site.
                    If you are unsure of what to choose, please see the 'Choosing Your Inputs' portion of the documentation,
                    or use default values provided for commonly selected setups. We highly recommend specifying storage, if 
                    this is unknown we suggest specifying the pressure of your end use (e.g. 350/700 bar), and also suggest
                    a minimum of 100kg (or 2 days of demand) to get representative results.
                </Typography>
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

                <Box width={300} marginTop={3}>
                    <FormControl>

                        <Typography component="label" endDecorator={<Switch
                            disabled={false}
                            checked={request.is_storage_required}
                            onChange={(e) => handleChange(e.target.checked as boolean, ['is_storage_required'])}
                            size="lg"
                            variant="solid"
                        />}>
                            Specify Hydrogen Storage?
                        </Typography>
                        <FormHelperText>
                            Use this button to toggle hydrogen storage options on and off
                        </FormHelperText>
                    </FormControl>
                </Box>
                {request.is_storage_required && <>
                    <FormControl error={!!errorMessages['storage_pressure.value']}>
                        <FormLabel>Storage Pressure</FormLabel>
                        <Input
                            name="storage_pressure"
                            type="number"
                            placeholder="350"
                            size="lg"
                            value={request?.storage_pressure?.value ?? 0}
                            onChange={(event) => handleChange(
                                parseFloat(event.target.value),
                                ['storage_pressure', 'value'])}
                        />
                        {!!errorMessages['storage_pressure.value'] &&
                            <FormHelperText>
                                <InfoOutlined />
                                {errorMessages['storage_pressure.value']}
                            </FormHelperText>
                        }
                    </FormControl>
                    <FormControl>
                        <FormLabel>Units</FormLabel>
                        <Select
                            size="lg"
                            value={request?.storage_pressure?.unit ?? ''}
                            onChange={(_e, value) => handleChange(value ?? '', ['storage_pressure', 'unit'])}
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
                    <FormControl error={!!errorMessages['storage_mass.value']}>
                        <FormLabel>Storage Mass</FormLabel>
                        <Input
                            name="storage_mass"
                            type="number"
                            placeholder="10"
                            size="lg"
                            value={request?.storage_mass?.value ?? undefined}
                            onChange={(event) => handleChange(
                                parseFloat(event.target.value),
                                ['storage_mass', 'value'])}
                        />
                        {!!errorMessages['storage_mass.value'] &&
                            <FormHelperText>
                                <InfoOutlined />
                                {errorMessages['storage_mass.value']}
                            </FormHelperText>
                        }
                    </FormControl>
                    <FormControl>
                        <FormLabel>Units</FormLabel>
                        <Select
                            size="lg"
                            value={request?.storage_mass?.unit ?? ''}
                            onChange={(_e, value) => handleChange(value ?? '', ['storage_mass', 'unit'])}
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


        </CalculatorInputLayout>
    );
}

export default CalculatorConsumer;