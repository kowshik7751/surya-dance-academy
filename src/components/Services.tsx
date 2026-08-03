import { motion } from 'motion/react';
import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FF6B00] font-semibold tracking-wider uppercase mb-2 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Dance Styles
          </h2>
          <p className="text-gray-600 text-lg">
            From classical traditions to modern beats, we offer a wide range of classes and professional services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-[#FF6B00] font-semibold flex items-center hover:text-orange-700 transition-colors">
                  Learn More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Tags */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">Also offering special programs for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Workout Dance', 'Spoken English Classes', 'Abacus Training', 'Event Organizer', 'Corporate Events', 'College Cultural Programs', 'Birthday Dance Events'].map((tag, i) => (
              <span key={i} className="px-5 py-2 bg-white text-gray-700 border border-gray-200 rounded-full text-sm font-medium shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
