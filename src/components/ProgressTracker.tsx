import { Check } from "@mui/icons-material"
import { Stepper, Step, StepIndicator } from "@mui/joy"


interface ProgressTrackerProps {
    activeStep: number
}

interface CalculationStep {
    id: number,
    name: string,


}

const steps: CalculationStep[] = [
    {
        "id": 1,
        "name": "Inlet"
    },
    {
        "id": 2,
        "name": "Fuel station"
    },
    {
        "id": 3,
        "name": "Consumer"
    },
    {
        "id": 4,
        "name": "Sales"
    },
    {
        "id": 5,
        "name": "Final Step"
    }
]

const ProgressTracker = (props: ProgressTrackerProps) => {
    const { activeStep } = props;
    return (
        <Stepper sx={{ width: '100%' }}>
            {steps.map((step, index) => (
                <Step
                    key={step.id}
                    orientation="vertical"
                    indicator={
                        <StepIndicator
                            variant={activeStep <= index - 1 ? 'soft' : 'solid'}
                            color={activeStep < index ? 'neutral' : 'primary'}
                        >
                            {activeStep <= index ? index + 1 : <Check />}
                        </StepIndicator>
                    }
                    sx={{
                        '&::after': {
                            ...(activeStep > index &&
                                index !== 2 && { bgcolor: 'primary.solidBg' }),
                        },
                    }}
                >
                    {step.name}
                </Step>
            ))}
        </Stepper>
    );

}

export default ProgressTracker