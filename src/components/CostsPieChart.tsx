import React from 'react';
import { Typography } from '@mui/joy';
import { PieChart } from '@mui/x-charts';
import { Box } from '@mui/material';

interface CostsPieChartProps {
    title: string;
    data: Array<{ id: number, value: number, label: string }>;
}

const CostsPieChart: React.FC<CostsPieChartProps> = ({ title, data }) => (
    <Box sx={{ maxWidth: '100%' }}>
        <Typography level="h4" fontWeight={3}>
            {title}
        </Typography>
        <PieChart
            series={[
                {
                    data,
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
            slotProps={{
                legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    padding: 0,
                },
            }}
            width={330}
            height={320}
            title='Pie chart'
        />
    </Box>
);

export default CostsPieChart;