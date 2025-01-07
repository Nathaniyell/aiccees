"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registrationSchema, type RegistrationFormData } from "@/lib/validations/registration"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Card } from "@/components/ui/card"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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

    async function onSubmit(data: RegistrationFormData) {
        if (currentStep < steps.length) {
            // Get current step fields
            const currentFields = steps[currentStep - 1].fields
            const stepData = Object.fromEntries(
                Object.entries(data).filter(([key]) => currentFields.includes(key as RegistrationField))
            )

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
        } else {
            try {
                // Validate entire form before final submission
                await registrationSchema.parseAsync(data)

                setIsLoading(true)
                await addDoc(collection(db, "registrations"), {
                    ...data,
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
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Card className="container max-w-4xl mx-auto">
                <div className="p-8">
                    <div className="mb-8 space-y-4">
                        <h1 className="text-3xl font-bold text-green-700">About AICCEES</h1>
                        <div className="h-1 w-20 bg-red-500"></div>
                        <p className="mt-2 text-gray-600">
                            The Africa International Conference on Clean Energy and Energy Storage (AICCEES) brings together researchers and industry experts to share knowledge and discuss innovative solutions for the clean energy transition in Africa. Under the theme &quot;Empowering Africa&apos;s Sustainable Energy Future&quot;, AICCEES 2024 will run 26-27 September and be a hybrid event, part-online and part-in-person at the University of Port Harcourt.
                        </p>
                    </div>

                    {/* Progress Steps */}
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

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-green-700">
                            {steps[currentStep - 1].name}
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Step {currentStep} of {steps.length}
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="rounded-lg p-6 shadow-sm border space-y-6">
                                {currentStepFields.includes('title') && (
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Title <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your title"
                                                        {...field}
                                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('surname') && (
                                    <FormField
                                        control={form.control}
                                        name="surname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Surname <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your surname"
                                                        {...field}
                                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('firstName') && (
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your first name"
                                                        {...field}
                                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('email') && (
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email address <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your email address"
                                                        type="email"
                                                        {...field}
                                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('phoneNumber') && (
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Phone number <span className="text-red-500">*</span></FormLabel>
                                                <FormDescription>with Country Code e.g +221......</FormDescription>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your phone number"
                                                        {...field}
                                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('country') && (
                                    <FormField
                                        control={form.control}
                                        name="country"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Country <span className="text-red-500">*</span></FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="border-green-200 focus:border-green-500 focus:ring-green-500">
                                                            <SelectValue placeholder="Select your country" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="nigeria">Nigeria</SelectItem>
                                                        <SelectItem value="ghana">Ghana</SelectItem>
                                                        <SelectItem value="kenya">Kenya</SelectItem>
                                                        <SelectItem value="south-africa">South Africa</SelectItem>
                                                        <SelectItem value="ethiopia">Ethiopia</SelectItem>
                                                        <SelectItem value="tanzania">Tanzania</SelectItem>
                                                        <SelectItem value="uganda">Uganda</SelectItem>
                                                        <SelectItem value="rwanda">Rwanda</SelectItem>
                                                        <SelectItem value="senegal">Senegal</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('organization') && (
                                    <FormField
                                        control={form.control}
                                        name="organization"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Organization/Company <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your organization"
                                                        {...field}
                                                        className="border-green-200 focus:border-green-500 focus:ring-green-500"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('registrationType') && (
                                    <FormField
                                        control={form.control}
                                        name="registrationType"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Registration Type <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        {registrationTypes.map((type) => (
                                                            <FormItem className="flex items-center space-x-3 space-y-0" key={type}>
                                                                <FormControl>
                                                                    <RadioGroupItem value={type} className="border-green-200 text-green-600" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    {type}
                                                                </FormLabel>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('areasOfInterest') && (
                                    <FormField
                                        control={form.control}
                                        name="areasOfInterest"
                                        render={() => (
                                            <FormItem>
                                                <FormLabel>Area of Interest <span className="text-red-500">*</span></FormLabel>
                                                <FormDescription>Check all that apply</FormDescription>
                                                <div className="space-y-2">
                                                    {areasOfInterest.map((area) => (
                                                        <FormField
                                                            key={area}
                                                            control={form.control}
                                                            name="areasOfInterest"
                                                            render={({ field }) => {
                                                                return (
                                                                    <FormItem
                                                                        key={area}
                                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                                    >
                                                                        <FormControl>
                                                                            <Checkbox
                                                                                checked={field.value?.includes(area)}
                                                                                onCheckedChange={(checked) => {
                                                                                    return checked
                                                                                        ? field.onChange([...field.value, area])
                                                                                        : field.onChange(
                                                                                            field.value?.filter(
                                                                                                (value) => value !== area
                                                                                            )
                                                                                        )
                                                                                }}
                                                                                className="border-green-200 text-green-600"
                                                                            />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal">
                                                                            {area}
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                )
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('howDidYouHear') && (
                                    <FormField
                                        control={form.control}
                                        name="howDidYouHear"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>How did you hear about the conference? <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        {howDidYouHear.map((source) => (
                                                            <FormItem className="flex items-center space-x-3 space-y-0" key={source}>
                                                                <FormControl>
                                                                    <RadioGroupItem value={source} className="border-green-200 text-green-600" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    {source}
                                                                </FormLabel>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('contactPreference') && (
                                    <FormField
                                        control={form.control}
                                        name="contactPreference"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>How would you like to receive additional information about the conference? <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        {contactPreferences.map((preference) => (
                                                            <FormItem className="flex items-center space-x-3 space-y-0" key={preference}>
                                                                <FormControl>
                                                                    <RadioGroupItem value={preference} className="border-green-200 text-green-600" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    {preference}
                                                                </FormLabel>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {currentStepFields.includes('privacyPolicy') && (
                                    <FormField
                                        control={form.control}
                                        name="privacyPolicy"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        className="border-green-200 text-green-600"
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I acknowledge that this event is hybrid, and I will receive details for virtual sessions closer to the date. For in-person attendance, venue and logistics information will be provided. I confirm that I have read and understood the <a href="https://drive.google.com/file/d/1S3dWvfSukizZceCQr3R4m-cknBAYx7Tb/view?usp=drive_link" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">privacy policy</a> <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}
                            </div>

                            <div className="flex justify-between pt-6">
                                {currentStep > 1 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setCurrentStep(prev => prev - 1)}
                                        className="border-green-600 text-green-600 hover:bg-green-50"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
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
                                        : currentStep === steps.length
                                            ? (
                                                <>
                                                    Submit Registration
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="ml-2"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="m12 5 7 7-7 7" />
                                                    </svg>
                                                </>
                                            )
                                            : (
                                                <>
                                                    Next Step
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="ml-2"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="m12 5 7 7-7 7" />
                                                    </svg>
                                                </>
                                            )
                                    }
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </Card>
        </div>
    )
} 