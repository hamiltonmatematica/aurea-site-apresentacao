import { Smartphone, Layout, Clock, Monitor, DollarSign, CheckCircle } from 'lucide-react';
import { ProcessStep, PortfolioItem, FAQItem, FeatureItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/5538984030420?text=Quero%20fazer%20meu%20site";

export const FEATURES: FeatureItem[] = [
  { icon: Smartphone, text: "Página moderna e responsiva" },
  { icon: Layout, text: "Estrutura otimizada para vendas" },
  { icon: CheckCircle, text: "Design alinhado ao seu branding" },
  { icon: Monitor, text: "Domínio já incluso (.com.br)" },
  { icon: Clock, text: "Entrega em até 48h" },
  { icon: DollarSign, text: "Sem taxas escondidas" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: 1, title: "Assinatura do contrato", description: "Formalização rápida e segura para ambas as partes." },
  { number: 2, title: "Pagamento de 50%", description: "Sinal para início imediato do desenvolvimento." },
  { number: 3, title: "Reunião de alinhamento", description: "Definimos textos, cores, referências e logomarca." },
  { number: 4, title: "Construção (48h)", description: "Desenvolvimento da primeira versão completa." },
  { number: 5, title: "Ajustes finais", description: "Refinamento baseado no seu feedback." },
  { number: 6, title: "Escolha do domínio", description: "Definição do endereço www.SEUSITE.com.br." },
  { number: 7, title: "Entrega e Acessos", description: "Você recebe o site pronto e as credenciais." },
  { number: 8, title: "Publicação no ar", description: "Seu negócio disponível para o mundo." },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'Mundo do Brother', url: 'https://mundodobrother.com.br', imageUrl: 'https://picsum.photos/id/1/800/600' },
  { id: '2', title: 'Pré-turma Áurea', url: 'https://preturmaaurea.netlify.app', imageUrl: 'https://picsum.photos/id/20/800/600' },
  { id: '3', title: 'Diego Suzano', url: 'https://diegosuzanointeligenciademercado.netlify.app', imageUrl: 'https://picsum.photos/id/3/800/600' },
  { id: '4', title: 'Ellos GAT', url: 'https://ellosgat.netlify.app', imageUrl: 'https://picsum.photos/id/48/800/600' },
];

export const FAQS: FAQItem[] = [
  { question: "O site realmente sai por R$350?", answer: "Sim. O valor é único para a criação da Landing Page conforme descrito. Não há taxas de design surpresa." },
  { question: "O domínio está incluso?", answer: "Sim, o registro do primeiro ano do seu domínio (.com.br) está incluso no pacote." },
  { question: "E se eu não tiver logomarca?", answer: "Podemos usar uma tipografia simples e elegante (nome da empresa) ou posso orçar a criação da marca separadamente." },
  { question: "Posso pedir ajustes?", answer: "Com certeza. Após a primeira versão, temos uma etapa dedicada exclusivamente para ajustes finos." },
  { question: "E se eu quiser um site maior?", answer: "O pacote de R$350 é para uma Landing Page (página única). Para sites institucionais multipáginas ou lojas virtuais, solicite um orçamento personalizado." },
];