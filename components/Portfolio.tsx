import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-brand-beige text-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Veja alguns sites criados</h2>
          <div className="w-24 h-1 bg-brand-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-brand-black px-4 py-2 font-bold flex items-center gap-2">
                    Visitar Site <ExternalLink size={16} />
                  </span>
                </div>
              </div>
              <div className="p-6 border-t-4 border-brand-black group-hover:border-brand-orange transition-colors">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.url.replace('https://', '')}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;