import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { contactInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-3xl font-bold tracking-wider inline-block mb-6">
              SURYA<span className="text-[#FF6B00]">.</span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Learn. Perform. Shine. A premium dance academy dedicated to nurturing talent and inspiring passion for dance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-[#FF6B00] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF6B00] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#FF6B00] transition-colors">Services & Classes</a></li>
              <li><a href="#testimonials" className="hover:text-[#FF6B00] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#FF6B00] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="font-semibold text-white w-24 flex-shrink-0">Address:</span> 
                {contactInfo.address}
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-white w-24 flex-shrink-0">Phone:</span> 
                <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-[#FF6B00] transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-white w-24 flex-shrink-0">Hours:</span> 
                {contactInfo.workingHours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} SURYA Dance Studio and Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
