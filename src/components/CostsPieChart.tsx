import React from 'react';
import { Typography } from '@mui/joy';
import { PieChart } from '@mui/x-charts';

interface CostsPieChartProps {
    title: string;
    data: Array<{ id: number, value: number, label: string }>;
}

const CostsPieChart: React.FC<CostsPieChartProps> = ({ title, data }) => (
    <>
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
            width={400}
            height={280}
            title='Pie chart'
        />
    </>
);

export default CostsPieChart;