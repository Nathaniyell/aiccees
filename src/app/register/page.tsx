"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

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

    async function onSubmit(data: RegistrationFormData) {
        try {
            setIsLoading(true)

            // Add to Firestore
            await addDoc(collection(db, "registrations"), {
                ...data,
                createdAt: new Date().toISOString(),
            })

            toast.success("Registration submitted successfully")
            router.push("/thank-you") // Create this page to show success message
        } catch (error) {
            toast.error("Something went wrong. Please try again.")
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="container max-w-2xl py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">About AICCEES</h1>
                <p className="mt-2 text-gray-600">
                    The Africa International Conference on Clean Energy and Energy Storage (AICCEES) brings together researchers and industry experts to share knowledge and discuss innovative solutions for the clean energy transition in Africa. Under the theme &quot;Empowering Africa&apos;s Sustainable Energy Future&quot;, AICCEES 2024 will run 26-27 September and be a hybrid event, part-online and part-in-person at the University of Port Harcourt.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Surname <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your surname" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your first name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email address <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email address" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Phone number <span className="text-red-500">*</span></FormLabel>
                                <FormDescription>with Country Code e.g +221......</FormDescription>
                                <FormControl>
                                    <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Organization/Company <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your organization" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country <span className="text-red-500">*</span></FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your country" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {/* Add country list items here */}
                                        <SelectItem value="nigeria">Nigeria</SelectItem>
                                        <SelectItem value="ghana">Ghana</SelectItem>
                                        <SelectItem value="kenya">Kenya</SelectItem>
                                        {/* Add more countries */}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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
                                                    <RadioGroupItem value={type} />
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
                                                                onCheckedChange={(checked: boolean) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, area])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== area
                                                                            )
                                                                        )
                                                                }}
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
                                                    <RadioGroupItem value={source} />
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
                                                    <RadioGroupItem value={preference} />
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

                    <FormField
                        control={form.control}
                        name="privacyPolicy"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                        I acknowledge that this event is hybrid, and I will receive details for virtual sessions closer to the date. For in-person attendance, venue and logistics information will be provided. I confirm that I have read and understood the privacy policy <a href="https://drive.google.com/file/d/1S3dWvfSukizZceCQr3R4m-cknBAYx7Tb/view?usp=drive_link" className="text-primary underline" target="_blank" rel="noopener noreferrer">privacy policy</a> <span className="text-red-500">*</span>
                                    </FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </Form>
        </Card>
    )
} 