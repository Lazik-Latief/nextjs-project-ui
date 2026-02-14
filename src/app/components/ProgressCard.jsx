'use client';

import { motion } from 'framer-motion';
import { Flame, Trophy, TrendingUp, AlertTriangle } from 'lucide-react';

export default function ProgressCard({ progress = 68, rank = 112, total = 250 }) {
  const percentage = progress;

  const getStatus = () => {
    if (percentage < 50) {
      return {
        color: 'from-red-500 to-orange-500',
        border: 'border-red-500/40',
        icon: AlertTriangle,
        title: 'Push Harder!',
        quote: 'Champions are built when no one is watching.',
        badge: 'Behind Target',
      };
    } else if (percentage < 75) {
      return {
        color: 'from-yellow-400 to-orange-500',
        border: 'border-yellow-400/40',
        icon: Flame,
        title: 'You’re Heating Up!',
        quote: 'Stay consistent. You’re closer than you think.',
        badge: 'On Track',
      };
    } else {
      return {
        color: 'from-green-400 to-emerald-500',
        border: 'border-green-400/40',
        icon: Trophy,
        title: 'Dominating!',
        quote: 'Top performers don’t wait. They lead.',
        badge: 'Above Average',
      };
    }
  };

  const status = getStatus();
  const Icon = status.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative rounded-3xl p-8 text-center overflow-hidden
                  bg-gradient-to-br from-neutral-900 to-black
                  border ${status.border}
                  shadow-[0_0_40px_rgba(234,179,8,0.15)]`}
    >
      {/* Animated Glow Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${status.color} opacity-10 blur-3xl`} />

      {/* Progress Circle */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        <div
          className="w-full h-full rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(#eab308 ${percentage * 3.6}deg, #1f1f1f 0deg)`,
          }}
        >
          <div className="w-32 h-32 rounded-full bg-black flex flex-col items-center justify-center">
            <span className="text-white text-3xl font-bold">
              {percentage}%
            </span>
            <TrendingUp className="text-yellow-400 mt-1" size={18} />
          </div>
        </div>
      </div>

      {/* Rank Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
                      bg-white/5 border border-white/10 mb-5">
        <Icon size={16} className="text-yellow-400" />
        <span className="text-sm text-white">
          Rank: {rank}/{total}
        </span>
      </div>

      {/* Status Title */}
      <h3 className="text-white text-xl font-semibold mb-2">
        {status.title}
      </h3>

      {/* Motivational Quote */}
      <p className="text-neutral-400 text-sm italic">
        "{status.quote}"
      </p>
    </motion.div>
  );
}
