

import { Box, Button, Card, Divider, Typography, useColorScheme } from "@mui/joy";

import Diagram from '../assets/diagram_input.png';
import DiagramInverse from '../assets/diagram_inverse.png';
import { ArrowForward } from "@mui/icons-material";
import ROUTE_CONSTANTS from "../routing/routeConstants";
import { useNavigate } from "react-router-dom";


const Calculator = () => {
    const { mode } = useColorScheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                py={'2em'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" color="primary" fontSize="lg" fontWeight="lg">
                    H2AuxInvest

                </Typography>
                <Typography level="h2" pb={'2em'}>
                    Hydrogen Infrastructure Costing Tool
                </Typography>
                <Card
                    variant="soft"
                    sx={{
                        marginTop: '50px',
                        borderWidth: 3,
                        borderRadius: 'sm',
                        maxWidth: '800px',
                        margin: 'auto',
                    }}
                >
                    <Box
                        py={'50px'}
                        sx={{
                            maxWidth: '400px',
                            margin: 'auto'
                        }}
                    >
                        {mode === 'light' ? <img src={Diagram} width={'90%'} /> : <img src={DiagramInverse} width={'90%'} />}
                    </Box>
                </Card>
            </Box>
            <Box
                pt={'2em'}
                pb={'3em'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto',
                    display: 'grid',
                    gap: 3,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <Box
                    sx={theme => ({
                        paddingBottom: theme.spacing(3)
                    })}
                >
                    <Typography level="h3" fontSize={'lg'} pb="20px">
                        Let's calculate the key parameters of your hydrogen infrastructure
                    </Typography>
                    <Typography fontSize={'lg'}>

                        The following survey takes less than a minute, asking questions needed to provide reliable estimates of key inputs for calculations to size, specify and cost your hydrogen compression and storage infrastructure.
                        More detail on these calculations is available in the documentation, always available in the top right of the page.  All pressures used in calculations and results are absolute pressures.  Should any issues arise please contact the team by raising a new issue on the project github page.
                        To find out more about how to participate as a manufacturer or a contributor, please email h2auxinvest@gchydrogen.co.uk
                    </Typography>
                </Box>

                <Box
                    sx={{
                        maxWidth: "400px",
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        my: 7,
                        '& > *': { flex: 'auto' },
                    }}
                >
                    <Button
                        component="a"
                        onClick={() => navigate(ROUTE_CONSTANTS.DOCS)}
                        size="lg" variant="outlined" color="neutral">
                        Learn More
                    </Button>
                    <Button
                        component="a"
                        onClick={() => navigate(ROUTE_CONSTANTS.CALCULATOR_INTAKE)}
                        size="lg"
                        endDecorator={<ArrowForward />}>
                        Start
                    </Button>
                </Box>
            </Box>

            <Box
                sx={theme => ({
                    maxWidth: '800px',
                    margin: 'auto',
                    paddingTop: theme.spacing(1)
                })}
            >
                <Divider
                    sx={theme => ({
                        maxWidth: '800px',
                        margin: 'auto',
                        marginY: theme.spacing(5)
                    })}
                />
                <Typography color="neutral" fontSize="xs" fontWeight="xs">
                    All calculations and data provided by H2AuxInvest's Hydrogen Infrastructure Costing Tool are for informational purposes only. While this tool aims to provide helpful and accurate information, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information produced.
                    The information provided by the Hydrogen Infrastructure Costing Tool is not a substitute for professional advice. Engineering decisions should not be made solely on the basis of this tool. Always seek the guidance of qualified professionals before making any such decisions.
                    H2AuxInvest's Hydrogen Infrastructure Costing Tool is an open-source project developed for educational and informational purposes under principles of fair use. The tool is designed to support and further the understanding and roll-out of hydrogen infrastructure.
                    In no event shall H2AuxInvest or contributors to the Hydrogen Infrastructure Costing Tool be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the tool or the contents of the tool. H2AuxInvest reserves the right to make additions, deletions, or modifications to the contents of the tool at any time without prior notice.
                    The Hydrogen Infrastructure Costing Tool is provided under a MIT License, which allows for redistribution and use in source and binary forms, with or without modification. Users are expected to credit the original creation and not use the tool in a manner that infringes upon the intellectual property rights of H2AuxInvest or any third parties.
                    By using the Hydrogen Infrastructure Costing Tool, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use the provided tool or any affiliated websites or services
                </Typography>
            </Box>

        </Box>
    );
}

export default Calculator;