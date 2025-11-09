import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Clock, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "@/assets/hero-water-treatment.jpg";
import ultrafiteration from '@/assets/Ultrafiltration Plant.jpg';
import osmosis from "@/assets/Industrial Reverse Osmosis plant.jpg";
import stp from "@/assets/SEWAGE TREATMENT PLANT (STP).jpg";
import etp from "@/assets/etp.jpg";
import { url } from "inspector";

const Home = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Solutions",
      description: "Industry-leading water treatment technology and expertise",
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description:
        "Serving major industries across Maharashtra with excellence",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Assured",
      description: "Meeting all environmental regulations and standards",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
    },
  ];

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imagesRef, imagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(11, 83, 148, 0.95) 0%, rgba(46, 125, 50, 0.85) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Animated water wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            className="w-full h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,60 C300,90 600,30 900,60 C1050,75 1125,90 1200,60 L1200,120 L0,120 Z"
              fill="hsl(var(--background))"
              initial={{
                d: "M0,60 C300,90 600,30 900,60 C1050,75 1125,90 1200,60 L1200,120 L0,120 Z",
              }}
              animate={{
                d: [
                  "M0,60 C300,30 600,90 900,60 C1050,45 1125,30 1200,60 L1200,120 L0,120 Z",
                  "M0,60 C300,90 600,30 900,60 C1050,75 1125,90 1200,60 L1200,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Wastewater into Environmental Responsibility
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional environmental consultancy delivering reliable,
              cost-effective wastewater treatment and compliance solutions to
              industries, hospitals, and institutions across Pune and
              Maharashtra.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/enquiry">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold hover:scale-105 transition-spring shadow-lift"
                >
                  Get a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-primary hover:bg-white/20 hover:scale-105 transition-spring"
                >
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted" ref={featuresRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={
              featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Avnee Envirotech?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver cutting-edge sewage water filtration systems tailored
              to your industrial needs, ensuring environmental compliance and
              operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-card hover:shadow-lift transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 15 }}
                animate={
                  featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0, delay: index * 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className="bg-primary-light p-3 rounded-full w-fit mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" ref={aboutRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advanced Water Treatment Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Specialized Industrial Expertise We focus exclusively on sewage
                water filtration systems for industrial clients, bringing deep
                technical knowledge and proven solutions tailored to
                manufacturing, processing, and commercial operations across Pune
                and Maharashtra.​
                <br /> <br />
                Complete Turnkey Solutions From initial design and installation
                to commissioning and ongoing maintenance, we handle every aspect
                of your sewage treatment infrastructure—eliminating the
                complexity of coordinating multiple vendors. <br /> <br />
                ​State-of-the-Art Technology Our advanced sewage treatment
                systems incorporate modern filtration technologies and efficient
                treatment processes that deliver superior water quality while
                minimizing operational costs and energy consumption. <br />​{" "}
                <br /> Comprehensive Service Portfolio Beyond sewage treatment
                plants, we provide effluent treatment systems, water recycling
                facilities, and complete environmental compliance
                management—offering integrated solutions for all your industrial
                wastewater needs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From initial design to final commissioning, we deliver turnkey
                projects for effluent treatment plants (ETP), sewage treatment
                plants (STP), and water treatment plants (WTP) that eliminate
                the complexity of coordinating multiple vendors.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "ISO-certified installation and maintenance services",
                  "Custom solutions for diverse industrial requirements",
                  "Full compliance with environmental regulations",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      aboutInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 hover:scale-105 transition-spring shadow-elegant"
                >
                  Learn More About Our Services
                </Button>
              </Link>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4" ref={imagesRef}>
              {[
                {
                  src: osmosis,
                  alt: "Industrial filtration system",
                  delay: 0,
                },
                {
                  src: stp,
                  alt: "Treatment plant aerial view",
                  delay: 0.1,
                  className: "mt-8",
                },
                {
                  src: etp,
                  alt: "Clean treated water",
                  delay: 0.2,
                  className: "-mt-8",
                },
                { src: ultrafiteration, alt: "Water treatment facility", delay: 0.3 },
              ].map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`rounded-lg shadow-card w-full h-80 object-cover hover:shadow-lift transition-all duration-300 ${
                    image.className || ""
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    imagesInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0, delay: image.delay }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white relative overflow-hidden">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Upgrade Your Water Treatment System?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today for a comprehensive consultation and customized
            solution for your industrial wastewater management needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/enquiry">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold hover:scale-105 transition-spring shadow-lift"
              >
                Request a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-primary hover:bg-white/20 hover:scale-105 transition-spring"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
