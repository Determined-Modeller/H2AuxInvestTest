import React from 'react';
import { Card, Typography, Stack, CardContent } from '@mui/joy';
import { ResponseSchemaStorageInner } from '../api/calculator';
import { Compress, Scale } from '@mui/icons-material';

interface StorageCardProps {
    storage: ResponseSchemaStorageInner | undefined; // Replace with the appropriate type for your storage data
}

const StorageCard: React.FC<StorageCardProps> = ({ storage }) => (
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
);

export default StorageCard;