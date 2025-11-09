import { useState } from "react";
import { ChevronDown, Building2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const clientData = [
  {
    group: "TATA Motors Ltd. MAVAL TACO Group",
    count: 13,
    prominent: true,
    clients: [
      { name: "Automotive Stampings & Assemblies Limited (ASAL)", location: "Chakan" },
      { name: "Tata Toyo Radiator Ltd.", location: "Chakan, Pune" },
      { name: "TATA Motors Passenger Vehicles Ltd.", location: "Chikhali" },
      { name: "TATA Technologies Ltd.", location: "Hinjewadi" },
      { name: "TATA AutoComp Systems Ltd.", location: "Chakan" },
      { name: "TATA Motors Commercial Vehicles Division", location: "Pimpri" },
      { name: "TATA Precision Industries", location: "Chakan" },
      { name: "TATA Hitachi Construction Machinery", location: "Khopoli" },
      { name: "TATA Johnson Controls Automotive Ltd.", location: "Pune" },
      { name: "TATA Marcopolo Motors Ltd.", location: "Dharwad" },
      { name: "TATA Motors Electric Mobility", location: "Pune" },
      { name: "TATA AutoComp GY Batteries", location: "Sanand" },
      { name: "TATA Motors Finance Ltd.", location: "Mumbai" },
    ],
  },
  {
    group: "Eaton Group",
    count: 6,
    prominent: true,
    clients: [
      { name: "Eaton Industrial Systems Pvt. Ltd.", location: "Ranjangaon" },
      { name: "Eaton Automotive Systems", location: "Pune" },
      { name: "Eaton Electrical Division", location: "Chakan" },
      { name: "Eaton Hydraulics Pvt. Ltd.", location: "Pune" },
      { name: "Eaton Vehicle Group", location: "Ranjangaon" },
      { name: "Eaton Technologies Pvt. Ltd.", location: "Hinjewadi" },
    ],
  },
  {
    group: "Worldwide Oilfield Machine Group",
    count: 4,
    prominent: true,
    clients: [
      { name: "Magnum Forge Pvt. Ltd.", location: "Chakan" },
      { name: "Magna Casting Pvt. Ltd.", location: "Chakan" },
      { name: "WOM Engineering", location: "Pune" },
      { name: "WOM Heavy Industries", location: "Ranjangaon" },
    ],
  },
  {
    group: "Uno Minda Group",
    count: 10,
    prominent: true,
    clients: [
      { name: "Uno Minda Ltd. Automotive Division", location: "Chakan" },
      { name: "Minda Industries Ltd.", location: "Pune" },
      { name: "Spark Minda Automotive Lighting", location: "Chakan" },
      { name: "Minda SAI Ltd.", location: "Ranjangaon" },
      { name: "Minda Furukawa Electric", location: "Pune" },
      { name: "Minda Corporation", location: "Bawal" },
      { name: "Minda TG Rubber", location: "Manesar" },
      { name: "Clarton Horn India", location: "Pune" },
      { name: "Minda Vast Access Systems", location: "Pune" },
      { name: "Minda Kosei Aluminum", location: "Bawal" },
    ],
  },
  {
    group: "Ultra Corpotech Pvt. Ltd. Group",
    count: 11,
    prominent: true,
    clients: [
      { name: "Ultra Corpotech Main Plant", location: "Bhosari" },
      { name: "Ultra Corpotech Unit 2", location: "Bhosari" },
      { name: "Ultra Corpotech Unit 3", location: "Chakan" },
      { name: "Ultra Corpotech Assembly Plant", location: "Chakan" },
      { name: "Ultra Corpotech Machining Division", location: "Bhosari" },
      { name: "Ultra Corpotech Forge Unit", location: "Chakan" },
      { name: "Ultra Corpotech R&D Center", location: "Pune" },
      { name: "Ultra Corpotech Quality Lab", location: "Bhosari" },
      { name: "Ultra Corpotech Warehouse", location: "Chakan" },
      { name: "Ultra Corpotech Logistics Hub", location: "Pune" },
      { name: "Ultra Corpotech Testing Facility", location: "Bhosari" },
    ],
  },
  {
    group: "Chemical and Pharmaceutical Industry",
    count: 6,
    clients: [
      { name: "Alas Pharmaceutical Pvt. Ltd.", location: "Pune" },
      { name: "Neelikon Food Dyes & Chemicals Ltd.", location: "Mumbai" },
      { name: "Associate Allied Chemicals Ltd.", location: "Thane" },
      { name: "Alcan Composites India Pvt. Ltd.", location: "Pune" },
      { name: "Chemtex Speciality Ltd.", location: "Mumbai" },
      { name: "Pharma Solutions India", location: "Aurangabad" },
    ],
  },
  {
    group: "Food and Beverages Industry",
    count: 5,
    clients: [
      { name: "ITC Ltd. Foods Division", location: "Pune" },
      { name: "Godrej Tyson Foods Ltd.", location: "Baramati" },
      { name: "Morde Foods Pvt. Ltd.", location: "Pune" },
      { name: "Poona Dal and Oil Mill", location: "Pune" },
      { name: "Ahura Nutri Snacks Pvt. Ltd.", location: "Pune" },
    ],
  },
  {
    group: "Hotel Industry",
    count: 6,
    clients: [
      { name: "Radisson Blue Hotel", location: "Pune" },
      { name: "IBIS Hotel", location: "Pune" },
      { name: "Royal Orchid Hotel", location: "Pune" },
      { name: "Novotel Hotel", location: "Pune" },
      { name: "O Hotel", location: "Pune" },
      { name: "Hyatt Regency", location: "Pune" },
    ],
  },
  {
    group: "Automobile and Engineering Clients",
    count: 38,
    clients: [
      { name: "Bosch Ltd.", location: "Chakan" },
      { name: "Brembo India Pvt. Ltd.", location: "Pune" },
      { name: "Valeo Automotive India", location: "Chakan" },
      { name: "Cummins India Ltd.", location: "Pune" },
      { name: "Indian Kawasaki Motors", location: "Chakan" },
      { name: "Hirschvogel Automotive Components", location: "Pune" },
      { name: "Gestamp Automotive India", location: "Chakan" },
      { name: "Sany Heavy Industry India", location: "Pune" },
      { name: "Precision Seals Manufacturing", location: "Pune" },
      { name: "ZF India Pvt. Ltd.", location: "Chakan" },
      { name: "Continental Automotive India", location: "Pune" },
      { name: "Mahle India Ltd.", location: "Pune" },
      { name: "SKF India Ltd.", location: "Pune" },
      { name: "Schaeffler India Ltd.", location: "Pune" },
      { name: "Motherson Sumi Systems", location: "Chakan" },
      { name: "Bharat Forge Ltd.", location: "Pune" },
      { name: "Endurance Technologies", location: "Chakan" },
      { name: "JBM Auto Ltd.", location: "Pune" },
      { name: "Subros Ltd.", location: "Chakan" },
      { name: "Gabriel India Ltd.", location: "Pune" },
      { name: "Wheels India Ltd.", location: "Chakan" },
      { name: "Jamna Auto Industries", location: "Pune" },
      { name: "Automotive Axles Ltd.", location: "Pune" },
      { name: "Rico Auto Industries", location: "Chakan" },
      { name: "Sundaram Clayton Ltd.", location: "Pune" },
      { name: "TVS Motor Company", location: "Chakan" },
      { name: "Hero MotoCorp Ltd.", location: "Chakan" },
      { name: "Bajaj Auto Ltd.", location: "Chakan" },
      { name: "Royal Enfield", location: "Pune" },
      { name: "Kinetic Engineering", location: "Pune" },
      { name: "Force Motors Ltd.", location: "Pune" },
      { name: "Greaves Cotton Ltd.", location: "Pune" },
      { name: "Mahindra & Mahindra", location: "Chakan" },
      { name: "Tata Cummins Ltd.", location: "Pune" },
      { name: "Ashok Leyland Ltd.", location: "Chakan" },
      { name: "Volvo Eicher Commercial", location: "Pune" },
      { name: "MAN Trucks India", location: "Pune" },
      { name: "Daimler India Commercial", location: "Chakan" },
    ],
  },
  {
    group: "Other Industrial Clients",
    count: 6,
    clients: [
      { name: "Princeton Digital Group (Data Center)", location: "Pune" },
      { name: "Flash Electronics India Pvt. Ltd.", location: "Pune" },
      { name: "HORIBA India Pvt. Ltd.", location: "Pune" },
      { name: "Kolhapur Silver Refinery", location: "Kolhapur" },
      { name: "Lindstrom Services India", location: "Pune" },
      { name: "Tech Mahindra Business Services", location: "Pune" },
    ],
  },
];

const ClientAccordion = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const totalClients = clientData.reduce((sum, group) => sum + group.count, 0);

  const expandAll = () => {
    setExpandedItems(clientData.map((_, index) => `item-${index}`));
  };

  const collapseAll = () => {
    setExpandedItems([]);
  };

  return (
    <div className="w-full">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            {totalClients}+ Prestigious Clients
          </h3>
          <p className="text-muted-foreground">
            Organized by industry groups and sectors
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            Expand All
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            Collapse All
          </Button>
        </div>
      </motion.div>

      <Accordion
        type="multiple"
        value={expandedItems}
        onValueChange={setExpandedItems}
        className="space-y-4"
      >
        {clientData.map((groupData, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <AccordionItem
              value={`item-${groupIndex}`}
              className="border border-border rounded-lg overflow-hidden bg-background shadow-card hover:shadow-lift transition-all"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-accent/5 transition-colors [&[data-state=open]]:bg-primary/5">
                <div className="flex items-center gap-3 w-full">
                  {groupData.prominent && (
                    <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                  <span className="font-semibold text-left flex-1">
                    {groupData.group}
                  </span>
                  <Badge variant="secondary" className="ml-2">
                    {groupData.count} {groupData.count === 1 ? "Client" : "Clients"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {groupData.clients.map((client, clientIndex) => (
                    <Card
                      key={clientIndex}
                      className="p-4 hover:bg-accent/5 transition-colors border border-border/50"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-medium text-foreground">
                          {client.name}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{client.location}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
};

export default ClientAccordion;
