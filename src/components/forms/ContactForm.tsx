'use client'

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { optional, z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Email must be a valid email address",
  }),
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phone: z.string().min(1, { message: "Contact number is required" }).refine((value) => {
    return !!value.match(/^\+?[1-9]\d{1,14}$/);
  }, { message: "Invalid contact number format" }),
  option: z.string().nonempty({ message: "Please select an option" }),
  checkboxes: z.array(z.string()).min(1, { message: "You must select at least one checkbox" }),
  message: z.string().min(1, { message: "Message is required" }), // Added message field
  aditionalInfo: z.string().optional(), // Added message field
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullname: "",
      phone: "",
      option: "",
      checkboxes: [],
      message: "", // Initialize message field
      aditionalInfo: "", // Initialize message field
    },
  });

  const { handleSubmit, control, watch, resetField } = form;
  const selectedOption = watch("option");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Form Submitted",
      className: "bg-slate-100 rounded-lg dark:bg-slate-800",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 overflow-x-hidden">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  useEffect(() => {
    // Reset the checkboxes when the option changes
    resetField('checkboxes');
  }, [selectedOption, resetField]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-wrap gap-4">
          <div className="w-full lg:flex-1">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Input placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormDescription>Enter your email address so we can get back to you.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full lg:flex-1">
            <FormField
              control={control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>Providing your full name helps us address you properly.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="w-full lg:flex-1">
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Phone Number</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormDescription>Please provide a contact number in international format.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full lg:flex-1">
            <FormField
              control={control}
              name="option"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How can I assist you today?</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Controller
                      control={control}
                      name="option"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="bg-background dark:bg-pseudoblack">
                            <span>{field.value || "Select an option..."}</span>
                          </SelectTrigger>
                          <SelectContent className="bg-background dark:bg-pseudoblack">
                            <SelectItem value="customer">I have a project</SelectItem>
                            <SelectItem value="recruiter">I am a recruiter</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormDescription>Choose an option to reveal additional fields.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        
        {selectedOption === "customer" && (
          <FormField
            control={control}
            name="checkboxes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please select at least one service you are interested in.</FormLabel>
                <FormControl>
                  <Controller
                    control={control}
                    name="checkboxes"
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="web_app"
                            checked={field.value.includes("web_app")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("web_app")
                                ? field.value.filter(v => v !== "web_app")
                                : [...field.value, "web_app"];
                              field.onChange(newValue);
                            }}
                          />
                          <label htmlFor="web_app" className="text-sm font-medium">Web App</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="landing_page"
                            checked={field.value.includes("landing_page")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("landing_page")
                                ? field.value.filter(v => v !== "landing_page")
                                : [...field.value, "landing_page"];
                              field.onChange(newValue);
                            }}
                          />
                          <label htmlFor="landing_page" className="text-sm font-medium">Landing Page</label>
                        </div>
                      </div>
                    )}
                  />
                </FormControl>
                <FormDescription>Please select at least one checkbox to indicate the services you&apos;re interested in.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {selectedOption === "recruiter" && (
          <FormField
            control={control}
            name="checkboxes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please indicate at least one of the positions you are hiring for.</FormLabel>
                <FormControl>
                  <Controller
                    control={control}
                    name="checkboxes"
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="front-end"
                            checked={field.value.includes("front-end")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("front-end")
                                ? field.value.filter(v => v !== "front-end")
                                : [...field.value, "front-end"];
                              field.onChange(newValue);
                            }}
                          />
                          <label htmlFor="front-end" className="text-sm font-medium">Front-End Developer</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="back-end"
                            checked={field.value.includes("back-end")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("back-end")
                                ? field.value.filter(v => v !== "back-end")
                                : [...field.value, "back-end"];
                              field.onChange(newValue);
                            }}
                          />
                          <label htmlFor="back-end" className="text-sm font-medium">Back-End Developer</label>
                        </div>
                      </div>
                    )}
                  />
                </FormControl>
                <FormDescription>Please select at least one position you&apos;re hiring for.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <div className="flex flex-wrap gap-4">
          <div className="w-full lg:flex-1">
            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here"
                      className="resize-y bg-background dark:bg-pseudoblack"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Your message is required.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full lg:flex-1">
            <FormField
              control={control}
              name="aditionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any additional details you&apos;d like to provide?"
                      className="resize-y bg-background dark:bg-pseudoblack"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" className="bg-gradient-to-r relative z-50 text-pseudoblack hover:text-background transition-all duration-500">Submit</Button>
      </form>
    </Form>
  );
}