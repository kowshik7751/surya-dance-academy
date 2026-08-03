import { motion } from 'motion/react';
import { contactInfo } from '../data';
import { MapPin, Phone, Clock, MessageCircle, Map } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information */}
          <div className="w-full lg:w-5/12 space-y-10">
            <div>
              <span className="text-[#FF6B00] font-semibold tracking-wider uppercase mb-2 block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Start Your Dance Journey
              </h2>
              <p className="text-gray-600 text-lg">
                We'd love to hear from you. Visit our studio or contact us to inquire about classes, events, or choreography services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 text-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Studio Address</h4>
                  <p className="text-gray-600 leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 text-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 leading-relaxed">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-50 text-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600 leading-relaxed">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${contactInfo.phoneRaw}`}
                className="flex items-center justify-center px-6 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black transition-colors"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${contactInfo.phoneRaw.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20b858] transition-colors"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-7/12 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-auto min-h-[400px] bg-gray-100"
          >
            {/* Visual representation of a map since iframe might be heavy/blocked. We provide a button to open Google Maps */}
            <div className="absolute inset-0 bg-gray-200">
               {/* Simulating a map background */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                 alt="Map Location"
                 className="w-full h-full object-cover opacity-50 grayscale"
               />
               <div className="absolute inset-0 bg-[#FF6B00]/10 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#FF6B00] mb-4 animate-bounce">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 bg-white/90 px-6 py-2 rounded-full shadow-sm mb-6">
                SURYA Dance Studio
              </h3>
              
              <a 
                href={contactInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white font-bold rounded-full shadow-xl hover:bg-[#e56000] hover:scale-105 transition-all"
              >
                <Map size={20} className="mr-2" />
                Get Directions on Maps
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
