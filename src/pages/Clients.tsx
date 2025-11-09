import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import ClientCarousel from "@/components/ClientCarousel";
import ClientAccordion from "@/components/ClientAccordion";

const Clients = () => {
  const testimonials = [
    {
      company: "Maharashtra Pharmaceuticals Ltd.",
      name: "Rajesh Kumar",
      position: "Plant Manager",
      quote:
        "Avnee Envirotech transformed our wastewater management. Their ETP solution reduced our treatment costs by 30% while ensuring full compliance with environmental regulations.",
      industry: "Pharmaceutical",
    },
    {
      company: "Pune Textiles Manufacturing",
      name: "Priya Sharma",
      position: "Environmental Officer",
      quote:
        "Outstanding service from design to implementation. The team's technical expertise and dedication to meeting our specific requirements was exceptional.",
      industry: "Textile",
    },
    {
      company: "Green Foods Industries",
      name: "Amit Patel",
      position: "Operations Director",
      quote:
        "The water recycling system installed by Avnee Envirotech has been a game-changer. We've reduced our water consumption by 40% and significantly lowered operational costs.",
      industry: "Food Processing",
    },
    {
      company: "Chemical Solutions Pvt. Ltd.",
      name: "Sneha Desai",
      position: "Compliance Manager",
      quote:
        "Professional, reliable, and technically sound. Their ongoing support and maintenance services ensure our treatment plant operates at peak efficiency.",
      industry: "Chemical",
    },
    {
      company: "AutoParts Manufacturing Co.",
      name: "Vikram Singh",
      position: "Facility Head",
      quote:
        "From consultation to commissioning, the entire process was seamless. Their innovative approach to handling our complex effluent was impressive.",
      industry: "Automotive",
    },
    {
      company: "Maharashtra Paper Mills",
      name: "Meera Joshi",
      position: "Sustainability Lead",
      quote:
        "Avnee Envirotech's comprehensive solution not only met regulatory standards but also aligned with our sustainability goals. Highly recommended!",
      industry: "Paper & Pulp",
    },
  ];

  const clientLogos = [
    "Maharashtra Pharma",
    "Pune Textiles",
    "Green Foods",
    "ChemSolutions",
    "AutoParts Mfg",
    "MH Paper Mills",
    "TechElectronics",
    "MetalWorks Ind.",
  ];

  const stats = [
    { value: 100, suffix: "+", label: "Industrial Clients" },
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [logosRef, logosInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Clients
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by leading industries across Maharashtra for excellence in wastewater
            treatment and environmental solutions
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background" ref={statsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {statsInView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Carousel */}
      <section className="py-16" ref={logosRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={logosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>
        <ClientCarousel />
      </section>

      {/* Client Directory */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Client Directory
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive list of industrial clients organized by sectors
            </p>
          </motion.div>
          <ClientAccordion />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" ref={testimonialsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from satisfied industrial clients who trust us for their
              wastewater treatment needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="hover:shadow-lift transition-all duration-300 h-full">
                  <CardContent className="pt-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={testimonialsInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <Quote className="h-10 w-10 text-accent mb-4" />
                    </motion.div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-sm font-medium text-primary mt-1">
                        {testimonial.company}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 bg-primary-light px-2 py-1 rounded w-fit">
                        {testimonial.industry}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Success Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Featured project: Complete wastewater treatment solution for a major
              pharmaceutical facility
            </p>
          </motion.div>

          <motion.div 
            className="bg-background rounded-lg p-8 md:p-12 shadow-elegant max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "Challenge",
                  text: "High-strength pharmaceutical wastewater with complex chemical composition requiring specialized treatment."
                },
                {
                  title: "Solution",
                  text: "Custom-designed multi-stage ETP with advanced oxidation and biological treatment processes."
                },
                {
                  title: "Results",
                  text: "99% pollutant removal, 40% cost reduction, and zero environmental violations in 2 years."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Project Duration</div>
                  <div className="font-semibold">6 Months</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">System Capacity</div>
                  <div className="font-semibold">500 KLD</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-semibold">Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
    
    </div>
  );
};

export default Clients;
