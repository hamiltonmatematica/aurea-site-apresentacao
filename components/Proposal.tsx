import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';
import { QuarterCircleBottomLeft } from './GeometricDecor';

const Proposal: React.FC = () => {
  return (
    <section className="py-24 bg-white text-brand-black relative overflow-hidden">
      <QuarterCircleBottomLeft className="text-brand-beige w-64 h-64 -bottom-10 -left-10 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Construção rápida e eficiente, <br />
            <span className="text-brand-orange">do jeito que você precisa.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Seu site será criado no formato de <strong>Landing Page</strong>, o mesmo estilo usado por empresas, infoprodutores e marcas que querem transformar visitas em vendas. Responsivo, moderno e adaptado para todos os dispositivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-offwhite p-8 rounded-none border-l-4 border-brand-orange hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 text-brand-orange">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold">{feature.text}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proposal;