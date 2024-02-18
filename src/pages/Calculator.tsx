

import { Box, Button, Typography, useColorScheme } from "@mui/joy";

// import { useForm, SubmitHandler } from "react-hook-form"
import Diagram from '../assets/diagram_input.png';
import DiagramInverse from '../assets/diagram_inverse.png';
import { ArrowForward } from "@mui/icons-material";
import ROUTE_CONSTANTS from "../routing/routeConstants";

// type Inputs = {
//     example: string
//     exampleRequired: string
// }

const Calculator = () => {
    const { mode } = useColorScheme();
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                py={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" color="primary" fontSize="lg" fontWeight="lg">
                    H2 Aux Invest Calculator
                </Typography>
                <Typography level="h2">
                    Let's calculate [need some text here]
                </Typography>
            </Box>
            <Box
                sx={(theme) => ({
                    marginTop: '50px',
                    borderWidth: 3,
                    borderRadius: 'sm',
                    bgcolor: 'background.surface',
                    maxWidth: '800px',
                    margin: 'auto',
                    boxShadow: theme.shadow.xl,
                    '--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
                })}
            >
                <Box
                    py={'50px'}
                    sx={{
                        maxWidth: '400px',
                        margin: 'auto'
                    }}
                >
                    {mode === 'light' ? <img src={Diagram} width={'100%'} /> : <img src={DiagramInverse} width={'100%'} />}
                </Box>
            </Box>

            <Box
                py={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography>
                    [short description of the inputs/process and what the calculator does]
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum
                    pulvinar etiam. Eu augue ut lectus arcu bibendum at varius vel. Tortor vitae
                    purus faucibus ornare suspendisse sed nisi. A pellentesque sit amet porttitor.
                </Typography>
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
                        href={ROUTE_CONSTANTS.DOCS}
                        size="lg" variant="outlined" color="neutral">
                        Learn More
                    </Button>
                    <Button
                        component="a"
                        href={ROUTE_CONSTANTS.CALCULATOR_INTAKE}
                        size="lg"
                        endDecorator={<ArrowForward />}>
                        Start
                    </Button>
                </Box>
            </Box>

            {/* <form onSubmit={handleSubmit(onSubmit)}>

                <Input defaultValue="test" {...register("example")} />


                <Input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <Input type="submit" />
            </form> */}
        </Box>
    );
}

export default Calculator;