import React from 'react';
import { Card, Typography, Stack, CardContent } from '@mui/joy';
import SettingsInputComponent from '@mui/icons-material/SettingsInputComponent';
import Compress from '@mui/icons-material/Compress';
import { ResponseSchemaDispensersInner } from '../api/calculator';

interface DispensorCardProps {
    dispensor: ResponseSchemaDispensersInner | undefined; // Replace with the appropriate type for your dispensor data
}

const DispensorCard: React.FC<DispensorCardProps> = ({ dispensor }) => (
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
);

export default DispensorCard;