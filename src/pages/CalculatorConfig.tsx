/* eslint-disable react-hooks/exhaustive-deps */


import { Box, Typography, FormControl, FormLabel, Input, FormHelperText, Slider, Divider } from "@mui/joy";


import ROUTE_CONSTANTS from "../routing/routeConstants";
import { useLocation, useNavigate } from "react-router-dom";
import schema from '../api/calculator/schema.json';
import useRequest from "../hooks/useValidatedRequestForm";
import { RequestSchema } from "../api/calculator";
import { InfoOutlined } from "@mui/icons-material";
import CalculatorInputLayout from "../components/CalculatorInputLayout";

const CalculatorConfig = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const locationRequest = location.state as RequestSchema;
    const modifiedSchema = {
        ...schema,
        required: []
    }

    const { request, errorMessages, handleChange } = useRequest({
        ...locationRequest,
        wacc: 10,
        lifetime_years: 22,
        energy_price_per_mwh: 24.4,
        is_precooling_used: false
    }, modifiedSchema);


    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_SALES, { state: request });
    }

    const canProceed = () => {
        return request.energy_price_per_mwh !== undefined && request.wacc !== undefined;
    }

    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_RESULTS, { state: request });
        }
    }

    return (
        <CalculatorInputLayout
            activeStep={4}
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
                    Detailed Configuration
                </Typography>
                <Typography fontSize={'sm'}>
                    The calculation tool uses some standard financial, as well as engineering assumptions.

                    Please review and customise to your use to these to ensure the results are as accurate as possible.
                    If you have any questions about these assumptions, please see the 'Choosing Your Inputs' portion of the documentation.
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
                <FormControl error={!!errorMessages['energy_price_per_mwh']}>
                    <FormLabel>Energy Cost (p/kWh)</FormLabel>
                    <Input
                        size='lg'
                        type="number"
                        value={request?.energy_price_per_mwh ?? 0}
                        onChange={(event) => handleChange(
                            parseFloat(event.target.value),
                            ['energy_price_per_mwh'])}
                    />
                    {!!errorMessages['energy_price_per_mwh'] &&
                        <FormHelperText>
                            <InfoOutlined />
                            {errorMessages['energy_price_per_mwh']}
                        </FormHelperText>
                    }
                </FormControl>

                <Box width={'80%'} maxWidth={500} marginTop={4} marginBottom={3}>
                    <Divider sx={{ '--Divider-childPosition': `50%` }}>
                        Advanced (optional)
                    </Divider>
                </Box>

                <Box width={300} marginBottom={2}>
                    <FormControl>
                        <FormLabel sx={{ marginBottom: 3 }}>LIFETIME (years)</FormLabel>
                        <Slider size='lg'
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            onChange={(_e, value, _x) => handleChange(value, ['lifetime_years'])}
                            valueLabelDisplay="on" min={10} value={request?.lifetime_years ?? 20} max={30} />
                    </FormControl>
                </Box>

                <FormControl error={!!errorMessages['wacc']}>
                    <FormLabel>WACC (%)</FormLabel>
                    <Input
                        size='lg'
                        type="number"
                        value={request?.wacc ?? 0}
                        onChange={(event) => handleChange(
                            parseFloat(event.target.value),
                            ['wacc'])}
                    />
                    {!!errorMessages['wacc'] &&
                        <FormHelperText>
                            <InfoOutlined />
                            {errorMessages['wacc']}
                        </FormHelperText>
                    }
                </FormControl>
                {/* <Box width={300} marginTop={3}>
                            <FormControl>

                                <Typography component="label" endDecorator={<Switch
                                    disabled={false}
                                    checked={request.is_precooling_used}
                                    onChange={(e) => handleChange(e.target.checked, ['is_precooling_used'])}
                                    size="lg"
                                    variant="solid"
                                />}>
                                    Use precooling?
                                </Typography>
                                <FormHelperText>
                                    This shows whether the hydrogen supply is cooled before dispensing to allow for faster filling and a higher tank fill level
                                </FormHelperText>
                            </FormControl>
                        </Box> */}
            </Box>
        </CalculatorInputLayout>
    )
}

export default CalculatorConfig;