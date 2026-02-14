'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Calculator, Feather } from 'lucide-react';

export default function ContinueLearning() {
  const courses = [
    {
      subject: 'Science',
      title: 'Light: Reflection & Refraction',
      progress: 75,
      image:
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800&auto=format&fit=crop',
      icon: BookOpen,
    },
    {
      subject: 'Mathematics',
      title: 'Trigonometry: Basic Ratios',
      progress: 30,
      image:
        'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=800&auto=format&fit=crop',
      icon: Calculator,
    },
    {
      subject: 'Urdu',
      title: 'Ghazal: Mirza Ghalib',
      progress: 60,
      image:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
      icon: Feather,
    },
  ];

  return (
    <section className="mt-14 relative">

      {/* Section Background Glow */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

      <div className="relative">

        <h3 className="text-2xl font-bold text-yellow-300 mb-8 tracking-wide">
          Continue Learning
        </h3>

        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                className="relative min-w-[320px] rounded-3xl overflow-hidden 
                           bg-gradient-to-br from-neutral-950 to-black
                           border border-yellow-500/10
                           shadow-xl hover:shadow-yellow-400/30
                           transition-all duration-500 cursor-pointer"
              >

                {/* Background Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-all duration-700 
                               group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

                  {/* Hover Yellow Glow */}
                  <motion.div
                    className="absolute inset-0 bg-yellow-500/0"
                    whileHover={{ backgroundColor: 'rgba(234,179,8,0.15)' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">

                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 15,
                        scale: 1.2,
                      }}
                      className="w-10 h-10 flex items-center justify-center
                                 rounded-full bg-yellow-500/10
                                 border border-yellow-400/20"
                    >
                      <Icon size={20} className="text-yellow-300" />
                    </motion.div>

                    <span className="text-sm text-yellow-400 font-semibold tracking-wide">
                      {course.subject}
                    </span>
                  </div>

                  <h4 className="text-white text-lg font-bold leading-snug">
                    {course.title}
                  </h4>

                  {/* Progress Bar */}
                  <div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-neutral-400 mt-2">
                      {course.progress}% completed
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
