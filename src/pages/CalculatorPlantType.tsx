

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
                    H2 User
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
            <Typography color="neutral" fontSize="sm" fontWeight="sm">
                All calculations and data provided by H2AuxInvest's Hydrogen Infrastructure Costing Tool are for informational purposes only. While this tool aims to provide helpful and accurate information, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information produced.
The information provided by the Hydrogen Infrastructure Costing Tool is not a substitute for professional advice. Engineering decisions should not be made solely on the basis of this tool. Always seek the guidance of qualified professionals before making any such decisions.
H2AuxInvest's Hydrogen Infrastructure Costing Tool is an open-source project developed for educational and informational purposes under principles of fair use. The tool is designed to support and further the understanding and roll-out of hydrogen infrastructure.
In no event shall H2AuxInvest or contributors to the Hydrogen Infrastructure Costing Tool be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the tool or the contents of the tool. H2AuxInvest reserves the right to make additions, deletions, or modifications to the contents of the tool at any time without prior notice.
The Hydrogen Infrastructure Costing Tool is provided under a MIT License, which allows for redistribution and use in source and binary forms, with or without modification. Users are expected to credit the original creation and not use the tool in a manner that infringes upon the intellectual property rights of H2AuxInvest or any third parties.
By using the Hydrogen Infrastructure Costing Tool, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use the provided tool or any affiliated websites or services
                </Typography>
        </Box >
    );
}

export default CalculatorPlantType;