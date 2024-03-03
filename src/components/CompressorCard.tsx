import React from 'react';
import { Card, Typography, Stack, CardContent } from '@mui/joy';
import { ResponseSchemaCompressorsInner } from '../api/calculator';
import { AcUnit, Compress, FlashOn } from '@mui/icons-material';

interface CompressorCardProps {
    compressor: ResponseSchemaCompressorsInner | undefined;
}

const CompressorCard: React.FC<CompressorCardProps> = ({ compressor }) => (
    <Card>
        <Typography level="h4" fontWeight={3}>
            {compressor?.meta?.title}
        </Typography>
        <Stack direction="row" justifyContent={'space-evenly'}>
            <Card variant="plain" >
                <CardContent>
                    <Stack spacing={0.5} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                        <FlashOn />
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
);

export default CompressorCard;