

import { Option, Box, Typography, FormLabel, RadioGroup, Sheet, FormControl, ListItemDecorator, Select, Input, FormHelperText } from "@mui/joy";

import Radio, { radioClasses } from '@mui/joy/Radio';

import ROUTE_CONSTANTS from "../routing/routeConstants";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { DirectionsCar, InfoOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { Mass, Pressure, RequestSchema, RequestSchemaVehicleTypeEnum } from "../api/calculator";
import schema from '../api/calculator/schema.json';
import useRequest from "../hooks/useValidatedRequestForm";
import CalculatorInputLayout from "../components/CalculatorInputLayout";
const options = [
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type A',
        status: "200 bar, 580 kg",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 200,
                unit: 'BAR'
            },
            kg: {
                value: 580,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type B',
        status: "300 bar, 840 kg",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 300,
                unit: 'BAR'
            },
            kg: {
                value: 840,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type C',
        status: "380 bar, 1000 kg",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 380,
                unit: 'BAR'
            },
            kg: {
                value: 1000,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type D',
        status: "450 bar, 1150 kg (non-standard)",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 450,
                unit: 'BAR'
            },
            kg: {
                value: 1150,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type E',
        status: "500 bar, 1300 kg (non-standard)",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 500,
                unit: 'BAR'
            },
            kg: {
                value: 1300,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Car,
        name: 'Car Type A',
        status: '350 bar, 5 kg',
        icon: <DirectionsCarIcon />,
        data: {
            bar: {
                value: 350,
                unit: 'BAR'
            },
            kg: {
                value: 5,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Car,
        name: 'Car Type B',
        status: '700 bar, 5 kg',
        icon: <DirectionsCarIcon />,
        data: {
            bar: {
                value: 700,
                unit: 'BAR'
            },
            kg: {
                value: 5,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Hdv,
        name: 'HDV Type A',
        status: '350 bar, 30 kg',
        icon: <DirectionsBusIcon />,
        data: {
            bar: {
                value: 350,
                unit: 'BAR'
            },
            kg: {
                value: 30,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Hdv,
        name: 'HDV Type B',
        status: '700 bar, 30 kg',
        icon: <DirectionsBusIcon />,
        data: {
            bar: {
                value: 700,
                unit: 'BAR'
            },
            kg: {
                value: 30,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Custom,
        name: 'Custom',
        status: 'Specify your vehicle',
        icon: <BuildIcon />,
        data: {
            bar: {
                value: 700,
                unit: 'BAR'
            },
            kg: {
                value: 5,
                unit: 'KG'
            }
        }
    }
] as const;


const CalculatorPlantType = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const locationRequest = location.state as RequestSchema;
    const modifiedSchema = schema;
    modifiedSchema.required = ['hydrogen_inlet_pressure']
    const { request, errorMessages, handleChange } = useRequest({
        ...locationRequest,
        dispensing_pressure: {
            ...locationRequest?.dispensing_pressure,
            unit: locationRequest?.dispensing_pressure?.unit ?? Pressure[Object.keys(Pressure)[0] as keyof typeof Pressure],
        },
        dispensing_mass: {
            ...locationRequest?.dispensing_mass,
            unit: locationRequest?.dispensing_mass?.unit ?? Mass[Object.keys(Mass)[0] as keyof typeof Mass],
        }
    }, modifiedSchema);
    console.log(request);

    const canProceed = () => {
        return hasAllRequiredFields() && Object.keys(errorMessages).length === 0;
    }

    const hasAllRequiredFields = () => {
        return request.dispensing_type !== undefined
            && request.dispensing_pressure?.value !== undefined
            && request.dispensing_mass?.value !== undefined
            && request.dispensing_pressure?.unit !== undefined
            && request.dispensing_mass?.unit !== undefined
            && request.vehicle_type !== undefined;
    }

    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_CONSUMER, { state: request })
        }
    }

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_INTAKE, { state: request })
    };




    const handleSelectChange = (
        _event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        const option = options.find(option => option.name === newValue);
        if (!option) return;
        console.log(option);


        handleChange(option.type, ['vehicle_type']);
        handleChange(option.data.kg, ['dispensing_mass']);
        handleChange(option.data.bar, ['dispensing_pressure']);
    }


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterDropDown = (option: any) => {
        if (option.type as RequestSchemaVehicleTypeEnum === RequestSchemaVehicleTypeEnum.Custom) {
            return true;
        } else if (request.dispensing_type === "VEHICLE" && option.type !== RequestSchemaVehicleTypeEnum.Tubetrailer) {
            return true;
        } else if (request.dispensing_type === "TUBETRAILER" && option.type === RequestSchemaVehicleTypeEnum.Tubetrailer) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <CalculatorInputLayout
            activeStep={1}
            onNext={goToNext}
            onBack={goToPrevious}
        >
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" fontSize={'lg'} pb="20px">
                    H2 User
                </Typography>
                <Typography fontSize={'sm'}>
                    Please select the hydrogen use you wish to build for below.
                </Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: "420px",
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    '& > *': { flex: 'auto' },
                }}
            >
                <RadioGroup
                    value={request?.dispensing_type ?? undefined}
                    onChange={(event) => handleChange(
                        event?.target?.value ?? '',
                        ['dispensing_type'])}
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
                {request.dispensing_type &&
                    <Box
                        sx={{
                            maxWidth: "420px",
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <FormControl error={!!errorMessages['dispensing_pressure.value']}>
                            <FormLabel>Consumption</FormLabel>
                            <Select
                                size="lg"
                                onChange={handleSelectChange}
                                defaultValue="Eric"
                                slotProps={{
                                    listbox: {
                                        sx: {
                                            '--ListItemDecorator-size': '48px',
                                        },
                                    },
                                }}
                                sx={{
                                    minWidth: 240,
                                }}
                            >
                                {options.filter(filterDropDown).map(data => (
                                    <Option
                                        key={data.name}
                                        value={data.name}
                                        label={data.name} // The appearance of the selected value will be a string
                                    >
                                        <ListItemDecorator>
                                            {data.icon}
                                        </ListItemDecorator>
                                        <Box component="span" sx={{ display: 'block' }}>
                                            <Typography component="span" level="title-sm">
                                                {data.name}
                                            </Typography>
                                            <Typography level="body-xs">{data.status}</Typography>
                                        </Box>
                                    </Option>
                                ))}
                            </Select>
                        </FormControl>
                        {request.vehicle_type === RequestSchemaVehicleTypeEnum.Custom && <>
                            <FormControl error={!!errorMessages['dispensing_pressure.value']}>
                                <FormLabel>Dispensing Pressure</FormLabel>
                                <Input
                                    name="dispensing_pressure"
                                    type="number"
                                    placeholder="Placeholder"
                                    size="lg"
                                    sx={{ width: "290px" }}
                                    value={request?.dispensing_pressure?.value ?? undefined}
                                    onChange={(event) => handleChange(
                                        parseFloat(event.target.value),
                                        ['dispensing_pressure', 'value'])}
                                />
                                {!!errorMessages['dispensing_pressure.value'] &&
                                    <FormHelperText>
                                        <InfoOutlined />
                                        {errorMessages['dispensing_pressure.value']}
                                    </FormHelperText>
                                }
                            </FormControl>
                            <FormControl>
                                <FormLabel>Units</FormLabel>
                                <Select size="lg"
                                    value={request?.dispensing_pressure?.unit ?? ''}
                                    onChange={(_e, value) => handleChange(value ?? '', ['dispensing_pressure', 'unit'])}
                                    sx={{
                                        width: "110px",
                                    }}
                                >
                                    {Object.entries(Pressure).map(([key, value]) => (
                                        <Option key={key} value={value}>
                                            {value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl error={!!errorMessages['dispensing_mass.value']}>
                                <FormLabel>Dispensing Mass</FormLabel>
                                <Input
                                    name="dispensing_mass"
                                    type="number"
                                    placeholder="Placeholder"
                                    size="lg"
                                    value={request?.dispensing_mass?.value ?? undefined}
                                    onChange={(event) => handleChange(
                                        parseFloat(event.target.value),
                                        ['dispensing_mass', 'value'])}
                                />
                                {!!errorMessages['dispensing_mass.value'] &&
                                    <FormHelperText>
                                        <InfoOutlined />
                                        {errorMessages['dispensing_mass.value']}
                                    </FormHelperText>
                                }
                            </FormControl>
                            <FormControl>
                                <FormLabel>Units</FormLabel>
                                <Select size="lg"
                                    value={request?.dispensing_mass?.unit ?? ''}
                                    onChange={(_e, value) => handleChange(value ?? '', ['dispensing_mass', 'unit'])}
                                    sx={{
                                        width: "90px",
                                    }}
                                >
                                    {Object.entries(Mass).map(([key, value]) => (
                                        <Option key={key} value={value}>
                                            {value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormControl>
                        </>
                        }
                    </Box>
                }
            </Box>
        </CalculatorInputLayout>
    );
}

export default CalculatorPlantType;