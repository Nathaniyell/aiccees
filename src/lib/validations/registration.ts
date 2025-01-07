import * as z from "zod"

export const registrationSchema = z.object({
    title: z.string().min(1, "Title is required"),
    surname: z.string().min(1, "Surname is required"),
    firstName: z.string().min(1, "First name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone number is required")
        .regex(/^\+[0-9]{1,}/, "Phone number must start with country code (e.g., +221)"),
    organization: z.string().min(1, "Organization is required"),
    country: z.string().min(1, "Country is required"),
    registrationType: z.enum([
        "Academic/Researcher",
        "Industry Professional",
        "Government Official",
        "Exhibitor",
        "Visitor",
        "Volunteer",
        "Student",
        "Others"
    ], {
        required_error: "Please select a registration type",
    }),
    areasOfInterest: z.array(z.string()).min(1, "Please select at least one area of interest"),
    howDidYouHear: z.enum([
        "Tovero website",
        "From our partners",
        "Email newsletter",
        "LinkedIn",
        "Other Social media platforms (Facebook, Twitter etc)"
    ], {
        required_error: "Please select how you heard about the conference",
    }),
    contactPreference: z.enum(["Phone call", "Email"], {
        required_error: "Please select how you would like to receive additional information",
    }),
    privacyPolicy: z.boolean().refine((val) => val === true, {
        message: "You must accept the privacy policy",
    }),
})

export type RegistrationFormData = z.infer<typeof registrationSchema> 