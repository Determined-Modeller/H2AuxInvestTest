
import { Box, Card, CardContent, FormControl, FormHelperText, FormLabel, Select, Stack, Typography, Option, LinearProgress } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import { BarChart, PieChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { AcUnit, Compress, Scale, SettingsInputComponent } from '@mui/icons-material';
import { RequestSchema, ResponseSchema, ResponseSchemaCompressorsInner, ResponseSchemaDispensersInner, ResponseSchemaStorageInner } from '../api/calculator';
import { postCalculate } from '../api/calculator/service/api';
import ComparisonTable from '../components/ComparisonTable';
import { set } from 'react-hook-form';



const postBody = {
    "hydrogen_inlet_pressure": {
        "value": 10,
        "unit": "BAR"
    },
    "dispensing_type": "TUBETRAILER",
    "energy_price_per_mwh": 10,
    "is_storage_required": true,
    "storage_mass": {
        "value": 10,
        "unit": "KG"
    },
    "storage_pressure": {
        "value": 500,
        "unit": "PSI"
    },
    "dispensing_pressure": {
        "value": 500,
        "unit": "PSI"
    },
    "dispensing_mass": {
        "value": 20,
        "unit": "KG_PER_HOUR"
    },
    "avg_hydrogen_dispensing_rate": {
        "value": 20,
        "unit": "KG_PER_HOUR"
    },
    "peak_hydrogen_dispensing_rate": {
        "value": 30,
        "unit": "KG_PER_HOUR"
    },
    "lifetime_years": 20,
    "wacc": 0.1,
    "is_precooling_used": true,
    "vehicle_type": "TUBETRAILER"
}

const Results = () => {
    const GBPound = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 0
    });
    const [response, setResponse] = useState<ResponseSchema | undefined>(undefined);
    const [compressor, setCompressor] = useState<ResponseSchemaCompressorsInner | undefined>(undefined);
    const [storage, setStorage] = useState<ResponseSchemaStorageInner | undefined>(undefined);
    const [dispensor, setDispensor] = useState<ResponseSchemaDispensersInner | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            console.log("hook is called");

            const res = await postCalculate(postBody as RequestSchema);
            setResponse(res);
            setCompressor(res?.compressors?.[0] ?? undefined);
            setStorage(res?.storage?.[0] ?? undefined);
            setDispensor(res?.dispensers?.[0] ?? undefined);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleCompressChange = (value: string) => {
        console.log(value)
        const compressor = response?.compressors?.find(row => row.id === value);
        console.log(compressor);

        setCompressor(compressor);
    };

    const handleStorageChange = (value: string) => {
        console.log(value);
        setStorage(response?.storage?.find(row => row.id === value));
    };


    return (<>{loading === true ?
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
            }}
        >
            <LinearProgress sx={{ maxWidth: "300px" }} />
        </Box>
        :
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={12}>
                <Grid xs={12} sx={(theme) => ({ marginY: theme.spacing(4) })}>
                    <Typography level="h2" fontWeight={6} sx={(theme) => ({ marginBottom: theme.spacing(2) })}>
                        Change your configuration
                    </Typography>
                    <Typography sx={(theme) => ({ marginBottom: theme.spacing(3) })}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Stack direction='row' spacing={3}>
                        <FormControl sx={{ width: 240 }}>
                            <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
                                Compressor
                            </FormLabel>
                            <Select
                                onChange={(_, newValue) => handleCompressChange(newValue ?? '')}
                                defaultValue={compressor?.id}
                                slotProps={{
                                    button: {
                                        id: 'select-field-demo-button',
                                        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
                                    },
                                }}
                            >
                                {
                                    response && response?.compressors?.map(row => (
                                        <Option value={row.id}>{row.meta?.title}</Option>
                                    ))
                                }
                            </Select>
                            <FormHelperText id="select-field-demo-helper">
                                This is a helper text.
                            </FormHelperText>
                        </FormControl>
                        <FormControl sx={{ width: 240 }}>
                            <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
                                Storage
                            </FormLabel>
                            <Select
                                onChange={(_, newValue) => handleStorageChange(newValue ?? '')}
                                defaultValue={storage?.id}
                                slotProps={{
                                    button: {
                                        id: 'select-field-demo-button',
                                        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
                                    },
                                }}
                            >
                                {
                                    response && response?.storage?.map(row => (
                                        <Option value={row.id}>{row.meta?.title}</Option>
                                    ))
                                }
                            </Select>
                            <FormHelperText id="select-field-demo-helper">
                                This is a helper text.
                            </FormHelperText>
                        </FormControl>
                    </Stack>

                </Grid>
            </Grid>
            <Grid xs={12}>
                <Typography level="h2" fontWeight={6} sx={(theme) => ({ marginY: theme.spacing(4) })}>
                    System Overview
                </Typography>
            </Grid>
            <Grid xs={5}>
                <Card>
                    <Typography level="h4" fontWeight={3}>
                        {compressor?.meta?.title}
                    </Typography>
                    <Stack direction="row" justifyContent={'space-evenly'}>
                        <Card variant="plain" >
                            <CardContent>
                                <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                    <FlashOnIcon />
                                    <Typography level="title-sm">Power</Typography>
                                    <Typography>{compressor?.power?.toFixed(2)} kW</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card variant="plain">
                            <CardContent>
                                <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                    <AcUnit />
                                    <Typography level="title-sm">Cooling Energy</Typography>
                                    <Typography>{compressor?.cooling_energy?.toFixed(2)} kWh/kg</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card variant="plain">
                            <CardContent>
                                <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                    <Compress />
                                    <Typography level="title-sm">Compression Energy</Typography>
                                    <Typography>{compressor?.compression_energy?.toFixed(2)} kWh/kg</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Stack>
                </Card>
            </Grid>
            <Grid xs={6} container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={6}>
                    <Card>
                        <Typography level="h4" fontWeight={3}>
                            {storage?.meta?.title}
                        </Typography>
                        <Stack direction="row" justifyContent={'space-evenly'}>
                            <Card variant="plain" >
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <Scale />
                                        <Typography level="title-sm">Capacity</Typography>
                                        <Typography>{storage?.capacity?.amount} {storage?.capacity?.unit}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Card variant="plain">
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <Compress />
                                        <Typography level="title-sm">Pressure</Typography>
                                        <Typography>{storage?.pressure?.amount} {storage?.pressure?.unit}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>

                        </Stack>
                    </Card>
                </Grid>
                <Grid xs={6}>
                    <Card>
                        <Typography level="h4" fontWeight={3}>
                            {dispensor?.meta?.title}
                        </Typography>
                        <Stack direction="row" justifyContent={'space-evenly'}>
                            <Card variant="plain" >
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <SettingsInputComponent />
                                        <Typography level="title-sm"># Dispensers</Typography>
                                        <Typography>{dispensor?.num_dispensers}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Card variant="plain">
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <Compress />
                                        <Typography level="title-sm">Pressure</Typography>
                                        <Typography>{dispensor?.Pressure} psi</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <Typography level="h2" fontWeight={6}>
                    Cost Analysis
                </Typography>
            </Grid>

            <Grid xs={5}>

                <Card variant='soft' sx={{ minHeight: '100%' }}>
                    <Typography level="h3" fontWeight={3}>
                        Levelised Cost of Hydrogen
                    </Typography>
                    <BarChart
                        height={400}
                        series={[
                            { data: [compressor?.energy_lcoh?.avg ?? 0, storage?.energy_lcoh?.avg ?? 0, dispensor?.energy_lcoh?.avg ?? 0], label: "Energy", stack: "lcoh" },
                            { data: [compressor?.installation_lcoh?.avg ?? 0, storage?.installation_lcoh?.avg ?? 0, dispensor?.installation_lcoh?.avg ?? 0], label: "Installation", stack: "lcoh" },
                            { data: [compressor?.maintenance_lcoh?.avg ?? 0, storage?.maintenance_lcoh?.avg ?? 0, dispensor?.maintenance_lcoh?.avg ?? 0], label: "Maintanance", stack: "lcoh" },
                            { data: [compressor?.equipment_lcoh?.avg ?? 0, storage?.equipment_lcoh?.avg ?? 0, dispensor?.equipment_lcoh?.avg ?? 0], label: "Equipment", stack: "lcoh" }
                        ]}
                        xAxis={[{ data: ['Compressor', 'Storage', 'Dispensor'], scaleType: 'band' }]}
                    />
                </Card>
            </Grid>
            <Grid xs={7} rowSpacing={2}>
                <Card variant="solid" color="primary" invertedColors sx={(theme) => ({ marginBottom: theme.spacing(2) })}>
                    <Grid container paddingY={2} sx={{ flexGrow: 1 }}>
                        <Box marginX={10}>
                            <Typography level="h3" fontWeight={3}>
                                Fixed Costs
                            </Typography>
                            <Typography level="h4">
                                {GBPound.format((compressor?.sum_capex?.min ?? 0) + (storage?.sum_capex?.min ?? 0) + (storage?.sum_capex?.min ?? 0))} -
                                {GBPound.format((compressor?.sum_capex?.max ?? 0) + (storage?.sum_capex?.max ?? 0) + (storage?.sum_capex?.max ?? 0))}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography level="h3" fontWeight={3}>
                                Operating Costs
                            </Typography>
                            <Typography level="h4">
                                {GBPound.format((compressor?.sum_opex?.min ?? 0) + (storage?.sum_opex?.min ?? 0) + (storage?.sum_opex?.min ?? 0))} -
                                {GBPound.format((compressor?.sum_opex?.max ?? 0) + (storage?.sum_opex?.max ?? 0) + (storage?.sum_opex?.max ?? 0))}
                            </Typography>
                        </Box>
                    </Grid>

                </Card>
                <Card variant="soft">
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid xs={6} >
                            <Typography level="h4" fontWeight={3}>
                                Expected Fixed Costs (&pound;)
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: compressor?.sum_capex?.avg ?? 0, label: 'Compressor' },
                                            { id: 1, value: storage?.sum_capex?.avg ?? 0, label: 'Storage' },
                                            { id: 2, value: dispensor?.sum_capex?.avg ?? 0, label: 'Dispensor' },
                                        ],
                                        innerRadius: 30,
                                        outerRadius: 100,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        startAngle: 0,
                                        endAngle: 360,
                                        cx: 150,
                                        cy: 150,
                                    },

                                ]}
                                width={400}
                                height={280}
                            />
                        </Grid>
                        <Grid xs={6}>
                            <Typography level="h4" fontWeight={3}>
                                Expected Operating Costs (&pound;/year)
                            </Typography>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: compressor?.sum_opex?.avg ?? 0, label: 'Compressor' },
                                            { id: 1, value: storage?.sum_opex?.avg ?? 0, label: 'Storage' },
                                            { id: 2, value: dispensor?.sum_opex?.avg ?? 0, label: 'Dispensor' },
                                        ],
                                        innerRadius: 30,
                                        outerRadius: 100,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        startAngle: 0,
                                        endAngle: 360,
                                        cx: 150,
                                        cy: 150,
                                    },

                                ]}
                                width={400}
                                height={280}
                                title='Pie chart'
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid xs={12}>
                <Typography level="h2" fontWeight={6} sx={(theme) => ({ marginY: theme.spacing(7) })}>
                    Comperative analysis
                </Typography>
            </Grid>
            <Grid xs={12}>
                {response != undefined &&
                    <ComparisonTable
                        type="Compressor"
                        activeId={compressor?.id ?? ''}
                        data={response.compressors as Array<ResponseSchemaCompressorsInner>}
                    />
                }
            </Grid>
            <Grid xs={12}>
                {response != undefined &&
                    <ComparisonTable
                        type="Storage"
                        activeId={storage?.id ?? ""}
                        data={response.storage as Array<ResponseSchemaStorageInner>}
                    />
                }
            </Grid>
        </Grid>
    }</>)
}

export default Results;