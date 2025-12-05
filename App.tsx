
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Laptop, BookOpen, Brain, Clock, Check } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';
import CourseCard from './components/CourseCard';
import { Course } from './types';

// Content Data from PDF
const COURSES: Course[] = [
  {
    id: 'enem',
    title: 'ENEM',
    subtitle: 'Preparação Completa',
    color: 'blue',
    link: 'https://enemaurea2026.netlify.app/',
    description: 'Sistema Geekie 2026 e Plataforma Áurea com I.A. perfeita para estudos e planejamento semanal.',
    features: [
      'Acesso a plataforma Áurea Prime',
      'Turma presencial ou online',
      'Sistema de Ensino Geekie 2026',
      'Bolsa de 100% nos cursos de redação e matemática',
      'Coleção Inteligência Áurea (5 volumes)',
      '10 Simulados completos + 8 compactos',
      'Diagnóstico Áurea em TRI',
      '30% de desconto até 31/12 (alunos novos)',
      '50% de desconto até 31/12 (alunos áurea)',
      'Sem taxa de material',
      'Início: 02 de Fevereiro'
    ]
  },
  {
    id: 'unimontes',
    title: 'UNIMONTES',
    subtitle: 'Foco Regional',
    color: 'orange',
    link: 'https://unimontesaurea2026.netlify.app/',
    description: 'Preparação específica com material exclusivo e simulados direcionados para a banca da Unimontes.',
    features: [
      'Acesso a plataforma Áurea Prime',
      'Turma presencial ou online',
      'Coleção Unimontes 2026 (3 volumes)',
      'Bolsa de 100% no curso de redação',
      '6 Simulados completos + 4 compactos',
      '30% de desconto até 31/12 (alunos novos)',
      '50% de desconto até 31/12 (alunos áurea)',
      'Revisa Unimontes Gratuito',
      'Sem taxa de material',
      'Início: 02 de Março'
    ]
  },
  {
    id: 'med360',
    title: 'MED 360',
    subtitle: 'Turma Exclusiva',
    color: 'blue',
    link: 'https://med360aurea.netlify.app/',
    description: 'A turma definitiva para Medicina. Preparação simultânea Enem, Unimontes e Ufvjm com organização sistemática.',
    features: [
      'Acesso a plataforma Áurea Prime',
      'Turma presencial ou online',
      'Planejamento total Enem + Unimontes +',
      'Bolsa de 100% nos cursos de redação e matemática',
      'Organização semanal de demandas',
      'Simulados completos (Enem, Unimontes e Ufvjm)',
      '30% de desconto até 31/12 (alunos novos)',
      '50% de desconto até 31/12 (alunos áurea)',
      'I.A. Trio Perfeito',
      'Mentorias exclusivas',
      'Sem taxa de material',
      'Alta performance',
      'Início: 02 de Fevereiro'
    ]
  },
  {
    id: 'especificas',
    title: 'ESPECÍFICAS',
    subtitle: 'Matemática e Redação',
    color: 'orange',
    links: {
      matematica: 'https://matematicaaurea2026.netlify.app/',
      redacao: 'https://redacaoaurea2026.netlify.app/'
    },
    description: 'Cursos completos focados em potencializar suas notas nas disciplinas decisivas.',
    features: [
      'Acesso a plataforma Áurea Prime',
      'Turma presencial ou online',
      'Material Gratuito',
      'Simulados específicos',
      'Terça 19h: Matemática',
      'Quinta 19h: Redação',
      'Sem taxa de material',
      '30% de desconto até 31/12 (alunos novos)',
      '50% de desconto até 31/12 (alunos áurea)'
    ]
  }
];

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-[#ff5b05] selection:text-white cursor-auto md:cursor-none bg-[#150f1d]">
      <CustomCursor />
      <FluidBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-4 z-50">
          <div className="flex items-center gap-3 text-white">
            <img
              src="/logo-aurea.png"
              alt="áurea"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-sm font-bold tracking-widest uppercase items-center">
          {['Conceito', 'Cursos', 'Diferenciais', 'Matrículas'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white hover:text-[#ff5b05] transition-colors cursor-pointer bg-transparent border-none font-heading"
              data-hover="true"
            >
              {item}
            </button>
          ))}

          {/* Portal Button - Solid White Pill */}
          <button
            className="bg-white text-[#2000f5] px-6 py-2 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-[#ff5b05] hover:text-white transition-all duration-300 shadow-lg"
            data-hover="true"
          >
            Portal do Aluno
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-30 bg-[#150f1d] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Conceito', 'Cursos', 'Diferenciais', 'Matrículas'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-4xl font-heading font-bold text-white hover:text-[#ff5b05] transition-colors uppercase bg-transparent border-none"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - Styled like PDF Page 25/20 */}
      <header className="relative min-h-[100svh] flex flex-col items-start justify-center px-6 pt-20 overflow-hidden">
        {/* Semi-transparent overlay to ensure text readability on geometric background */}
        <div className="absolute inset-0 bg-[#150f1d]/20 pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left relative z-20"
          >
            <div className="inline-block bg-[#150f1d] border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Pedagógico e Matrículas 2026
            </div>

            <h1 className="text-[15vw] lg:text-[180px] leading-[0.8] font-logo font-medium text-white mb-2 tracking-tighter">
              áurea
            </h1>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading uppercase leading-tight mb-12">
              O melhor dos <br />
              <span className="text-[#150f1d] bg-white px-2 py-0 inline-block leading-[0.85] mt-2 lg:mt-4">dois mundos</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('cursos')}
                className="bg-[#2000f5] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#150f1d] transition-all flex items-center justify-center gap-2 group border border-transparent hover:border-white"
                data-hover="true"
              >
                Ver Turmas
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="bg-transparent border border-white text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#150f1d] transition-all"
                data-hover="true"
              >
                Agendar apresentação
                (presencial ou online)
              </button>
            </div>
          </motion.div>

          <div className="relative hidden lg:block h-[600px] w-full pointer-events-none">
            {/* Decorative Cards matching Bento Grid style (PDF Page 22) */}

            {/* I.ÁUREA Card - Solid Blue */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0] // Floating animation
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                scale: { duration: 0.8, delay: 0.4 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[10%] right-[10%] bg-[#2000f5] p-8 rounded-[2rem] w-[280px] shadow-2xl z-10 cursor-pointer pointer-events-auto"
            >
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <p className="font-heading font-bold text-2xl uppercase mb-2 text-white">I.Áurea</p>
              <p className="text-sm text-white/80 leading-relaxed">Inteligência Artificial para personalização.</p>
            </motion.div>

            {/* DIGITAL Card - Solid Ebony */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0] // Floating animation offset
              }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-[20%] left-[20%] bg-[#150f1d] p-8 rounded-[2rem] w-[300px] shadow-2xl border border-white/10 z-20 cursor-pointer pointer-events-auto"
            >
              <div className="w-12 h-12 bg-[#ff5b05] rounded-full flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <p className="font-heading font-bold text-2xl uppercase mb-2 text-white">Presencial ou Online</p>
              <p className="text-sm text-white/80 leading-relaxed font-medium">Plataforma Geekie e ferramentas modernas.</p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* CONCEITO SECTION - High Contrast Black/White/Orange */}
      <section id="conceito" className="py-24 px-6 relative z-10 bg-[#150f1d]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-none mb-8 text-white">
                Um novo <span className="text-[#ff5b05]">conceito</span>
              </h2>
              <div className="h-4 w-24 bg-[#2000f5] mb-8" />
            </div>
            <div className="space-y-12 text-lg md:text-xl leading-relaxed text-gray-200">
              <div className="border-l-4 border-[#ff5b05] pl-6">
                <h3 className="text-[#ff5b05] font-bold uppercase tracking-widest mb-2 font-heading text-2xl">1. Analógico</h3>
                <p>
                  Valorizamos o contato humano e técnicas tradicionais, estimulando a absorção prática e concreta do conteúdo.
                </p>
              </div>
              <div className="border-l-4 border-[#2000f5] pl-6">
                <h3 className="text-[#2000f5] font-bold uppercase tracking-widest mb-2 font-heading text-2xl">2. Digital</h3>
                <p>
                  Exploramos ferramentas tecnológicas para proporcionar rapidez, interatividade e flexibilidade ao estudo.
                </p>
              </div>

              <div className="bg-white text-[#150f1d] p-8 rounded-3xl">
                <p className="font-heading font-bold text-2xl uppercase mb-4">Turmas em 3 Formatos</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-bold">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ff5b05] rounded-full"></div>
                    Presencial
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#2000f5] rounded-full"></div>
                    Online Ao Vivo
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#150f1d] rounded-full"></div>
                    Gravada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURSOS SECTION - Bold color blocks */}
      <section id="cursos" className="py-24 px-6 relative z-10 bg-white text-[#150f1d]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-start mb-16">
            <h2 className="text-6xl md:text-8xl font-heading font-bold uppercase text-[#150f1d]">
              Turmas 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS SECTION - Bento Grid style inspired by PDF Page 22 */}
      <section id="diferenciais" className="py-24 px-6 relative z-10 bg-[#ff5b05]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase mb-16 text-white text-center md:text-left">
            Novidades Exclusivas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Estúdio Áurea - White Card */}
            <div className="bg-white text-[#150f1d] p-8 md:p-12 rounded-[2rem] flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="text-3xl font-heading font-bold uppercase mb-4 text-[#2000f5]">Estúdio Áurea</h3>
                <p className="font-medium text-lg leading-relaxed">
                  Unidade 2 exclusiva para alunos. Ambientes de estudo diário com acesso exclusivo.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Matutino', 'Vespertino', 'Noturno'].map(t => (
                  <span key={t} className="px-3 py-1 bg-[#150f1d] text-white rounded-full text-xs font-bold uppercase">{t}</span>
                ))}
              </div>
            </div>

            {/* Áurea Prime - Blue Card */}
            <div className="bg-[#2000f5] text-white p-8 md:p-12 rounded-[2rem] flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="text-3xl font-heading font-bold uppercase mb-4">Áurea Prime</h3>
                <p className="font-medium text-lg leading-relaxed opacity-90">
                  Plataforma exclusiva: Aulas ao vivo semanais, simulados e o quadro "Fala, Áurea!" para Redação e Atualidades.
                </p>
              </div>
              <div className="mt-8 bg-white/20 self-start p-3 rounded-full">
                <Brain className="w-8 h-8" />
              </div>
            </div>

            {/* Chromebooks - Ebony Card */}
            <div className="bg-[#150f1d] text-white p-8 md:p-12 rounded-[2rem] flex flex-col justify-between min-h-[400px] lg:row-span-2">
              <div>
                <div className="w-16 h-16 bg-[#ff5b05] rounded-full flex items-center justify-center mb-6">
                  <Laptop className="w-8 h-8" />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6">Chromebooks</h3>
                <p className="font-medium text-xl leading-relaxed opacity-80 mb-8">
                  Liberação de Chromebooks para todos os matriculados para uso no ambiente de estudos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                    <Clock className="text-[#ff5b05]" />
                    <div>
                      <p className="font-bold">8h às 21h</p>
                      <p className="text-xs opacity-50 uppercase">Horário de Acesso</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                    <BookOpen className="text-[#2000f5]" />
                    <div>
                      <p className="font-bold">Geekie One</p>
                      <p className="text-xs opacity-50 uppercase">Sistema Digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pacote Inteligência - Image/Visual Card */}
            <div className="lg:col-span-2 bg-[#150f1d] relative overflow-hidden rounded-[2rem] min-h-[300px] flex items-center p-8 md:p-12 border border-white/10">
              <div className="relative z-10 max-w-lg">
                <h3 className="text-3xl font-heading font-bold uppercase mb-4">Pacote Inteligência Áurea</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> Sistema Geekie One</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> I.Áurea</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> Áurea Prime</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> Fala, Áurea</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> YouTube Áurea</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> Nivelamento Pré-turma</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> Mentorias em Abril e Julho</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff5b05]" /> Planejamento especial 100 dias</li>
                </ul>
              </div>
              {/* Abstract Background Decoration */}
              <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 bg-[#2000f5] rounded-full mix-blend-screen opacity-50" />
              <div className="absolute right-[50px] top-[-50px] w-64 h-64 bg-[#ff5b05] rounded-full mix-blend-screen opacity-50" />
            </div>

          </div>
        </div>
      </section>

      {/* MATRICULAS SECTION - Blue Background */}
      <section id="matrículas" className="py-24 px-6 bg-[#2000f5] relative z-20 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase mb-16">
            Benefícios 2026
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white text-[#150f1d] p-8 rounded-[2rem] text-left hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold uppercase text-[#ff5b05] mb-4">Material</h4>
              <p className="text-4xl font-heading font-bold mb-2">GRATUITO</p>
              <p className="text-sm font-medium opacity-70">Sem taxa de material para todas as turmas.</p>
            </div>
            <div className="bg-[#150f1d] text-white p-8 rounded-[2rem] text-left hover:-translate-y-2 transition-transform duration-300 border border-white/10">
              <h4 className="text-xl font-bold uppercase text-[#2000f5] mb-4">Específicas</h4>
              <p className="text-4xl font-heading font-bold mb-2">Bolsa 100%</p>
              <p className="text-sm font-medium opacity-70">Nos cursos de Redação e Matemática (Alunos matriculados nas turmas Enem e Unimontes).</p>
            </div>
            <div className="bg-[#ff5b05] text-white p-8 rounded-[2rem] text-left hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold uppercase text-[#150f1d] mb-4">Pré-Turma</h4>
              <p className="text-4xl font-heading font-bold mb-2">Diagnóstico</p>
              <p className="text-sm font-medium opacity-90">Comece em Dezembro/Janeiro com simulados.</p>
            </div>
          </div>
          <a
            href="https://wa.me/553832133244?text=Ol%C3%A1%20!%20Quero%20garantir%20a%20minha%20vaga%20no%20%C3%81urea"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2000f5] px-12 py-6 rounded-full font-bold uppercase text-xl tracking-widest hover:bg-[#150f1d] hover:text-white transition-all shadow-2xl cursor-pointer inline-block"
          >
            Garanta sua Vaga
          </a>
        </div>
      </section>

      <footer className="py-12 bg-[#150f1d] border-t border-white/10 text-center md:text-left px-6 relative z-20 text-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-logo text-3xl font-medium">áurea</span>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="https://www.instagram.com/aureavestibulares/?r=nametag"
              target="_blank"
              className="hover:text-[#ff5b05] transition-colors">Instagram</a>
            <a href="https://wa.me/553832133244?text=Ol%C3%A1%20!%20Quero%20garantir%20a%20minha%20vaga%20no%20%C3%81urea"
              target="_blank"
              className="hover:text-[#ff5b05] transition-colors">WhatsApp</a>
            <a href="#"
              target="_blank"
              className="hover:text-[#ff5b05] transition-colors">Portal</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 Áurea Educação.</p>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
