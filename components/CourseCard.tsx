
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const isBlue = course.color === 'blue';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 flex flex-col h-full rounded-[2rem] transition-transform duration-300 hover:-translate-y-2 ${isBlue ? 'bg-[#2000f5] text-white' : 'bg-[#ff5b05] text-white'
        }`}
    >
      <div className="mb-6">
        <h3 className="text-4xl font-heading font-bold uppercase mb-2 leading-[0.9]">
          {course.title}
        </h3>
        <p className="text-sm font-bold uppercase tracking-widest opacity-80 inline-block bg-black/10 px-3 py-1 rounded-full">
          {course.subtitle}
        </p>
      </div>

      <p className="text-base font-medium leading-relaxed opacity-90 min-h-[80px] mb-8">
        {course.description}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {course.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium">
            <div className="mt-0.5 bg-white text-black p-0.5 rounded-full">
              <Check className="w-3 h-3" strokeWidth={4} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {course.links ? (
        // For especificas course - show two buttons
        <div className="flex gap-3">
          <a
            href={course.links.matematica}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
          >
            Matemática
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={course.links.redacao}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
          >
            Redação
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      ) : (
        // For other courses - show single button
        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
        >
          Saiba Mais
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
};

export default CourseCard;
