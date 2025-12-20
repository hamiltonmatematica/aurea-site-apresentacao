/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: 'blue' | 'orange';
  link?: string;
  links?: {
    matematica?: string;
    redacao?: string;
    biologia?: string;
    quimica?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Artist {
  name: string;
  image: string;
  day: string;
  genre: string;
}

export enum Section {
  HERO = 'hero',
  METHODOLOGY = 'methodology',
  COURSES = 'courses',
  BENEFITS = 'benefits',
}