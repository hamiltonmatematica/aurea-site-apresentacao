/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Você é o assistente virtual da ÁUREA, uma instituição de ensino pré-vestibular de alto nível.
      
      Identidade da Marca:
      - Slogan: "O melhor dos dois mundos" (Analógico + Digital).
      - Tom de voz: Confiante, inovador, acolhedor, focado em alta performance.
      - Cores mencionadas: Electric Blue e Tangerine.
      
      Informações Chave para 2026:
      - Metodologia: Híbrida (Presencial + Online).
      - Ciclo 1: Conteúdo até julho. Ciclo 2: Competências e questões a partir de agosto.
      - Tecnologia: Plataforma Áurea + Geekie One + Inteligência Artificial (I.Áurea).
      - Cursos: ENEM, UNIMONTES, MED 360 (Turma exclusiva), Redação e Matemática.
      - Diferenciais: Chromebooks para todos, Estúdio Áurea (unidade 2), Áurea Prime.
      
      Responda de forma concisa (máximo 50 palavras) e incentive a matrícula. Use emojis moderados.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Sistema offline. (Missing API Key)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Sem resposta no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro de conexão. Tente novamente.";
  }
};