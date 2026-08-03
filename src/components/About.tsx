import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "Experienced Dance Trainers",
    "Certified Instructors",
    "Kids & Adults Classes",
    "Friendly Learning Environment",
    "Personalized Attention",
    "Affordable Fees",
    "Safe & Comfortable Studio",
    "Passion for Dance Excellence"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 mt-8">
            <img 
              src="https://images.unsplash.com/photo-1543881023-e517ba60fbaf?q=80&w=600&auto=format&fit=crop" 
              alt="Dance Class" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=600&auto=format&fit=crop" 
              alt="Studio Practice" 
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop" 
              alt="Performance" 
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
            <div className="w-full h-56 bg-gradient-to-br from-[#FF6B00] to-orange-400 rounded-2xl p-6 flex flex-col justify-center text-white shadow-lg">
              <span className="text-5xl font-bold mb-2">10+</span>
              <span className="text-lg font-medium opacity-90">Years of Excellence</span>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <span className="text-[#FF6B00] font-semibold tracking-wider uppercase mb-2 block">
            About Our Academy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Where Passion Meets <br/> Perfection
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            At SURYA Dance Studio and Academy, we believe that dance is more than just movement—it's an expression of the soul. Our premium academy provides world-class training across various styles for all age groups. Whether you are a beginner taking your first step or a professional refining your art, our studio is the perfect place to grow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B00] flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black transition-colors"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
