interface StepHeaderProps {
    currentStep: number
    totalSteps: number
    stepName: string
}

export function StepHeader({ currentStep, totalSteps, stepName }: StepHeaderProps) {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-700">
                {stepName}
            </h2>
            <p className="mt-2 text-gray-600">
                Step {currentStep} of {totalSteps}
            </p>
        </div>
    )
} 