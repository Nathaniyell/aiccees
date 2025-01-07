import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavigationButtonsProps {
    currentStep: number
    totalSteps: number
    isLoading: boolean
    onPrevious: () => void
}

export function NavigationButtons({ currentStep, totalSteps, isLoading, onPrevious }: NavigationButtonsProps) {
    return (
        <div className="flex justify-between pt-6">
            {currentStep > 1 && (
                <Button
                    type="button"
                    variant="outline"
                    onClick={onPrevious}
                    className="border-green-600 text-green-600 hover:bg-green-50"
                >
                    <ArrowLeftIcon className="mr-2" />
                    Previous Step
                </Button>
            )}
            <Button
                type="submit"
                className={cn(
                    "bg-green-600 hover:bg-green-700 text-white",
                    currentStep === 1 && "ml-auto"
                )}
                disabled={isLoading}
            >
                {isLoading
                    ? "Submitting..."
                    : currentStep === totalSteps
                        ? (
                            <>
                                Submit Registration
                                <ArrowRightIcon className="ml-2" />
                            </>
                        )
                        : (
                            <>
                                Next Step
                                <ArrowRightIcon className="ml-2" />
                            </>
                        )
                }
            </Button>
        </div>
    )
} 