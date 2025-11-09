import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, User, Building, Phone, MapPin, Briefcase, MessageSquare, Send, Loader2 } from "lucide-react";

const contactSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact person is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(1, "Location is required"),
  industry: z.string().min(1, "Industry is required"),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you as soon as possible.",
        });
        reset();
      } else {
        toast.error("Failed to send message", {
          description: result.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's discuss how we can help you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card shadow-elegant rounded-2xl p-8 md:p-10 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="flex items-center gap-2 text-foreground">
                <Building className="w-4 h-4 text-primary" />
                Company Name *
              </Label>
              <Input
                id="companyName"
                {...register("companyName")}
                placeholder="Your Company Name"
                className={errors.companyName ? "border-destructive" : ""}
              />
              {errors.companyName && (
                <p className="text-sm text-destructive">{errors.companyName.message}</p>
              )}
            </div>

            {/* Contact Person */}
            <div className="space-y-2">
              <Label htmlFor="contactName" className="flex items-center gap-2 text-foreground">
                <User className="w-4 h-4 text-primary" />
                Contact Person *
              </Label>
              <Input
                id="contactName"
                {...register("contactName")}
                placeholder="Your Full Name"
                className={errors.contactName ? "border-destructive" : ""}
              />
              {errors.contactName && (
                <p className="text-sm text-destructive">{errors.contactName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@company.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+91 98765 43210"
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Location/City *
              </Label>
              <Input
                id="location"
                {...register("location")}
                placeholder="City, State"
                className={errors.location ? "border-destructive" : ""}
              />
              {errors.location && (
                <p className="text-sm text-destructive">{errors.location.message}</p>
              )}
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <Label htmlFor="industry" className="flex items-center gap-2 text-foreground">
                <Briefcase className="w-4 h-4 text-primary" />
                Type of Industry *
              </Label>
              <Input
                id="industry"
                {...register("industry")}
                placeholder="e.g., Manufacturing, Healthcare"
                className={errors.industry ? "border-destructive" : ""}
              />
              {errors.industry && (
                <p className="text-sm text-destructive">{errors.industry.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2 mb-6">
            <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
              <MessageSquare className="w-4 h-4 text-primary" />
              Message/Requirements *
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about your project requirements..."
              rows={6}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-6 text-base font-semibold"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
