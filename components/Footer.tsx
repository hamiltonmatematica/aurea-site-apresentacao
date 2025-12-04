import React from 'react';
import Button from './Button';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-16 border-t border-gray-900">
      <div className="container mx-auto px-6 text-center">
        
        <div className="mb-16 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para ter um site profissional ainda essa semana?
          </h2>
          <p className="text-gray-400">
            Domine o básico. Invista no essencial.
          </p>
          <Button variant="primary">
            Quero meu site
          </Button>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6 md:gap-0">
          <div className="font-bold text-white tracking-wider text-left">
            hamilton<br/>vinícius
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/hamiltonviniciuss/?r=nametag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-orange transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hamilton-vinicius" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-orange transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <p>&copy; {new Date().getFullYear()} Hamilton Vinícius. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;