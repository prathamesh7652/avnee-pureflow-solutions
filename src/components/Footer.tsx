import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Droplet, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <Droplet className="h-6 w-6" />
              </div>
              <span className="text-lg font-bold">Avnee Envirotech</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Leading environmental consultancy specializing in industrial sewage water
              filtration systems across Maharashtra.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/enquiry"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Sewage Treatment Plants</li>
              <li className="text-primary-foreground/80">Effluent Treatment Systems</li>
              <li className="text-primary-foreground/80">Industrial Reverse Osmosis (RO)</li>
              <li className="text-primary-foreground/80">Ultra Filtration System</li>
              <li className="text-primary-foreground/80">Electromagnetic Water Meter</li>
              <li className="text-primary-foreground/80">Ozone Generator</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 9730088522
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  sales@aeiplpune.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Avnee Envirotech. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
