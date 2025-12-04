import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS, WHATSAPP_LINK } from '../constants';
import Button from './Button';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex md:items-end md:justify-between border-b border-gray-800 pb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Seu site pronto <br />
            em <span className="text-brand-orange">poucas etapas</span>
          </h2>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-right hidden md:block">
            Processo simplificado para garantir agilidade e qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative p-6 border border-gray-800 hover:border-brand-orange transition-colors duration-300 group"
            >
              <div className="text-5xl font-extrabold text-gray-800 mb-4 group-hover:text-brand-orange transition-colors">
                {step.number.toString().padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary">
            Quero começar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;