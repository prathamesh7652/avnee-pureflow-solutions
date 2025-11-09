import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  index?: number;
}

const ProductCard = ({ image, title, description, duration, index = 0 }: ProductCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover:shadow-lift transition-all duration-500 hover:-translate-y-2 border-border h-full">
        {/* Image Container */}
        <motion.div 
          className="relative h-64 overflow-hidden bg-muted"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.div>

        <CardHeader>
          <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          
          {/* Installation Duration Badge */}
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground mt-2 bg-accent-light px-3 py-2 rounded-full w-fit"
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent))" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className="h-4 w-4 text-accent" />
            <span className="font-medium">Installation: {duration}</span>
          </motion.div>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>

          {/* Hover Indicator */}
          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: inView ? "100%" : "0%" }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
