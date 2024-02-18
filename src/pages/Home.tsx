

import { Box, Button, Typography } from "@mui/joy"
import { ArrowForward } from "@mui/icons-material";
import TwoSidedLayout from "../components/TwoSidedLayout";
import ROUTE_CONSTANTS from "../routing/routeConstants";



const Home = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <TwoSidedLayout>
                <Typography color="primary" fontSize="lg" fontWeight="lg">
                    Hydrogen Planning Tool
                </Typography>
                <Typography
                    level="h1"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    Estimate capital cost of operating a hydrogen dispensing station.
                </Typography>
                <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                    Get a quick estimate of operating, capital, and installation cost of your H2 dispensing station plans.
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
                        href={ROUTE_CONSTANTS.DOCS}
                        size="lg" variant="outlined" color="neutral">
                        Learn More
                    </Button>
                    <Button
                        component="a"
                        href={ROUTE_CONSTANTS.CALCULATOR}
                        size="lg"
                        endDecorator={<ArrowForward />}>
                        Get Started For Free
                    </Button>
                </Box>
            </TwoSidedLayout>
        </Box>
    );
}

export default Home;