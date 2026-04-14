import { Phone, MessageCircle, Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

            {/* Brand */}
            <div>
              <span className="text-xl font-bold mb-4 block">
                Dream Kitchens
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Helping families plan and build modular kitchens that fit their budget and lifestyle.
              </p>
            </div>

            {/* Contact */}
            <div>
              <span className="text-sm font-semibold mb-4 block tracking-wide uppercase">
                Contact
              </span>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 9403893424
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Available
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@dreamkitchens.in
                </p>
              </div>
            </div>

            {/* Visit */}
            <div>
              <span className="text-sm font-semibold mb-4 block tracking-wide uppercase">
                Visit Us
              </span>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>R48, Zone -2, M P Nagar Bhopal. 462011</span>
                </p>

                <a
                  href="https://share.google/rz1ri2AcjiDWDBZtX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium group"
                >
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  View on Google Maps
                </a>

                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Mon-Sat: 11 AM - 8 PM
                </p>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <span className="text-sm font-semibold mb-4 block tracking-wide uppercase">
                Service Area
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bhopal, Indore, Bangalore, Mumbai, Pune, Hyderabad, Chennai, and surrounding areas
              </p>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Dream Kitchens. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-3">
            
            <Button
              className="flex-1"
              onClick={() => (window.location.href = "tel:+919403893424")}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>

            <Button
              className="flex-1"
              onClick={() =>
                window.open("https://wa.me/919403893424", "_blank")
              }
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>

          </div>
        </div>
      </div>
    </>
  );
}