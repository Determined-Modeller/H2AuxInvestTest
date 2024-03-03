
import { Box, Sheet, Typography, styled } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import { BarChart, PieChart } from '@mui/x-charts';
// import { post } from 'aws-amplify/api';
import { useEffect } from 'react';



// const postBody = {
//     "hydrogen_inlet_pressure": {
//         "value": 0,
//         "unit": "BAR"
//     },
//     "dispensing_type": "TUBETRAILER",
//     "energy_price_per_mwh": 0,
//     "is_storage_required": true,
//     "storage_mass": {
//         "value": 0,
//         "unit": "KG"
//     },
//     "storage_pressure": {
//         "value": 0,
//         "unit": "BAR"
//     },
//     "dispensing_pressure": {
//         "value": 0,
//         "unit": "BAR"
//     },
//     "dispensing_mass": {
//         "value": 0,
//         "unit": "KG_PER_HOUR"
//     },
//     "avg_hydrogen_dispensing_rate": {
//         "value": 0,
//         "unit": "KG_PER_HOUR"
//     },
//     "peak_hydrogen_dispensing_rate": {
//         "value": 0,
//         "unit": "KG_PER_HOUR"
//     },
//     "lifetime_years": 0,
//     "wacc": 0,
//     "is_precooling_used": true,
//     "vehicle_type": "TUBETRAILER"
// }

async function postCalculate() {
    // try {
    //     const restOperation = post({
    //         apiName: 'h2AuxCalculatorApi',
    //         path: '/calculator/calculate',
    //         options: {
    //             body: postBody
    //         }
    //     });
    //     const response = await restOperation.response;
    //     console.log('PUT call succeeded: ', response);
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // } catch (e: any) {
    //     console.log('PUT call failed: ', JSON.parse(e.response.body));
    // }
}

const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography['body-sm'],
    textAlign: 'center',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: theme.radius.md,
}));

const Results = () => {
    useEffect(() => {
        postCalculate();
    }, [])
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={5}>
                <Item>
                    <BarChart
                        height={290}
                        series={[
                            { data: [35, 51, 15], label: "Energy", stack: "lcoh" },
                            { data: [35, 51, 15], label: "Installation", stack: "lcoh" },
                            { data: [35, 51, 15], label: "Maintanance", stack: "lcoh" },
                            { data: [35, 51, 15], label: "Equipment", stack: "lcoh" }
                        ]}
                        xAxis={[{ data: ['Compressor', 'Storage', 'Dispensor'], scaleType: 'band' }]}
                    />
                </Item>
            </Grid>
            <Grid xs={7}>
                <Item>
                    <Grid container paddingY={2} sx={{ flexGrow: 1 }}>
                        <Box marginX={10}>
                            <Typography level="h3" fontWeight={3}>
                                Fixed Costs
                            </Typography>
                            <Typography>
                                5000$ - 6500$
                            </Typography>
                        </Box>
                        <Box>
                            <Typography level="h3" fontWeight={3}>
                                Operating Costs
                            </Typography>
                            <Typography>
                                5000$ - 6500$
                            </Typography>
                        </Box>
                    </Grid>

                </Item>
                <Item>
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
                    </Grid>
                </Item>
            </Grid>
        </Grid>
    )
}

export default Results;