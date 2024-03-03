
import { Box, Card, CardContent, FormControl, FormHelperText, FormLabel, List, ListItem, ListItemDecorator, Select, Sheet, Stack, Table, Typography, Option } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import { BarChart, PieChart } from '@mui/x-charts';
import { useEffect } from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { AcUnit, Compress, Scale, SettingsInputComponent } from '@mui/icons-material';
import { RequestSchema } from '../api/calculator';
import { postCalculate } from '../api/calculator/service/api';



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

async function postCalc() {
    console.log(await postCalculate(postBody as RequestSchema));
}

const data = [
    { selected: false, tech: 'Piston', advantages: ['High efficiency', 'Suited for large capacities'], disadvantages: ['High maintenance requirements', 'Not optimal for high quality or high compression ratio operation'] },
    { selected: true, tech: 'Membrane', advantages: ['Established and reliable technology', 'Suited for high quality applications'], disadvantages: ['Limited compression capacities', 'High sensitivity to feed gas quality'] },
    { selected: false, tech: 'Centrifugal', advantages: ['High efficiency', 'Suited for large, stable capacities'], disadvantages: ['High initial cost and complexity', 'Sensitive to variations in operating conditions'] },
    { selected: false, tech: 'Flexergy', advantages: ['High uptime', 'Modular approach makes suitable for many applications'], disadvantages: ['Not suitable for high pressure vehicle filling', 'Long term industrial record not yet proven due to novel approach.'] },
    { selected: false, tech: 'Liquid-Ionic (Future Inclusion)', advantages: ['High compression ratios', 'Suited for high purity applications'], disadvantages: ['Complex design and operation', 'High initial cost and limited track record'] },
];

const storage = [
    { tech: 'Type I/II', advantages: ['Simple and cost effective', 'Reliable and durable'], disadvantages: ['High weight and large size', 'Low energy density and working pressure'], selected: false },
    { tech: 'Type III/IV', advantages: ['Moderate energy density', 'Lightweight and compact'], disadvantages: ['Moderate initial cost', 'Higher inspection and maintenance requirements than type I/II'], selected: true },
    { tech: 'Metal Hydride (future)', advantages: ['High volumetric density', 'Low pressure operation is safer'], disadvantages: ['High weight', 'Requires active thermal management'], selected: false },
    { tech: 'Flexergy (future)', advantages: ['Flexible/Scalable', 'Minimised downtime due to modular approach'], disadvantages: ['Potential standardisation issues with mature equipment', 'Long term industrial record not yet proven due to approach.'], selected: false },
    { tech: 'Liquid Organic Hydrogen Carrier (LOHC) (future)', advantages: ['High energy density', 'Reversible hydrogen storage in the LOHC'], disadvantages: ['Energy losses from conversion to/from LOHC', 'High complexity and cost of LOHC infrastructure.'], selected: false },
];

const Results = () => {
    useEffect(() => {
        postCalc();
    }, [])
    return (
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
                                defaultValue="{data[0].tech}"
                                slotProps={{
                                    button: {
                                        id: 'select-field-demo-button',
                                        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
                                    },
                                }}
                            >
                                {
                                    data.map(row => (
                                        <Option value="{{row.tech}}">{row.tech}</Option>
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
                                defaultValue="{data[0].tech}"
                                slotProps={{
                                    button: {
                                        id: 'select-field-demo-button',
                                        'aria-labelledby': 'select-field-demo-label select-field-demo-button',
                                    },
                                }}
                            >
                                {
                                    storage.map(row => (
                                        <Option value="{{row.tech}}">{row.tech}</Option>
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
                        Compressor
                    </Typography>
                    <Stack direction="row" justifyContent={'space-evenly'}>
                        <Card variant="plain" >
                            <CardContent>
                                <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                    <FlashOnIcon />
                                    <Typography level="title-sm">Power</Typography>
                                    <Typography>100 kW</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card variant="plain">
                            <CardContent>
                                <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                    <AcUnit />
                                    <Typography level="title-sm">Cooling Energy</Typography>
                                    <Typography>100 kWh/kg</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card variant="plain">
                            <CardContent>
                                <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                    <Compress />
                                    <Typography level="title-sm">Compression Energy</Typography>
                                    <Typography>100 kWh/kg</Typography>
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
                            Storage
                        </Typography>
                        <Stack direction="row" justifyContent={'space-evenly'}>
                            <Card variant="plain" >
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <Scale />
                                        <Typography level="title-sm">Capacity</Typography>
                                        <Typography>1000 kg</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Card variant="plain">
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <Compress />
                                        <Typography level="title-sm">Pressure</Typography>
                                        <Typography>100 psi</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>

                        </Stack>
                    </Card>
                </Grid>
                <Grid xs={6}>
                    <Card>
                        <Typography level="h4" fontWeight={3}>
                            Dispensor
                        </Typography>
                        <Stack direction="row" justifyContent={'space-evenly'}>
                            <Card variant="plain" >
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <SettingsInputComponent />
                                        <Typography level="title-sm"># Dispensers</Typography>
                                        <Typography>100 kW</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                            <Card variant="plain">
                                <CardContent>
                                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                                        <Compress />
                                        <Typography level="title-sm">Pressure</Typography>
                                        <Typography>100 psi</Typography>
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
                        Levelized Cost of Hydrogen
                    </Typography>
                    <BarChart
                        height={400}
                        series={[
                            { data: [35, 51, 15], label: "Energy", stack: "lcoh" },
                            { data: [35, 51, 15], label: "Installation", stack: "lcoh" },
                            { data: [35, 51, 15], label: "Maintanance", stack: "lcoh" },
                            { data: [35, 51, 15], label: "Equipment", stack: "lcoh" }
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
                                5000$ - 6500$
                            </Typography>
                        </Box>
                        <Box>
                            <Typography level="h3" fontWeight={3}>
                                Operating Costs
                            </Typography>
                            <Typography level="h4">
                                5000$ - 6500$
                            </Typography>
                        </Box>
                    </Grid>

                </Card>
                <Card variant="soft">
                    <Typography level="h3" fontWeight={3}>
                        Cost Breakdown
                    </Typography>
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid xs={6} >
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'series A' },
                                            { id: 1, value: 15, label: 'series B' },
                                            { id: 2, value: 20, label: 'series C' },
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
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'series A' },
                                            { id: 1, value: 20, label: 'series B' },
                                            { id: 2, value: 30, label: 'series C' },
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
                <Sheet variant="outlined"
                    sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" variant="soft" borderAxis="bothBetween">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>Compressor Tech</th>
                                <th>Advantages</th>
                                <th>Disadvantages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.tech}
                                    style={row.selected ? {
                                        outline: '3px solid var(--joy-palette-primary-500)',

                                    } : {}}
                                >
                                    <th scope="row"><Typography>{row.tech}</Typography></th>
                                    <td>
                                        <List>
                                            {row.advantages.map((advantage, index) => (
                                                <ListItem key={index} sx={(theme) => ({ color: theme.palette.success[400] })}>
                                                    <ListItemDecorator>+</ListItemDecorator>
                                                    {advantage}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </td>
                                    <td>
                                        <List>
                                            {row.disadvantages.map((disadvantage, index) => (
                                                <ListItem key={index} sx={(theme) => ({ color: theme.palette.danger[400] })}>
                                                    <ListItemDecorator>-</ListItemDecorator>
                                                    {disadvantage}</ListItem>
                                            ))}
                                        </List>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>
            </Grid>
            <Grid xs={12}>
                <Sheet variant="outlined"
                    sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" variant="soft" borderAxis="bothBetween">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>Compressor Tech</th>
                                <th>Advantages</th>
                                <th>Disadvantages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storage.map((row) => (
                                <tr key={row.tech}
                                    style={row.selected ? {
                                        outline: '3px solid var(--joy-palette-primary-500)',

                                    } : {}}
                                >
                                    <th scope="row"><Typography>{row.tech}</Typography></th>
                                    <td>
                                        <List>
                                            {row.advantages.map((advantage, index) => (
                                                <ListItem key={index} sx={(theme) => ({ color: theme.palette.success[400] })}>
                                                    <ListItemDecorator>+</ListItemDecorator>
                                                    {advantage}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </td>
                                    <td>
                                        <List>
                                            {row.disadvantages.map((disadvantage, index) => (
                                                <ListItem key={index} sx={(theme) => ({ color: theme.palette.danger[400] })}>
                                                    <ListItemDecorator>-</ListItemDecorator>
                                                    {disadvantage}</ListItem>
                                            ))}
                                        </List>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>
            </Grid>
        </Grid>
    )
}

export default Results;