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
        "name": "H2 Supply"
    },
    {
        "id": 2,
        "name": "H2 user"
    },
    {
        "id": 3,
        "name": "Equipment"
    },
    {
        "id": 4,
        "name": "H2 Demand"
    },
    {
        "id": 5,
        "name": "Expert Mode"
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
                            ...(activeStep > index && { bgcolor: 'primary.solidBg' }),
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