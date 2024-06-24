
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';

// Import the profile images
import image1 from '../assets/profiles/rhodri.jpeg';
import image2 from '../assets/profiles/pavel.jpeg';
import image3 from '../assets/profiles/david.jpeg';
import image4 from '../assets/profiles/drRay.jpeg';
import { Box } from '@mui/material';
import { CardActions } from '@mui/joy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const team = [
    {
        name: 'Rhodri Hawkins',
        role: 'Project Lead',
        description: 'Started, and leads H2AuxInvest, a seasoned hydrogen engineer determined to collaborate to enable the energy transition',
        linkedIn: 'https://www.linkedin.com/in/rhodri-hawkins/',
        image: image1,
    },
    {
        name: 'Pavel Culik',
        role: 'Engineering Lead',
        description: 'An international hydrogen engineer, specialised in simplifying and communicating complex quantitative problems, Pavel leads on technical aspects of this project',
        linkedIn: 'https://www.linkedin.com/in/culik-pavel1/',
        image: image2,
    },
    {
        name: 'David Starley',
        role: 'Steering Committee Member',
        description: 'David brings an extensive multi-disciplinary engineering background and is a determined advocate for a greener future',
        linkedIn: 'https://www.linkedin.com/in/david-starley-1560a4171/',
        image: image3,
    },
    {
        name: 'Ray Sacks',
        role: 'Steering Committee Member',
        description: 'Bringing more than 50 years of experience in industrial gasses and hydrogen, including more than 35 years with Air Products, Ray brings an invaluable industry and practical perspective to the project',
        linkedIn: 'https://www.linkedin.com/in/raysacks/',
        image: image4,
    
    },
];

const Team = () => {
    return (<Box sx={{ paddingTop: 10 }}>
        <Typography
            paddingLeft={5}
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
            Project Team
        </Typography>
        <Grid container spacing={3} rowSpacing={3} sx={{ padding: 5 }}>
            {team.map((member, index) => (
                <Grid key={index}>
                    <Card variant="soft" color="neutral" sx={{ boxShadow: 'lg', maxWidth: 315, height: '100%' }}>
                        <Avatar src={member.image} alt={member.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
                        <CardContent sx={{ padding: '.5rem' }}>
                            <Typography fontWeight={500} fontSize={'lg'} component="div" textAlign="center">
                                {member.name}
                            </Typography>
                            <Typography color="primary" fontWeight={500} fontSize={'md'} textAlign="center">
                                {member.role}
                            </Typography>
                            <Typography>
                                {member.description}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button startDecorator={<LinkedInIcon />} sx={{ marginTop: '1rem', width: "100%" }} href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>

    );
};

export default Team;