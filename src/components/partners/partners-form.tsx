"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { registerPartner } from "@/app/partners/actions"
import { useState } from "react"
import { toast } from "sonner"

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  website: z.string().url({
    message: "Please enter a valid URL.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  partnershipType: z.enum(["technology", "service", "research", "other"], {
    required_error: "Please select a partnership type.",
  }),
  customPartnershipType: z.string().optional().refine((val) => {
    if (val === "other") {
      return val && val.length >= 2;
    }
    return true;
  }, "Please specify the partnership type"),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function PartnerForm() {
  const [isPending, setIsPending] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      website: "",
      contactName: "",
      email: "",
      message: "",
      partnershipType: undefined,
      customPartnershipType: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsPending(true)
      await console.log(values)
      form.reset()
      toast.success("Partnership request submitted successfully!")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="partnershipType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a partnership type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="technology">Technology Partner</SelectItem>
                  <SelectItem value="service">Service Partner</SelectItem>
                  <SelectItem value="research">Research Partner</SelectItem>
                  <SelectItem value="other">Other (please specify)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("partnershipType") === "other" && (
          <FormField
            control={form.control}
            name="customPartnershipType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specify Partnership Type</FormLabel>
                <FormControl>
                  <Input placeholder="Please specify your partnership type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your company and why you'd like to partner with us..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         </div>

        <div className="flex justify-center">
          <Button type="submit" className="sm:w-auto bg-green-700 text-white" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Partnership Request"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

