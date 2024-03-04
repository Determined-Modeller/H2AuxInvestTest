

import { Box, Typography, Button, FormLabel, RadioGroup, Sheet } from "@mui/joy";

import Radio, { radioClasses } from '@mui/joy/Radio';

import ProgressTracker from "../components/ProgressTracker";
import ROUTE_CONSTANTS from "../routing/routeConstants";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { DirectionsCar } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RequestSchema, RequestSchemaDispensingTypeEnum } from "../api/calculator";


const CalculatorPlantType = () => {
    const [request, setRequest] = useState({} as RequestSchema)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const locationRequest = location.state as RequestSchema;
        if (!locationRequest || !locationRequest.hydrogen_inlet_pressure?.value) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_INTAKE)
        }
        setRequest({
            ...locationRequest,
        })
    }, [])

    const canProceed = () => {
        return request.dispensing_type !== undefined;
    }

    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_CONSUMER, { state: request })
        }
    }

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_INTAKE, { state: request })
    };


    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement> | null
    ) => {
        setRequest({
            ...request,
            dispensing_type: event?.target?.value as RequestSchemaDispensingTypeEnum,
        })
    };
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
            <form>
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
                            onChange={handleChange}

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
                            <Sheet
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
                                <Radio id={"TUBETRAILER"} value={"TUBETRAILER"} checkedIcon={<CheckCircleRoundedIcon />} />
                                <LocalShippingIcon />
                                <FormLabel htmlFor={"TUBETRAILER"}>{"TUBETRAILER"}</FormLabel>
                            </Sheet>
                            <Sheet
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
                                <Radio id={"VEHICLE"} value={"VEHICLE"} checkedIcon={<CheckCircleRoundedIcon />} />
                                <DirectionsCar />
                                <FormLabel htmlFor={"VEHICLE"}>{"VEHICLE"}</FormLabel>
                            </Sheet>
                        </RadioGroup>

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
                            onClick={goToPrevious}
                            size="lg" variant="outlined" color="neutral">
                            Back
                        </Button>
                        <Button
                            component="a"
                            onClick={goToNext}
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