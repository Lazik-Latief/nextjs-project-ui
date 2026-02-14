'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Library,
  NotebookPen,
  Pencil,
  FileText,
  ClipboardCheck,
  School,
  
} from 'lucide-react';
export default function TopHeader() {
  const icons = [ BookOpen,
  GraduationCap,
  School,
  NotebookPen,
  Pencil,];
  return (
    <header className="sticky top-0 z-40 w-full">

      <div className="relative">

        <h1 className="text-4xl font-bold tracking-tight">
          Welcome back, <span className="text-yellow-400">Lazik</span> 👋
        </h1>

        <p className="text-neutral-400 mt-3 text-lg">
          You're doing great! Today's goal:
          <span className="text-yellow-400 font-medium"> Finish Light Reflection.</span>
        </p>

        {/* Fast glowing floating icon */}
        {/* <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -right-16 top-2 mr-10"
        >
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Sparkles className="text-yellow-400" size={22} />
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Sparkles className="text-yellow-400" size={22} />
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Sparkles className="text-yellow-400" size={22} />
          </div>
        </motion.div> */}

 <motion.div
      className="absolute right-10 top-4 flex gap-6"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="w-14 h-14 rounded-full 
                     bg-gradient-to-br from-yellow-500/20 to-black
                     border border-yellow-400/40
                     flex items-center justify-center
                     shadow-lg shadow-yellow-500/30
                     backdrop-blur-md
                     transition-all duration-300
                     hover:scale-110 hover:-translate-y-2
                     hover:shadow-yellow-400/60"
        >
          <Icon className="text-yellow-400" size={24} />
        </div>
      ))}
    </motion.div>
      </div>
    </header>
  );
}
