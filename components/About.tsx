import React from 'react';
import { CirclePattern } from './GeometricDecor';
import { WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <CirclePattern className="w-[500px] h-[500px] -right-24 -top-24 text-brand-offwhite text-opacity-80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="w-full aspect-square bg-gray-200 relative overflow-hidden">
                <img 
                  src="/hamilton.JPG" 
                  alt="Hamilton Vinícius" 
                  className="object-cover w-full h-full grayscale"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange z-[-1]"></div>
          </div>

          <div className="space-y-6">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Quem vai construir seu site?</span>
            <h2 className="text-4xl font-extrabold text-brand-black">Hamilton Vinícius</h2>
            <h3 className="text-xl text-gray-600 font-semibold">Desenvolvedor Full Stack, Professor e Mentor</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Eu sou Hamilton Vinícius, professor há 20 anos e especialista em Inteligência Artificial.
                Crio páginas profissionais com foco em <strong>clareza, conversão e velocidade</strong>.
              </p>
              <p>
                Depois de trabalhar com tráfego pago e tecnologia para diversas empresas, entendi que muitos negócios perdem clientes por não terem uma presença digital simples e eficiente.
              </p>
              <p>
                Acredito no essencialismo: <em>"O excesso nos confunde, mas o essencial nos direciona."</em> Por isso, decidi oferecer um serviço acessível, direto e rápido — sem enrolação.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-black font-bold border-b-2 border-brand-orange hover:text-brand-orange transition-colors"
              >
                Ver oferta →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;