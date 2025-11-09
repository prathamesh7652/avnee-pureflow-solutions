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

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* What Happens Next */}
              <motion.div
                className="bg-gradient-to-br from-primary-light to-primary-light/50 p-8 rounded-xl shadow-card backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                  What Happens Next?
                </h2>
                <div className="space-y-4 relative z-10">
                  {[
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
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                className="bg-gradient-to-br from-accent-light to-accent-light/50 p-8 rounded-xl shadow-card backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
                  Why Choose Us?
                </h2>
                <div className="space-y-4 relative z-10">
                  {[
                    { text: "15+ years of industry experience" },
                    { text: "150+ successful installations" },
                    { text: "100% compliance track record" },
                    { text: "24/7 technical support available" },
                    { text: "Customized solutions for every industry" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Need Immediate Assistance */}
              <motion.div
                className="bg-gradient-to-br from-secondary-light to-secondary-light/50 p-8 rounded-xl shadow-card backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
                }}
              >
                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
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
