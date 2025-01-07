"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { z } from "zod"

import { Card } from "@/components/ui/card"
import { registrationSchema, type RegistrationFormData } from "@/lib/validations/registration"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { AboutSection } from "@/components/registration/about-section"
import { ProgressSteps } from "@/components/registration/progress-steps"
import { StepHeader } from "@/components/registration/step-header"
import { NavigationButtons } from "@/components/registration/navigation-buttons"
import { RegistrationForm } from "@/components/registration/registration-form"

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
    "Renewable Energy Systems"
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

    const handleNextStep = async (data: RegistrationFormData) => {
        // Get current step fields
        const currentFields = steps[currentStep - 1].fields
        const stepData = Object.fromEntries(
            Object.entries(data).filter(([key]) => currentFields.includes(key as RegistrationField))
        ) as Pick<RegistrationFormData, keyof RegistrationFormData>

        try {
            // Create a partial schema for current step fields
            const stepSchema = z.object(
                currentFields.reduce<z.ZodRawShape>((acc, field) => ({
                    ...acc,
                    [field]: registrationSchema.shape[field]
                }), {})
            )

            // Validate only the current step's data
            await stepSchema.parseAsync(stepData)

            // Save the current step's data
            form.reset({ ...form.getValues(), ...stepData }, { keepValues: true })

            // If validation passes, move to next step
            setCurrentStep(prev => prev + 1)
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
            console.error(error)
        }
    }
    const goToNextStep = () => {
        setCurrentStep(prev => prev + 1)
    }
    async function onSubmit() {
        try {
            // Validate entire form before final submission
            const formData = form.getValues()
            await registrationSchema.parseAsync(formData)

            setIsLoading(true)
            await addDoc(collection(db, "registrations"), {
                ...formData,
                createdAt: new Date().toISOString(),
            })
            toast.success("Registration submitted successfully")
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
            toast.error("Please fill in all required fields correctly")
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handlePreviousStep = () => {
        setCurrentStep(prev => prev - 1)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Card className="container max-w-4xl mx-auto">
                <div className="p-8">
                    <AboutSection />
                    <ProgressSteps steps={steps} currentStep={currentStep} />
                    <StepHeader
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        stepName={steps[currentStep - 1].name}
                    />
                    <form onSubmit={form.handleSubmit(currentStep === steps.length ? onSubmit : handleNextStep)}>
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
                            onNext={goToNextStep}
                        />
                    </form>
                </div>
            </Card>
        </div>
    )
} 