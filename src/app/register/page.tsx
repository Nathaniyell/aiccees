"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { z } from "zod"

import { registrationSchema, type RegistrationFormData } from "@/lib/validations/registration"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { AboutSection } from "@/components/registration/about-section"
import { ProgressSteps } from "@/components/registration/progress-steps"
import { StepHeader } from "@/components/registration/step-header"
import { NavigationButtons } from "@/components/registration/navigation-buttons"
import { RegistrationForm } from "@/components/registration/registration-form"
import { useToast } from "@/hooks/use-toast"


type RegistrationField = keyof RegistrationFormData

const steps = [
    {
        id: 1,
        name: 'Personal Information',
        fields: ['title', 'surname', 'firstName'] as RegistrationField[]
    },
    {
        id: 2,
        name: 'Contact Details',
        fields: ['email', 'phoneNumber', 'country'] as RegistrationField[]
    },
    {
        id: 3,
        name: 'Professional Information',
        fields: ['organization', 'registrationType'] as RegistrationField[]
    },
    {
        id: 4,
        name: 'Conference Details',
        fields: ['areasOfInterest', 'howDidYouHear', 'contactPreference'] as RegistrationField[]
    },
    {
        id: 5,
        name: 'Confirmation',
        fields: ['privacyPolicy'] as RegistrationField[]
    }
] as const

const registrationTypes = [
    "Academic/Researcher",
    "Industry Professional",
    "Government Official",
    "Exhibitor",
    "Visitor",
    "Volunteer",
    "Student",
    "Others"
] as const

const areasOfInterest = [
    "Energy Storage and Sustainable Battery Manufacturing in Africa",
    "Hydrogen Development in Africa",
    "Renewable Energy Systems",
    "Energy Supply & Energy Access in Africa",
    "Mini - grids & Hydropower Development",
    "Clean Mobility",
    "Energy Transition Finance",
    "Waste to Energy",
    "Energy Efficiency & Smart Systems",
] as const

const howDidYouHear = [
    "Tovero website",
    "From our partners",
    "Email newsletter",
    "LinkedIn",
    "Other Social media platforms (Facebook, Twitter etc)"
] as const

const contactPreferences = [
    "Phone call",
    "Email"
] as const

export default function RegistrationPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const { toast } = useToast()

    const form = useForm<RegistrationFormData>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            title: "",
            surname: "",
            firstName: "",
            email: "",
            phoneNumber: "",
            organization: "",
            country: "",
            registrationType: undefined,
            areasOfInterest: [],
            howDidYouHear: undefined,
            contactPreference: undefined,
            privacyPolicy: false,
        },
    })

    const currentStepFields = steps.find(step => step.id === currentStep)?.fields || []

    const handleNextStep = async (e: React.MouseEvent) => {
        // Prevent default form submission
        e.preventDefault()

        const currentFields = steps[currentStep - 1].fields
        const formData = form.getValues()

        try {
            form.clearErrors()

            const stepData = Object.fromEntries(
                Object.entries(formData).filter(([key]) =>
                    currentFields.includes(key as RegistrationField)
                )
            )

            const stepSchema = z.object(
                currentFields.reduce<z.ZodRawShape>((acc, field) => ({
                    ...acc,
                    [field]: registrationSchema.shape[field]
                }), {})
            )

            const validatedData = await stepSchema.parseAsync(stepData)
            console.log('Validation passed:', validatedData)

            // If we're on the last step, submit the form
            if (currentStep === steps.length) {
                await onSubmit()
            } else {
                // Otherwise, move to next step
                setCurrentStep(currentStep + 1)
            }
        } catch (error) {
            console.error('Validation error:', error)
            if (error instanceof z.ZodError) {
                error.errors.forEach((err) => {
                    if (err.path) {
                        form.setError(err.path[0] as RegistrationField, {
                            type: 'manual',
                            message: err.message,
                        })
                    }
                })
            }
        }
    }

    const onSubmit = async () => {
        try {
            // Validate entire form before final submission
            const formData = form.getValues()
            await registrationSchema.parseAsync(formData)

            setIsLoading(true)
            await addDoc(collection(db, "registrations"), {
                ...formData,
                createdAt: new Date().toISOString(),
            })
            toast({
                title: "Registration submitted successfully",
                variant: "success",
            })
            router.push("/thank-you")
        } catch (error) {
            if (error instanceof z.ZodError) {
                error.errors.forEach((err) => {
                    if (err.path) {
                        form.setError(err.path[0] as RegistrationField, {
                            type: 'manual',
                            message: err.message,
                        })
                    }
                })
            }
            toast({
                title: "Please fill in all required fields correctly",
                variant: "destructive",
            })
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handlePreviousStep = () => {
        setCurrentStep(prev => prev - 1)
    }

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()

        try {
            // Validate entire form before submission
            const formData = form.getValues()
            await registrationSchema.parseAsync(formData)

            setIsLoading(true)
            await addDoc(collection(db, "registrations"), {
                ...formData,
                createdAt: new Date().toISOString(),
            })
            toast({
                title: "Registration submitted successfully",
                variant: "success",
            })
            router.push("/")
        } catch (error) {
            if (error instanceof z.ZodError) {
                error.errors.forEach((err) => {
                    if (err.path) {
                        form.setError(err.path[0] as RegistrationField, {
                            type: 'manual',
                            message: err.message,
                        })
                    }
                })
                toast({
                    title: "Please fill in all required fields correctly",
                    variant: "destructive",
                })
            } else {
                toast({
                    title: "An error occurred while submitting the form",
                    variant: "destructive",
                })
            }
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-0">
            <div className="container max-w-4xl mx-auto">
                <div className="p-8">
                    <AboutSection />
                    <ProgressSteps steps={steps} currentStep={currentStep} />
                    <StepHeader
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        stepName={steps[currentStep - 1].name}
                    />
                    <form onSubmit={(e) => e.preventDefault()}>
                        <RegistrationForm
                            form={form}
                            currentStepFields={currentStepFields}
                            onSubmit={onSubmit}
                            registrationTypes={registrationTypes}
                            areasOfInterest={areasOfInterest}
                            howDidYouHear={howDidYouHear}
                            contactPreferences={contactPreferences}
                        />
                        <NavigationButtons
                            currentStep={currentStep}
                            totalSteps={steps.length}
                            isLoading={isLoading}
                            onPrevious={handlePreviousStep}
                            onNext={handleNextStep}
                            onSubmit={handleSubmit}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
} 