import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [areasRef, areasInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Amit Naregalkar",
      designation: "Director",
      phone: "9730088522",
    },
    {
      name: "Dnyaneshwar Tatte",
      designation: "Project Manager",
      phone: "9922447199",
    },
    {
      name: "Ravindra Patil",
      designation: "HR",
      phone: "9764864324",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Contact Cards */}
      <section className="py-20" ref={cardsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-sm mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={
                cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <motion.div
                className="max-w-7xl mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Leadership Team
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Meet the experts behind our success
                </p>
              </motion.div>

              {/* Team Cards Grid */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
                {/* Left Card - Project Manager */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-full lg:w-auto"
                >
                  <TeamMemberCard
                    name={teamMembers[1].name}
                    designation={teamMembers[1].designation}
                    phone={teamMembers[1].phone}
                    isDirector={false}
                  />
                </motion.div>

                {/* Center Card - Director (Fancy) */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="w-full lg:w-auto"
                >
                  <TeamMemberCard
                    name={teamMembers[0].name}
                    designation={teamMembers[0].designation}
                    phone={teamMembers[0].phone}
                    isDirector={true}
                  />
                </motion.div>

                {/* Right Card - HR Manager */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-full lg:w-auto"
                >
                  <TeamMemberCard
                    name={teamMembers[2].name}
                    designation={teamMembers[2].designation}
                    phone={teamMembers[2].phone}
                    isDirector={false}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Map and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={mapRef}>
            {/* Map */}
            <motion.div
              className="h-[500px] lg:h-[500px] rounded-lg gap-5 overflow-hidden shadow-elegant"
              initial={{ opacity: 0, x: -50 }}
              animate={
                mapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col gap-10 ">
                {/* Samarth Nagar Location */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d473.06466810772224!2d73.821396!3d18.460211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2950011926065%3A0xafd9cddbac4822d2!2sSamarth%20Complex%2C%20Samarth%20Nagar!5e0!3m2!1sen!2sin!4v1762696899299!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Samarth Nagar Location"
                ></iframe>

                {/* Dehu Location */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30229.79509988964!2d73.74710047183277!3d18.721153524325608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b6c3af4f82b1%3A0x7e479fb79ab16b71!2sDehu%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1762696777664!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dehu Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={mapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                className="text-3xl font-bold text-primary mb-6"
                initial={{ opacity: 0 }}
                animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Visit Our Office
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our office is conveniently located in Pune, the industrial hub
                of Maharashtra. We welcome clients to visit us for in-person
                consultations and facility tours.
              </motion.p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: MapPin,
                    title: "Head Office",
                    content:
                      "Shop No. 09, Samarth Complex, Samarth Nagar, Nr SBI Bank, Pune, Maharashtra, India - 411041",
                  },
                  {
                    icon: MapPin,
                    title: "Branch Office",
                    content:
                      "Shop No. 112, Divine Dynasty, Dehu-Malwadi Road, Parandwal Chowk, Dehugoan, Pune, Maharashtra, India - 412109",
                  },
                  {
                    icon: Phone,
                    title: "Contact Numbers",
                    content: [
                      "Sales: +91 9730088522",
                      "Support: +91 9822014063",
                    ],
                  },
                  {
                    icon: Mail,
                    title: "Email Addresses",
                    content: [
                      "General: avneeenvirotech@gmail.com",
                      "Technical: sales@aeiplpune.com",
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: [
                      "Monday - Friday: 9:00 AM - 6:00 PM",
                      "Saturday: 9:00 AM - 2:00 PM",
                      "Sunday: Closed",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      mapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

function TeamMemberCard({
  name,
  designation,
  phone,
  isDirector,
}: {
  name: string;
  designation: string;
  phone: string;
  isDirector: boolean;
}) {
  if (isDirector) {
    return (
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 shadow-elegant rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 w-full lg:w-80">
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-white/30">
            <div className="w-full h-full bg-gradient-to-br from-background to-muted flex items-center justify-center text-4xl font-bold text-primary">
              Photo
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md">
            <span className="text-xs font-semibold text-primary">Director</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-white/90 text-sm font-medium mb-3">{designation}</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
          <p className="text-white font-semibold">{phone}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border w-full lg:w-64">
      <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center overflow-hidden mb-4 border-2 border-border">
        <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center text-sm font-medium text-muted-foreground">
          Photo
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{designation}</p>
      <p className="text-sm text-foreground font-medium">{phone}</p>
    </div>
  );
}

export default Contact;
