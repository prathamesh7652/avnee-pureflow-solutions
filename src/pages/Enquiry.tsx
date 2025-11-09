import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface EnquiryFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  location: string;
  industry: string;
  message: string;
}

const Enquiry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<EnquiryFormData>();

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Try to parse JSON response but fall back to text when server returns HTML (e.g., 404 page)
      let result: any = null;
      try {
        result = await response.json();
      } catch (parseError) {
        // response wasn't JSON (likely HTML 404 page). Capture text for error display.
        const text = await response.text();
        result = { message: text };
      }

      if (response.ok && result?.success) {
        toast({
          title: "✅ Enquiry Submitted Successfully!",
          description: "Our team will contact you within 24 hours.",
        });
        reset();
      } else {
        console.error("Email send error:", result);
        // Show server-provided message when available to aid debugging
        toast({
          title: "❌ Submission Failed",
          description:
            (result?.message && typeof result.message === 'string' ? result.message : "There was an issue sending your enquiry. Please try again later."),
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Network error:", error);
      toast({
        title: "⚠️ Network Error",
        description:
          error?.message || "Unable to send your enquiry. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    "Pharmaceutical",
    "Textile",
    "Chemical",
    "Food & Beverage",
    "Automotive",
    "Paper & Pulp",
    "Electronics",
    "Metal Processing",
    "Other",
  ];

  const formFields = [
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Enter your company name",
    },
    {
      name: "contactName",
      label: "Contact Person Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@company.com",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "9999999999",
    },
    {
      name: "location",
      label: "Location/City",
      type: "text",
      placeholder: "e.g., Pune, Maharashtra",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-hero text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Request a Quote
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fill out the form below and our team will get back to you with a
            customized solution for your wastewater treatment needs
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-xl shadow-elegant"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Label
                      htmlFor={field.name}
                      className="transition-smooth text-sm font-semibold"
                    >
                      {field.label} <span className="text-destructive">*</span>
                    </Label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <Input
                        id={field.name}
                        type={field.type}
                        {...register(field.name as keyof EnquiryFormData, {
                          required: `${field.label} is required`,
                          ...(field.name === "email" && {
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          }),
                          ...(field.name === "phone" && {
                            pattern: {
                              value: /^[6-9]\d{9}$/,
                              message:
                                "Invalid Indian phone number (10 digits)",
                            },
                          }),
                        })}
                        placeholder={field.placeholder}
                        className="mt-2 transition-all duration-300 focus:shadow-lg focus:border-primary"
                      />
                    </motion.div>
                    {errors[field.name as keyof EnquiryFormData] && (
                      <motion.p
                        className="text-destructive text-sm mt-1 flex items-center gap-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <span className="inline-block w-1 h-1 bg-destructive rounded-full" />
                        {errors[field.name as keyof EnquiryFormData]?.message}
                      </motion.p>
                    )}
                  </motion.div>
                ))}

                {/* Industry Type */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Label htmlFor="industry" className="text-sm font-semibold">
                    Type of Industry <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    onValueChange={(value) => setValue("industry", value)}
                  >
                    <SelectTrigger className="mt-2 transition-all duration-300 focus:shadow-lg focus:border-primary">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.industry && (
                    <motion.p
                      className="text-destructive text-sm mt-1 flex items-center gap-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <span className="inline-block w-1 h-1 bg-destructive rounded-full" />
                      {errors.industry.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Message/Requirements{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message", {
                      required: "Please describe your requirements",
                      minLength: {
                        value: 20,
                        message: "Please provide at least 20 characters",
                      },
                    })}
                    placeholder="Please describe your wastewater treatment requirements, facility size, and any specific concerns..."
                    rows={5}
                    className="mt-2 transition-all duration-300 focus:shadow-lg focus:border-primary"
                  />
                  {errors.message && (
                    <motion.p
                      className="text-destructive text-sm mt-1 flex items-center gap-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <span className="inline-block w-1 h-1 bg-destructive rounded-full" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-secondary to-accent hover:shadow-lift transition-all duration-300 font-semibold text-base relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              ⏳
                            </motion.span>
                            Submitting...
                          </span>
                        ) : (
                          "Submit Enquiry"
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              {[
                {
                  bg: "bg-gradient-to-br from-primary-light to-primary-light/50",
                  title: "What Happens Next?",
                  items: [
                    {
                      title: "Initial Review",
                      text: "Our team reviews your requirements within 2-4 hours",
                    },
                    {
                      title: "Expert Consultation",
                      text: "We schedule a call to discuss your needs in detail",
                    },
                    {
                      title: "Custom Proposal",
                      text: "Receive a detailed proposal with technical specifications",
                    },
                    {
                      title: "Site Visit",
                      text: "On-site assessment to finalize the solution",
                    },
                  ],
                },
                {
                  bg: "bg-gradient-to-br from-accent-light to-accent-light/50",
                  title: "Why Choose Us?",
                  items: [
                    { text: "15+ years of industry experience" },
                    { text: "150+ successful installations" },
                    { text: "100% compliance track record" },
                    { text: "24/7 technical support available" },
                    { text: "Customized solutions for every industry" },
                  ],
                },
              ].map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  className={`${section.bg} p-8 rounded-xl shadow-card backdrop-blur-sm relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
                  }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <h2 className="text-2xl font-bold text-primary mb-6 relative z-10">
                    {section.title}
                  </h2>
                  <div className="space-y-4 relative z-10">
                    {section.items.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle2
                            className={`h-${item.title ? "6" : "5"} w-${
                              item.title ? "6" : "5"
                            } ${
                              sectionIndex === 0
                                ? "text-secondary"
                                : "text-accent"
                            } flex-shrink-0 mt-0.5`}
                          />
                        </motion.div>
                        <div>
                          {item.title && (
                            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                          )}
                          <p
                            className={`text-${
                              item.title ? "sm" : "sm"
                            } text-muted-foreground`}
                          >
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="bg-gradient-to-br from-secondary-light to-secondary-light/50 p-8 rounded-xl shadow-card backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
                }}
              >
                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0, repeat: Infinity }}
                />
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm text-muted-foreground mb-4 relative z-10">
                  For urgent inquiries, call us directly
                </p>
                <motion.p
                  className="text-2xl font-bold text-secondary relative z-10"
                  whileHover={{ scale: 1.05 }}
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +91 9730088522
                </motion.p>
                <p className="text-sm text-muted-foreground mt-2 relative z-10">
                  Mon-Sat: 9 AM - 6 PM
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
