'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function SubjectCard({ name, lessons }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="bg-[#111112] border border-white/5 
                 rounded-3xl p-6
                 hover:border-yellow-400/30
                 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]
                 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-yellow-500/10 
                      border border-yellow-400/20 
                      flex items-center justify-center mb-5">
        <BookOpen size={20} className="text-yellow-400" />
      </div>

      <h4 className="text-white font-semibold text-lg">
        {name}
      </h4>

      <p className="text-neutral-500 text-sm mt-1">
        {lessons} Lessons
      </p>
    </motion.div>
  );
}
