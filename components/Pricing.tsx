import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-orange text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-brand-black p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Big background typography effect */}
          <span className="absolute -top-10 -right-10 text-[10rem] font-bold text-gray-900 opacity-50 select-none">
            350
          </span>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Seu site completo</h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-gray-400">por apenas</span>
                <span className="text-5xl font-extrabold text-brand-orange">R$ 350</span>
              </div>
              <p className="text-gray-400 mb-8 font-light">
                Sem mensalidade. Sem taxas extras. Sem pegadinha. O investimento único para profissionalizar seu negócio.
              </p>
              <Button variant="primary" fullWidth>
                Chamar no WhatsApp
              </Button>
            </div>

            <div className="space-y-4 border-l border-gray-800 md:pl-12">
              {[
                "Entrega em até 48h",
                "Domínio incluso (.com.br)",
                "Estrutura profissional (LP)",
                "Design Essencialista",
                "Adaptado para Celular",
                "Apoio para manutenção"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-orange rounded-full p-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;