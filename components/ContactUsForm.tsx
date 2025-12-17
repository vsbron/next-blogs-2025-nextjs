"use client";
import { useForm } from "react-hook-form";

import { ButtonsContainer } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import FormGroup from "@/components/form/FormGroup";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from "@/utils/schemas";
import { toast } from "sonner";

type ContactUsFormValues = {
  name: string;
  email: string;
  message: string;
};

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

  // Form submit handler
  const onSubmit = (data: ContactUsFormValues) => {
    toast("Message sent");
  };

  // Returned JSX
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-6 !w-160">
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
            className="resize-none h-30"
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
        <ButtonsContainer className="mt-0">
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
