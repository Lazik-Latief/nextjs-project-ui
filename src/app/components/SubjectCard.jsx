'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Languages,
  Landmark,
  Atom,
  Sigma,
} from 'lucide-react';

const subjectConfig = {
  English: { icon: Languages, image: '/subjects/english.png' },
  Math: { icon: Sigma, image: '/subjects/math.png' },
  Science: { icon: Atom, image: '/subjects/science.png' },
  History: { icon: Landmark, image: '/subjects/history.png' },
  Urdu: { icon: BookOpen, image: '/subjects/urdu.png' },
};

export default function SubjectCard({ name, lessons }) {
  const config = subjectConfig[name] || {};
  const Icon = config.icon || BookOpen;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${config.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-400/40 flex items-center justify-center mb-4 backdrop-blur-md">
          <Icon size={22} className="text-yellow-400" />
        </div>

        <h4 className="text-white text-xl font-semibold">
          {name}
        </h4>

        <p className="text-neutral-300 text-sm">
          {lessons} Lessons
        </p>
      </div>
    </motion.div>
  );
}
