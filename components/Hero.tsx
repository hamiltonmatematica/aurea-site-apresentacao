import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { SemiCircleRight } from './GeometricDecor';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-black overflow-hidden pt-20">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 h-full w-1/3 md:w-1/4 bg-brand-orange hidden md:block" />
      <SemiCircleRight className="text-brand-orange w-64 h-64 md:w-96 md:h-96 top-20 right-[20%] hidden md:block" />
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <div className="space-y-2">
            <span className="text-brand-orange font-semibold tracking-wider text-sm uppercase">
              Identidade Visual & Web Design
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Seu site <br />
              profissional <br />
              <span className="text-brand-orange">pronto em 48h.</span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            Sem letras miúdas, sem surpresas. Uma Landing Page moderna, rápida e responsiva para conquistar clientes e fortalecer sua marca por apenas <span className="text-white font-bold">R$350</span>.
          </p>

          <Button variant="primary">
            Quero meu site
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full hidden md:block"
        >
           {/* YouTube Video Embed */}
           <div className="absolute inset-0 bg-black overflow-hidden rounded-sm shadow-2xl border-2 border-brand-orange/20">
             <iframe 
               className="w-full h-full"
               src="https://www.youtube.com/embed/pNnIPBpmjSg?autoplay=1&mute=1&loop=1&playlist=pNnIPBpmjSg" 
               title="Hamilton Vinícius Video"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
             ></iframe>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;