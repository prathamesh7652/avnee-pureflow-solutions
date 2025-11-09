import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import aamindia from "@/assets/companyName/Aam india.jpg"
import bekart from "@/assets/companyName/Bekart.jpg"
import bosch from "@/assets/companyName/Bosch.jpg"
import brembo from "@/assets/companyName/Brembo.jpg"
import eton from "@/assets/companyName/Eton.jpg"
import godrej from "@/assets/companyName/godrejtyson.jpg"
import hirschevogel from "@/assets/companyName/Hirschvogel_Automotive_Group_Logo.svg[1].png"
import itc from "@/assets/companyName/ITC.jpg"
import minda from "@/assets/companyName/Minda.jpg"
import morde from "@/assets/companyName/Morde.jpg"
import mubea from "@/assets/companyName/mubea.png"
import novatel from "@/assets/companyName/Novatel.jpg"
import raddison from "@/assets/companyName/Raddison.jpg"
import orchid from "@/assets/companyName/Royal orchid.jpg"
import sulzer from "@/assets/companyName/Sulzer.jpg"
import tata from "@/assets/companyName/tatamotors.jpg"
import valeo from "@/assets/companyName/Valeo.jpg"

const ClientCarousel = () => {
  const prominentClients = [
    { Image: aamindia }, { Image: bekart }, { Image: bosch }, { Image: brembo },
    { Image: eton }, { Image: godrej }, { Image: hirschevogel }, { Image: itc },
    { Image: minda }, { Image: morde }, { Image: mubea }, { Image: novatel },
    { Image: raddison }, { Image: orchid }, { Image: sulzer }, { Image: tata },
    { Image: valeo }
  ];

  const duplicatedClients = [...prominentClients, ...prominentClients, ...prominentClients];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-background via-muted to-background py-12 relative">

      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-64 h-24 flex items-center justify-center px-6 
                       shadow-card hover:shadow-lift transition-all duration-300 
                       bg-background border border-border group cursor-default"
          >
            <img
              src={client.Image}
              alt="client logo"
              className="h-full object-contain group-hover:grayscale-0 transition-all"
            />
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientCarousel;
