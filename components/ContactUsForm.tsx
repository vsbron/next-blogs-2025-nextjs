"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { ButtonsContainer } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import FormGroup from "@/components/form/FormGroup";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from "@/utils/schemas";
import { toast } from "sonner";

import { EMAILJS_PUBLIC_KEY } from "@/utils/constants";

// Form values type
type ContactUsFormValues = {
  name: string;
  email: string;
  message: string;
};

// The component
function ContactUsForm() {
  // Initiate form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsFormValues>({
    resolver: zodResolver(contactUsSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Get the router
  const router = useRouter();

  // Form submit handler
  const onSubmit = (data: ContactUsFormValues) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_VSCONTACT_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_VSCONTACT_TEMPLATE_ID as string,
        { name: data.name, email: data.email, message: data.message },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => router.push("/success"), // Redirect user to success page
        () => toast("Form was not sent due to error")
      );
  };

  // Returned JSX
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="flex flex-col gap-y-6">
        <FormInput
          id="name"
          placeholder="Enter your name"
          {...register("name")}
          disabled={isSubmitting}
          error={errors.name?.message}
        />
        <FormInput
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <FormGroup>
          <Label htmlFor="message" className="capitalize">
            Your message
          </Label>
          <Textarea
            id="message"
            className="resize-none h-30 bg-white"
            placeholder="Type your message"
            disabled={isSubmitting}
            {...register("message")}
          />
          {errors.message?.message && (
            <span className="text-primary text-sm">
              {errors.message.message}
            </span>
          )}
        </FormGroup>
        <ButtonsContainer className="mt-0 flex-row">
          <Button type="submit" size="lg" className="self-start">
            Send
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="self-start"
            type="reset"
          >
            Clear
          </Button>
        </ButtonsContainer>
      </div>
    </form>
  );
}

export default ContactUsForm;
