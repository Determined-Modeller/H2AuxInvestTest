import React from 'react';
import { Card, Typography, Grid, Box } from '@mui/joy';
import { ResponseSchemaCompressorsInner, ResponseSchemaDispensersInner, ResponseSchemaStorageInner } from '../api/calculator';

interface CostsCardProps {
    compressor: ResponseSchemaCompressorsInner | undefined;
    storage: ResponseSchemaStorageInner | undefined;
    dispenser: ResponseSchemaDispensersInner | undefined;
}

const CostsCard: React.FC<CostsCardProps> = ({ compressor, storage, dispenser }) => {
    const GBPound = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });

    return (
        <Card variant="solid" color="primary" invertedColors sx={(theme) => ({ marginBottom: theme.spacing(2) })}>
            <Grid container paddingY={2} sx={{ flexGrow: 1 }}>
                <Box marginX={10}>
                    <Typography level="h3" fontWeight={3}>
                        Fixed Costs
                    </Typography>
                    <Typography level="h4">
                        {GBPound.format((compressor?.sum_capex?.min ?? 0) + (storage?.sum_capex?.min ?? 0) + (dispenser?.sum_capex?.min ?? 0))} -
                        {GBPound.format((compressor?.sum_capex?.max ?? 0) + (storage?.sum_capex?.max ?? 0) + (dispenser?.sum_capex?.max ?? 0))}
                    </Typography>
                </Box>
                <Box>
                    <Typography level="h3" fontWeight={3}>
                        Operating Costs
                    </Typography>
                    <Typography level="h4">
                        {GBPound.format((compressor?.sum_opex?.min ?? 0) + (storage?.sum_opex?.min ?? 0) + (dispenser?.sum_opex?.min ?? 0))} -
                        {GBPound.format((compressor?.sum_opex?.max ?? 0) + (storage?.sum_opex?.max ?? 0) + (dispenser?.sum_opex?.max ?? 0))}
                    </Typography>
                </Box>
            </Grid>
        </Card>
    );
};

export default CostsCard;