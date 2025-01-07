import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
    id: number
    name: string
    fields: string[]
}

interface ProgressStepsProps {
    steps: readonly Step[]
    currentStep: number
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
    return (
        <nav aria-label="Progress" className="mb-8">
            <ol role="list" className="flex items-center">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={cn(
                        stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                        'relative'
                    )}>
                        {step.id < currentStep ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-green-600" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green-600 hover:bg-green-900">
                                    <Check className="h-5 w-5 text-white" aria-hidden="true" />
                                </div>
                            </>
                        ) : step.id === currentStep ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white">
                                    <span className="text-green-600 text-sm font-semibold">{step.id}</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                                    <span className="text-gray-500 text-sm">{step.id}</span>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
} 