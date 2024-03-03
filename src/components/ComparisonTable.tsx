import * as React from 'react';
import { Sheet, Table, Typography, List, ListItem, ListItemDecorator } from '@mui/joy';
import { ResponseSchemaCompressorsInner, ResponseSchemaDispensersInner } from '../api/calculator';

interface ComparisonTableProps {
    type: string;
    data: Array<ResponseSchemaDispensersInner | ResponseSchemaCompressorsInner | ResponseSchemaDispensersInner>; // Replace with the appropriate type for your data
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data, type }) => (
    <Sheet variant="outlined" sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" variant="soft" borderAxis="bothBetween">
            <thead>
                <tr>
                    <th style={{ width: '20%' }}>{type}</th>
                    <th>Advantages</th>
                    <th>Disadvantages</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id} style={row.id == "1" ? { outline: '3px solid var(--joy-palette-primary-500)' } : {}}>
                        <th scope="row"><Typography>{row.meta?.title}</Typography></th>
                        <td>
                            <List>
                                {row.meta?.positives?.map((advantage, index) => (
                                    <ListItem key={index} sx={(theme) => ({ color: theme.palette.success[400] })}>
                                        <ListItemDecorator>+</ListItemDecorator>
                                        {advantage}
                                    </ListItem>
                                ))}
                            </List>
                        </td>
                        <td>
                            <List>
                                {row.meta?.negatives?.map((disadvantage, index) => (
                                    <ListItem key={index} sx={(theme) => ({ color: theme.palette.danger[400] })}>
                                        <ListItemDecorator>-</ListItemDecorator>
                                        {disadvantage}
                                    </ListItem>
                                ))}
                            </List>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Sheet>
);

export default ComparisonTable;