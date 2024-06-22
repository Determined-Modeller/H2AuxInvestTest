

import { Box, Button, Container, Typography } from "@mui/joy"
import { ArrowForward } from "@mui/icons-material";
import TwoSidedLayout from "../components/TwoSidedLayout";
import ROUTE_CONSTANTS from "../routing/routeConstants";
import PartnerLogos from "../components/ProjectPartners";
import Team from "../components/Team";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <TwoSidedLayout>
                <Typography color="primary" fontSize="lg" fontWeight="lg">
                    H2AuxInvest – Hydrogen Infrastructure Costing Tool
                </Typography>
                <Typography
                    level="h1"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    Estimate costs of your hydrogen infrastructure
                </Typography>
                <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                    Rapidly estimate capital, operating, installation and energy costs for your end-use of hydrogen, compare available configurations and explore different technologies
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        my: 2,
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
                        onClick={() => navigate(ROUTE_CONSTANTS.CALCULATOR)}
                        size="lg"
                        endDecorator={<ArrowForward />}>
                        Get Started For Free
                    </Button>
                </Box>
            </TwoSidedLayout>
            <PartnerLogos />
            <Container
                sx={(theme) => ({
                    position: 'relative',
                    minHeight: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    py: 5,
                    gap: 4,
                    [theme.breakpoints.up(834)]: {
                        flexDirection: 'row',
                        gap: 6,
                    },
                    [theme.breakpoints.up(1199)]: {
                        gap: 12,
                    },
                })}
            >
                <Team />
            </Container>

        </Box>
    );
}

export default Home;