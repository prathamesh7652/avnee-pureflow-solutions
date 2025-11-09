import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { CheckCircle2 } from "lucide-react";

const Enquiry = () => {

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

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Enquiry;
