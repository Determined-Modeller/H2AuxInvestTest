
import { Box, Card, FormControl, FormHelperText, FormLabel, Select, Stack, Typography, Option, LinearProgress } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import { BarChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { RequestSchema, ResponseSchema, ResponseSchemaCompressorsInner, ResponseSchemaDispensersInner, ResponseSchemaStorageInner } from '../api/calculator';
import { postCalculate } from '../api/calculator/service/api';
import ComparisonTable from '../components/ComparisonTable';
import CostsPieChart from '../components/CostsPieChart';
import DispenserCard from '../components/DispenserCard';
import StorageCard from '../components/StorageCard';
import CompressorCard from '../components/CompressorCard';
import CostsCard from '../components/CostsCard';
import { useLocation } from 'react-router-dom';



// const postBody = {
//     "hydrogen_inlet_pressure": {
//         "value": 10,
//         "unit": "BAR"
//     },
//     "dispensing_type": "TUBETRAILER",
//     "energy_price_per_mwh": 10,
//     "is_storage_required": true,
//     "storage_mass": {
//         "value": 10,
//         "unit": "KG"
//     },
//     "storage_pressure": {
//         "value": 500,
//         "unit": "PSI"
//     },
//     "dispensing_pressure": {
//         "value": 500,
//         "unit": "PSI"
//     },
//     "dispensing_mass": {
//         "value": 20,
//         "unit": "KG_PER_HOUR"
//     },
//     "avg_hydrogen_dispensing_rate": {
//         "value": 20,
//         "unit": "KG_PER_HOUR"
//     },
//     "peak_hydrogen_dispensing_rate": {
//         "value": 30,
//         "unit": "KG_PER_HOUR"
//     },
//     "lifetime_years": 20,
//     "wacc": 0.1,
//     "is_precooling_used": true,
//     "vehicle_type": "TUBETRAILER"
// }

const Results = () => {
    const [response, setResponse] = useState<ResponseSchema | undefined>(undefined);
    const [compressor, setCompressor] = useState<ResponseSchemaCompressorsInner | undefined>(undefined);
    const [storage, setStorage] = useState<ResponseSchemaStorageInner | undefined>(undefined);
    const [dispensor, setDispensor] = useState<ResponseSchemaDispensersInner | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const formData = useLocation().state as RequestSchema;

    useEffect(() => {
        const fetchData = async () => {
            console.log("hook is called");

            const res = await postCalculate(formData);
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
        <Grid container spacing={2} sx={theme => ({ flexGrow: 1, padding: theme.spacing(1), maxWidth: "1500px", margin: "auto" })}>
            <Grid xs={12} xl={12}>
                <Grid xs={12} xl={12} sx={(theme) => ({ marginY: theme.spacing(4) })}>
                    <Typography level="h2" fontWeight={6} sx={(theme) => ({ marginBottom: theme.spacing(2) })}>
                        Your Bespoke Results - Change your selected equipment types below to compare and explore the outputs
                    </Typography>
                    <Typography sx={(theme) => ({ marginBottom: theme.spacing(3) })}>
                        Our calculation tool shows detailed technical and commercial outputs for hydrogen compression, storage and dispensing, using your inputs to specify and cost your infrastructure.  Please vary technologies to compare power requirements, levelised costs and much more.  If the infrastrucutre needs of your infrastructure change please restart the survey to update this.
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
                                Pick your compression equipment here
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
                                Pick your storage equipment here
                            </FormHelperText>
                        </FormControl>
                    </Stack>

                </Grid>
            </Grid>
            <Grid xs={12} xl={12}>
                <Typography level="h2" fontWeight={6} sx={(theme) => ({ marginY: theme.spacing(4) })}>
                    System Overview
                </Typography>
            </Grid>
            <Grid xs={12} xl={5}>
                <CompressorCard compressor={compressor} />
            </Grid>
            <Grid xs={12} xl={7} container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={12} xl={6}>
                    <StorageCard storage={storage} />
                </Grid>
                <Grid xs={12} xl={6}>
                    <DispenserCard dispensor={dispensor} />
                </Grid>
            </Grid>
            <Grid xs={12} xl={12}>
                <Typography level="h2" fontWeight={6} sx={(theme) => ({ marginY: theme.spacing(4) })}>
                    Cost Analysis
                </Typography>
            </Grid>

            <Grid xs={12} xl={5}>

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
            <Grid xs={12} xl={7} rowSpacing={2}>
                <CostsCard compressor={compressor} storage={storage} dispenser={dispensor} />
                <Card variant="soft">
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid xs={12} xl={6} >
                            <CostsPieChart
                                title='Expected Fixed Costs (&pound;)'
                                data={[
                                    { id: 0, value: compressor?.sum_capex?.avg ?? 0, label: 'Compressor' },
                                    { id: 1, value: storage?.sum_capex?.avg ?? 0, label: 'Storage' },
                                    { id: 2, value: dispensor?.sum_capex?.avg ?? 0, label: 'Dispensor' },
                                ]}
                            />
                        </Grid>
                        <Grid xs={12} xl={6}>
                            <CostsPieChart
                                title='Expected Operating Costs (&pound;/year)'
                                data={[
                                    { id: 0, value: compressor?.sum_opex?.avg ?? 0, label: 'Compressor' },
                                    { id: 1, value: storage?.sum_opex?.avg ?? 0, label: 'Storage' },
                                    { id: 2, value: dispensor?.sum_opex?.avg ?? 0, label: 'Dispensor' },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid xs={12} xl={12}>
                <Typography level="h2" fontWeight={6} sx={(theme) => ({ marginY: theme.spacing(7) })}>
                    Equipment Comparison
                </Typography>
            </Grid>
            <Grid xs={12} xl={12}>
                {response != undefined &&
                    <ComparisonTable
                        type="Compressor"
                        activeId={compressor?.id ?? ''}
                        data={response.compressors as Array<ResponseSchemaCompressorsInner>}
                    />
                }
            </Grid>
            <Grid xs={12} xl={12}>
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