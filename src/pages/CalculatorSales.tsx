

import { Box, Typography, FormControl, FormLabel, Input, Select, Option, FormHelperText } from "@mui/joy";


import ROUTE_CONSTANTS from "../routing/routeConstants";
import { DispensingRateUnitEnum, RequestSchema } from "../api/calculator";
import { useLocation, useNavigate } from "react-router-dom";
import CalculatorInputLayout from "../components/CalculatorInputLayout";
import schema from '../api/calculator/schema.json';
import useRequest from "../hooks/useValidatedRequestForm";
import { InfoOutlined } from "@mui/icons-material";


const CalculatorSales = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const locationRequest = location.state as RequestSchema;
    const modifiedSchema = {
        ...schema,
        required: []
    }

    const { request, errorMessages, handleChange } = useRequest({
        ...locationRequest,
        peak_hydrogen_dispensing_rate: {
            ...locationRequest.peak_hydrogen_dispensing_rate,
            unit: locationRequest?.peak_hydrogen_dispensing_rate?.unit ??
                DispensingRateUnitEnum[Object.keys(DispensingRateUnitEnum)[0] as keyof typeof DispensingRateUnitEnum],

        },
        avg_hydrogen_dispensing_rate: {
            ...locationRequest.avg_hydrogen_dispensing_rate,
            unit: locationRequest?.avg_hydrogen_dispensing_rate?.unit ??
                DispensingRateUnitEnum[Object.keys(DispensingRateUnitEnum)[0] as keyof typeof DispensingRateUnitEnum],

        }
    }, modifiedSchema);

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

    return (
        <CalculatorInputLayout
            activeStep={3}
            onNext={goToNext}
            onBack={goToPrevious}
        >
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" fontSize={'lg'} pb="20px">
                    H2 Demand
                </Typography>
                <Typography fontSize={'sm'}>
                    To output reliable results, the "filling profile" - estimated using peak and actual hydrogen demand must be approximated.
                    Please enter average and peak use of the infrastructure, as a flowrate or as vehicles per hour/day to estimate this.
                    If you are unsure of this please see the 'Choosing Your Inputs' portion of the documentation
                    - or use the standard inputs provided to explore the tool.  If you are completely unsure, try choosing a peak demand of between 6-8 vehicles per hour
                    , and an average of around half of this to start.

                </Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: "500px",
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    '& > *': { flex: 'auto' },
                }}
            >
                <FormControl error={!!errorMessages['peak_hydrogen_dispensing_rate.value']}>
                    <FormLabel>Peak H2 Demand</FormLabel>
                    <Input
                        name="peak_hydrogen_dispensing_rate"
                        type="number"
                        placeholder="2"
                        size="lg"
                        value={request?.peak_hydrogen_dispensing_rate?.value ?? 0}
                        onChange={(event) => handleChange(
                            parseFloat(event.target.value),
                            ['peak_hydrogen_dispensing_rate', 'value'])}
                    />
                    {!!errorMessages['peak_hydrogen_dispensing_rate.value'] &&
                        <FormHelperText>
                            <InfoOutlined />
                            {errorMessages['peak_hydrogen_dispensing_rate.value']}
                        </FormHelperText>
                    }
                </FormControl>
                <FormControl>
                    <FormLabel>Units</FormLabel>
                    <Select
                        size="lg"
                        value={request?.peak_hydrogen_dispensing_rate?.unit ?? ''}
                        onChange={(_e, value) => handleChange(value ?? '', ['peak_hydrogen_dispensing_rate', 'unit'])}
                        sx={{
                            width: "200px",
                        }}
                    >
                        {Object.entries(DispensingRateUnitEnum).map(([key, value]) => (
                            <Option key={key} value={value}>
                                {value.toString().replace(/_/g, ' ')}
                            </Option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl error={!!errorMessages['peak_hydrogen_dispensing_rate.value']}>
                    <FormLabel>Average H2 Demand</FormLabel>
                    <Input
                        name="avg_hydrogen_dispensing_rate"
                        type="number"
                        placeholder="12"
                        size="lg"
                        value={request?.avg_hydrogen_dispensing_rate?.value ?? 0}
                        onChange={(event) => handleChange(
                            parseFloat(event.target.value),
                            ['avg_hydrogen_dispensing_rate', 'value'])}
                    />
                    {!!errorMessages['avg_hydrogen_dispensing_rate.value'] &&
                        <FormHelperText>
                            <InfoOutlined />
                            {errorMessages['avg_hydrogen_dispensing_rate.value']}
                        </FormHelperText>
                    }
                </FormControl>
                <FormControl>
                    <FormLabel>Units</FormLabel>
                    <Select
                        size="lg"
                        value={request?.avg_hydrogen_dispensing_rate?.unit ?? ''}
                        onChange={(_e, value) => handleChange(value ?? '', ['avg_hydrogen_dispensing_rate', 'unit'])}
                        sx={{
                            width: "200px",
                        }}
                    >
                        {Object.entries(DispensingRateUnitEnum).map(([key, value]) => (
                            <Option key={key} value={value}>
                                {value.toString().replace(/_/g, ' ')}
                            </Option>
                        ))}
                    </Select>
                </FormControl>

            </Box>

        </CalculatorInputLayout>
    );
}

export default CalculatorSales;