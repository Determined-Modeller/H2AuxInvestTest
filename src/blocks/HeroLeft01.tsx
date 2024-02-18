import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import { Box } from '@mui/joy';

export default function HeroLeft01() {
  return (
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
        <Button size="lg" variant="outlined" color="neutral">
          Learn More
        </Button>
        <Button size="lg" endDecorator={<ArrowForward />}>
          Get Started For Free
        </Button>
      </Box>
    </TwoSidedLayout>
  );
}
