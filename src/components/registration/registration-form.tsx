"use client"

import { UseFormReturn } from "react-hook-form"
import { RegistrationFormData } from "@/lib/validations/registration"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"

interface RegistrationFormProps {
    form: UseFormReturn<RegistrationFormData>
    currentStepFields: (keyof RegistrationFormData)[]
    onSubmit: (data: RegistrationFormData) => Promise<void>
    registrationTypes: readonly string[]
    areasOfInterest: readonly string[]
    howDidYouHear: readonly string[]
    contactPreferences: readonly string[]
}

interface Country {
    name: { common: string }
    cca2: string
}

export function RegistrationForm({
    form,
    currentStepFields,
    registrationTypes,
    areasOfInterest,
    howDidYouHear,
    contactPreferences
}: RegistrationFormProps) {
    const [countries, setCountries] = useState<Country[]>([])

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all')
                const data = await response.json()
                const sortedCountries = data
                    .map((country: Country) => ({
                        name: country.name,
                        cca2: country.cca2
                    }))
                    .sort((a: Country, b: Country) =>
                        a.name.common.localeCompare(b.name.common)
                    )
                setCountries(sortedCountries)
            } catch (error) {
                console.error('Error fetching countries:', error)
            }
        }

        fetchCountries()
    }, [])

    return (
        <Form {...form}>
            <div className="rounded-lg p-4 shadow-sm border space-y-6">
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
                                        className="border-green-400 ring-offset-0 focus-visible:ring-0 focus:border-green-700"
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
                                        className="border-green-400 ring-offset-0 focus-visible:ring-0 focus:border-green-700"
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
                                        className="border-green-400 ring-offset-0 focus-visible:ring-0 focus:border-green-700"
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
                                        className="border-green-400 ring-offset-0 focus-visible:ring-0 focus:border-green-700"
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
                                        className="border-green-400 ring-offset-0 focus-visible:ring-0 focus:border-green-700"
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
                                        <SelectTrigger className="border-green-200 focus:border-green-500 ">
                                            <SelectValue placeholder="Select your country" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {countries.map((country) => (
                                            <SelectItem
                                                key={country.cca2}
                                                value={country.name.common}
                                            >
                                                {country.name.common}
                                            </SelectItem>
                                        ))}
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
                                        className="border-green-400 ring-offset-0 focus-visible:ring-0 focus:border-green-700"
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
                                                    <RadioGroupItem value={type} className="border-green-700 text-green-600" />
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
                                                                className="border-green-700 text-green-600"
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
                                                    <RadioGroupItem value={source} className="border-green-700 text-green-600" />
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
                                                    <RadioGroupItem value={preference} className="border-green-700 text-green-600" />
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
                                        className="border-green-700 text-green-600"
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                        I acknowledge that this event is hybrid, and I will receive details for virtual sessions closer to the date. For in-person attendance, venue and logistics information will be provided. I confirm that I have read and understood the <a href="https://docs.google.com/document/d/1vGj2MvQZk-rigl6zlAEZW-J_mRo19fp_/edit?usp=drive_link&ouid=103583805913807710533&rtpof=true&sd=true" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">privacy policy</a> <span className="text-red-500">*</span>
                                    </FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
            </div>
        </Form>
    )
} 