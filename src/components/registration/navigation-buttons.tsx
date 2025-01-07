import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationButtonsProps {
    currentStep: number
    totalSteps: number
    isLoading: boolean
    onPrevious: () => void
    onNext: (e: React.MouseEvent) => void
    onSubmit: (e: React.MouseEvent) => void
}

export function NavigationButtons({
    currentStep,
    totalSteps,
    isLoading,
    onPrevious,
    onNext,
    onSubmit
}: NavigationButtonsProps) {
    return (
        <div className="flex justify-between pt-6">
            {currentStep > 1 && (
                <Button
                    type="button"
                    onClick={onPrevious}
                    variant="outline"
                    className="border-green-600 text-green-600"
                >
                    <ArrowLeftIcon className="mr-2" />
                    Previous Step
                </Button>
            )}

            {currentStep < totalSteps ? (
                <Button
                    type="button"
                    onClick={onNext}
                    className="bg-green-600 hover:bg-green-700 text-white ml-auto"
                >
                    Next Step
                    <ArrowRightIcon className="ml-2" />
                </Button>
            ) : (
                <Button
                    type="button"
                    onClick={onSubmit}
                    disabled={isLoading}
                    className="bg-green-600 hover:bg-green-700 text-white ml-auto"
                >
                    {isLoading ? (
                        <>Processing...</>
                    ) : (
                        <>
                            Submit Registration
                            <ArrowRightIcon className="ml-2" />
                        </>
                    )}
                </Button>
            )}
        </div>
    )
} 