import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import stpImage from "@/assets/SEWAGE TREATMENT PLANT (STP).jpg";
import etpImage from "@/assets/etp.jpg";
import ultraFiltrationImage from "@/assets/Ultrafiltration Plant.jpg";
import industrialRoImage from "@/assets/Industrial Reverse Osmosis plant.jpg";
import waterMeterImage from "@/assets/Electromagnetic water meter - Make Fedrel.jpg";
import ozoneGeneratorImage from "@/assets/Ozone Generator - Make Faraday.jpg";

const Services = () => {
  const services = [
    {
      image: stpImage,
      title: "Sewage Treatment Plant (STP)",
      description:
        "Advanced biological treatment system designed to process domestic and municipal wastewater. Features include extended aeration, MBBR technology, and automated controls for efficient sewage treatment meeting discharge standards.",
      duration: "4-8 weeks",
    },
    {
      image: etpImage,
      title: "Effluent Treatment Plant (ETP)",
      description:
        "Customized industrial effluent treatment solutions for chemical, pharmaceutical, and manufacturing industries. Incorporates physical, chemical, and biological treatment processes to handle complex industrial waste streams.",
      duration: "6-10 weeks",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Site Assessment",
      description:
        "Comprehensive evaluation of your facility, wastewater characteristics, and treatment requirements.",
    },
    {
      step: "02",
      title: "System Design",
      description:
        "Custom engineering design tailored to your specific industrial processes and compliance needs.",
    },
    {
      step: "03",
      title: "Installation",
      description:
        "Professional installation with minimal disruption to your operations and strict quality control.",
    },
    {
      step: "04",
      title: "Commissioning",
      description:
        "System testing, optimization, and staff training to ensure optimal performance from day one.",
    },
    {
      step: "05",
      title: "Ongoing Support",
      description:
        "Continuous monitoring, maintenance, and technical support to maintain system efficiency.",
    },
  ];

  const products = [
    {
      image: ultraFiltrationImage,
      title: "Ultra Filtration System",
      description:
        "Ultra Filtration: Ultra filtration (UF) is a water purification process in which water is forced through a semi-permeable membrane. Suspended solids and high-molecular-weight solutes remain on one side of the membrane, the retentate side, while water and low-molecular-weight solutes filter through the membrane to the permeate side. UF can remove most organic molecules and viruses, as well as a range of salts. It will help in treatment and recycling of wastewater and industrial process water.",
      duration: "2-3 weeks",
    },
    {
      image: industrialRoImage,
      title: "Industrial Reverse Osmosis (RO)",
      description:
        "Reverse osmosis (RO) is a water purification process that uses a partially permeable membrane to separate ions, unwanted molecules and larger particles from water. It will help in treatment and recycling of wastewater and industrial process water.",
      duration: "3-5 weeks",
    },
    {
      image: waterMeterImage,
      title: "Electromagnetic Water Meter",
      description:
        "Electromagnetic flow meters use Faraday's Law to determine the flow of liquid in a pipe. Whereby, the flow of a conductive liquid through the magnetic field causes a voltage signal to be sensed by electrodes located on the flow tube walls.",
      duration: "1-2 days",
    },
    {
      image: ozoneGeneratorImage,
      title: "Ozone Generator",
      description:
        "An ozone generator, or ozone machine, is a device that converts oxygen from various sources such as ambient air, dry air, or concentrated oxygen into ozone.",
      duration: "1-2 weeks",
    },
  ];

  const industries = [
    {
      title: "Automotive & Auto Components",
      description:
        "Major automotive manufacturers and tier-1 suppliers including TATA Motors Group, Eaton Group, Uno Minda Group, and companies like Bosch, Brembo, Valeo, Cummins, and Indian Kawasaki Motors.",
    },
    {
      title: "Chemical & Pharmaceutical",
      description:
        "Chemical manufacturing and pharmaceutical companies including Alas Pharmaceutical, Neelikon Food Dyes, Associate Allied Chemicals, and Alcan Composites.",
    },
    {
      title: "Food & Beverages",
      description:
        "Food processing and beverage companies such as ITC Ltd, Godrej Tyson Foods, Morde Foods, Poona Dal and Oil Mill, and Ahura Nutri Snacks.",
    },
    {
      title: "Hospitality & Hotels",
      description:
        "Premium hotels and leisure facilities including Radisson Blue, IBIS Hotel, Royal Orchid Hotel, Novotel Hotel, and O Hotel.",
    },
    {
      title: "Engineering & Manufacturing",
      description:
        "Heavy engineering, metal fabrication, and precision component manufacturers like Hirschvogel, Gestamp, Sany Heavy Industry, and Precision Seals Manufacturing.",
    },
    {
      title: "Oil & Gas Equipment",
      description:
        "Oilfield machinery manufacturers under Worldwide Oilfield Machine Group including Magnum Forge and Magna Casting.",
    },
    {
      title: "Data Centers & Technology",
      description:
        "Technology infrastructure facilities like Princeton Digital Group (Data Center) and electronics manufacturers including Flash Electronics and HORIBA India.",
    },
    {
      title: "Metal Processing & Refining",
      description:
        "Metal processing facilities such as Kolhapur Silver Refinery and related industries.",
    },
    {
      title: "Textile & Laundry Services",
      description:
        "Industrial laundry and textile services like Lindstrom Services India.",
    },
  ];

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [industriesRef, industriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-hero text-white py-10 relative overflow-hidden">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive sewage water filtration and industrial wastewater
            treatment solutions designed for environmental compliance and
            operational excellence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-10 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ProductCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium water treatment equipment and systems engineered for
              reliability and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted" ref={processRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={
              processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring seamless deployment of your water
              treatment infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-card text-center group hover:shadow-lift transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="text-4xl font-bold text-accent mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20" ref={industriesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={
              industriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized water treatment solutions across diverse industrial
              sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-card hover:shadow-lift transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  industriesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Need a Custom Solution for Your Industry?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our engineering team is ready to design the perfect wastewater
            treatment system for your specific requirements.
          </motion.p>
          <motion.div
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
                Request a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
