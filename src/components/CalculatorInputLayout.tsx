import { Box, Button, Divider, Typography } from '@mui/joy';
import ProgressTracker from './ProgressTracker';

interface LayoutProps {
    activeStep: number;
    onNext: () => void;
    onBack: () => void;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeStep, onNext, onBack, children }) => {
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
                <ProgressTracker activeStep={activeStep} />
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
                    {children}
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
                        onClick={onBack}
                        size="lg" variant="outlined" >
                        Back
                    </Button>
                    <Button
                        component="a"
                        onClick={onNext}
                        size="lg"
                    >
                        Next
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
};

export default Layout;