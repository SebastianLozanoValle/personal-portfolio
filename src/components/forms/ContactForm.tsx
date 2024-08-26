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
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  otherCheckbox: z.boolean(), // Added otherCheckbox field
  otherCheckboxValue: z.string().optional(), // Added otherCheckboxValue field
  message: z.string().min(1, { message: "Message is required" }),
  aditionalInfo: z.string().optional(),
});


export type FormSchemaType = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullname: "",
      phone: "",
      option: "",
      checkboxes: [],
      otherCheckbox: false, // Initialize otherCheckbox field
      otherCheckboxValue: "", // Initialize otherCheckboxValue field
      message: "",
      aditionalInfo: "",
    },
  });

  const { handleSubmit, control, watch, resetField, reset, setValue } = form;
  const selectedOption = watch("option");
  const otherCheckbox = watch("otherCheckbox");
  const otherCheckboxValue = watch("otherCheckboxValue");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      toast({
        title: "Sending...",
        className: "bg-blue-500 rounded-lg",
      });

      const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
      });

      if (!response.ok) {
          throw new Error('Error en el envío del correo');
      }

      const result = await response.json();
      toast({
        title: "Form Submitted",
        className: "bg-slate-100 rounded-lg dark:bg-slate-800",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 overflow-x-hidden">
            <code className="text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
      reset();
      setIsSubmitting(false);
    } catch (error: any) {
      toast({
        title: "Error Sending Form",
        className: "bg-slate-100 rounded-lg dark:bg-slate-800",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 overflow-x-hidden">
            <code className="text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!otherCheckbox) {
      setValue('otherCheckboxValue', '');
    }
  }, [otherCheckbox, setValue]);

  useEffect(() => {
    // Reset the checkboxes when the option changes
    resetField('checkboxes');
    setValue('otherCheckboxValue', '');
  }, [selectedOption, resetField]);

  const { t } = useTranslation();

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
                  <FormLabel>{t("contact-form.email.label")}</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Input placeholder={t("contact-form.email.placeholder")} {...field} />
                  </FormControl>
                  <FormDescription>{t("contact-form.email.description")}</FormDescription>
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
                  <FormLabel>{t("contact-form.fullname.label")}</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Input placeholder={t("contact-form.fullname.placeholder")} {...field} />
                  </FormControl>
                  <FormDescription>{t("contact-form.fullname.description")}</FormDescription>
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
                  <FormLabel>{t("contact-form.phone.label")}</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Input placeholder={t("contact-form.phone.placeholder")} {...field} />
                  </FormControl>
                  <FormDescription>{t("contact-form.phone.description")}</FormDescription>
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
                  <FormLabel>{t("contact-form.option.label")}</FormLabel>
                  <FormControl className="bg-background dark:bg-pseudoblack">
                    <Controller
                      control={control}
                      name="option"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="bg-background dark:bg-pseudoblack">
                            <span>{field.value || t("contact-form.option.placeholder")}</span>
                          </SelectTrigger>
                          <SelectContent className="bg-background dark:bg-pseudoblack">
                            <SelectItem value="customer">{t("contact-form.option.options.customer")}</SelectItem>
                            <SelectItem value="recruiter">{t("contact-form.option.options.recruiter")}</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormDescription>{t("contact-form.option.description")}</FormDescription>
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
                <FormLabel>{t("contact-form.checkboxes.customer.label")}</FormLabel>
                <FormControl>
                  <Controller
                    control={control}
                    name="checkboxes"
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-4 items-start pt-2">
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
                          <label htmlFor="web_app" className="text-sm font-medium">{t("contact-form.checkboxes.customer.options.web_app")}</label>
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
                          <label htmlFor="landing_page" className="text-sm font-medium">{t("contact-form.checkboxes.customer.options.landing_page")}</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="e_commerce"
                            checked={field.value.includes("e_commerce")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("e_commerce")
                                ? field.value.filter(v => v !== "e_commerce")
                                : [...field.value, "e_commerce"];
                              field.onChange(newValue);
                            }}
                          />
                          <label htmlFor="e_commerce" className="text-sm font-medium">{t("contact-form.checkboxes.customer.options.e_commerce")}</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="other"
                            checked={field.value.includes("other")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("other")
                                ? field.value.filter(v => v !== "other")
                                : [...field.value, "other"];
                              field.onChange(newValue);
                              if (!newValue.includes("other")) {
                                resetField("otherCheckboxValue");
                              }
                            }}
                          />
                          <label htmlFor="other" className="text-sm font-medium">{t("contact-form.checkboxes.customer.options.other")}</label>
                        </div>
                        {field.value.includes("other") && (
                          <FormField
                            control={control}
                            name="otherCheckboxValue"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl className="bg-background dark:bg-pseudoblack">
                                  <Input
                                    placeholder={t("contact-form.checkboxes.customer.other.placeholder")}
                                    {...field}
                                    onChange={(e) => {
                                      setValue('otherCheckboxValue', e.target.value);
                                    }}
                                  />
                                </FormControl>
                                <FormDescription>{t("contact-form.checkboxes.customer.other.description")}</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                      </div>
                    )}
                  />
                </FormControl>
                <FormDescription>{t("contact-form.checkboxes.customer.description")}</FormDescription>
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
                <FormLabel>{t("contact-form.checkboxes.recruiter.label")}</FormLabel>
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
                          <label htmlFor="front-end" className="text-sm font-medium">{t("contact-form.checkboxes.recruiter.options.front-end")}</label>
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
                          <label htmlFor="back-end" className="text-sm font-medium">{t("contact-form.checkboxes.recruiter.options.back-end")}</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="full-stack"
                            checked={field.value.includes("full-stack")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("full-stack")
                                ? field.value.filter(v => v !== "full-stack")
                                : [...field.value, "full-stack"];
                              field.onChange(newValue);
                            }}
                          />
                          <label htmlFor="full-stack" className="text-sm font-medium">{t("contact-form.checkboxes.recruiter.options.full-stack")}</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="other"
                            checked={field.value.includes("other")}
                            onCheckedChange={() => {
                              const newValue = field.value.includes("other")
                                ? field.value.filter(v => v !== "other")
                                : [...field.value, "other"];
                              field.onChange(newValue);
                              if (!newValue.includes("other")) {
                                resetField("otherCheckboxValue");
                              }
                            }}
                          />
                          <label htmlFor="other" className="text-sm font-medium">{t("contact-form.checkboxes.recruiter.options.other")}</label>
                        </div>
                        {field.value.includes("other") && (
                          <FormField
                            control={control}
                            name="otherCheckboxValue"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl className="bg-background dark:bg-pseudoblack">
                                  <Input
                                    placeholder={t("contact-form.checkboxes.recruiter.other.placeholder")}
                                    {...field}
                                    onChange={(e) => {
                                      setValue('otherCheckboxValue', e.target.value);
                                    }}
                                  />
                                </FormControl>
                                <FormDescription>{t("contact-form.checkboxes.recruiter.other.description")}</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                      </div>
                    )}
                  />
                </FormControl>
                <FormDescription>{t("contact-form.checkboxes.recruiter.description")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}


        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact-form.message.label")}</FormLabel>
              <FormControl className="bg-background dark:bg-pseudoblack">
                <Textarea placeholder={t("contact-form.message.placeholder")} {...field} />
              </FormControl>
              <FormDescription>{t("contact-form.message.description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <FormField
          control={control}
          name="aditionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact-form.aditionalInfo.label")}</FormLabel>
              <FormControl className="bg-background dark:bg-pseudoblack">
                <Input placeholder={t("contact-form.aditionalInfo.placeholder")} {...field} />
              </FormControl>
              <FormDescription>{t("contact-form.aditionalInfo.description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  
        {
          !isSubmitting && <Button type="submit" className="bg-gradient-to-r relative z-50 text-pseudoblack hover:text-background transition-all duration-500">{t("contact-form.submit.text")}</Button>
        }
      </form>
    </Form>
  );
  
}