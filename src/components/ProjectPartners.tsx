import Box from '@mui/joy/Box';


// Import the logos
import logo1 from '../assets/partner_logos/scotgovlogo.svg';
import logo2 from '../assets/partner_logos/flex_energy.png';
import logo3 from '../assets/partner_logos/gch_logo.jpg';
import logo4 from '../assets/partner_logos/RicardoLogo.png';

const logos = [
    { src: logo3, url: 'https://www.partner3.com' },
    { src: logo1, url: 'https://www.gov.scot/about/how-government-is-run/directorates/energy-and-climate-change/' },
    { src: logo2, url: 'https://www.ricardo.com/en/services/technical-consulting/energy-transition/hydrogen-consultancy' },
    { src: logo4, url: 'https://www.ricardo.com/en/services/technical-consulting/energy-transition/hydrogen-consultancy' },
];

const PartnerLogos = () => {
    return (
        <Box my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
                {logos.map((logo, index) => (
                    <Box key={index} mx={4} my={1}>
                        <a href={logo.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={logo.src}
                                alt={`Partner logo ${index + 1}`}
                                style={{ height: '100px', maxWidth: '200px', objectFit: 'contain' }}
                            />
                        </a>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PartnerLogos;