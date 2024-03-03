

import { Box, Typography, Button, FormLabel, RadioGroup, Avatar, Sheet } from "@mui/joy";

import Radio, { radioClasses } from '@mui/joy/Radio';

import ProgressTracker from "../components/ProgressTracker";
import { useForm, SubmitHandler } from "react-hook-form"
import ROUTE_CONSTANTS from "../routing/routeConstants";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

type Inputs = {
    example: string
    exampleRequired: string
}

const CalculatorPlantType = () => {
    const {
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it


    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                py={'70px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <ProgressTracker activeStep={1} />
            </Box>
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" pb="20px">
                    Hydrogen User
                </Typography>
                <Typography>
                    Please select the hydrogen use you wish to build for below.
                </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    pb={'50px'}
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
                        sx={{
                            maxWidth: "400px",
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <Typography>

                        </Typography>
                        <RadioGroup
                            aria-label="platform"
                            defaultValue="Website"
                            overlay
                            name="platform"
                            sx={{
                                flexDirection: 'row',
                                gap: 2,
                                [`& .${radioClasses.checked}`]: {
                                    [`& .${radioClasses.action}`]: {
                                        inset: -1,
                                        border: '3px solid',
                                        borderColor: 'primary.500',
                                    },
                                },
                                [`& .${radioClasses.radio}`]: {
                                    display: 'contents',
                                    '& > svg': {
                                        zIndex: 2,
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        bgcolor: 'background.surface',
                                        borderRadius: '50%',
                                    },
                                },
                            }}
                        >
                            {['Tubetrailers', 'Vehicles'].map((value) => (
                                <Sheet
                                    key={value}
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 'md',

                                        boxShadow: 'sm',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        p: 2,
                                        minWidth: 120,
                                    }}
                                >
                                    <Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
                                    <Avatar variant="soft" size="sm" />
                                    <FormLabel htmlFor={value}>{value}</FormLabel>
                                </Sheet>
                            ))}
                        </RadioGroup>


                        {errors.exampleRequired && <span>This field is required</span>}
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
                            href={ROUTE_CONSTANTS.CALCULATOR_INTAKE}
                            size="lg" variant="outlined" color="neutral">
                            Back
                        </Button>
                        <Button
                            component="a"
                            href={ROUTE_CONSTANTS.CALCULATOR_CONSUMER}
                            size="lg"
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </form >
        </Box >
    );
}

export default CalculatorPlantType;