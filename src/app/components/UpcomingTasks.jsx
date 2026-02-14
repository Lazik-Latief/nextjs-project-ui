'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Clock,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export default function UpcomingTasks() {
  const tasks = [
    {
      title: 'Physics: Light Chapter Quiz',
      date: 'Today, 04:00 PM',
      priority: 'Urgent',
    },
    {
      title: 'History: Submission - The Rise of Nationalism',
      date: 'Tomorrow, 11:00 AM',
      priority: 'Medium',
    },
    {
      title: 'Math: Practice Trigonometry Ratios',
      date: '25th Oct, 10:00 AM',
      priority: 'Low',
    },
  ];

  const getPriorityStyle = (priority) => {
    if (priority === 'Urgent') {
      return {
        icon: AlertTriangle,
        color: 'text-red-400',
        bg: 'from-red-500/20 to-orange-500/10',
        border: 'border-red-500/30',
        badge: 'bg-red-500/20 text-red-400',
        glow: 'shadow-red-500/30',
      };
    }
    if (priority === 'Medium') {
      return {
        icon: Clock,
        color: 'text-yellow-400',
        bg: 'from-yellow-400/20 to-amber-500/10',
        border: 'border-yellow-400/30',
        badge: 'bg-yellow-500/20 text-yellow-400',
        glow: 'shadow-yellow-500/30',
      };
    }
    return {
      icon: CheckCircle2,
      color: 'text-green-400',
      bg: 'from-green-500/20 to-emerald-500/10',
      border: 'border-green-500/30',
      badge: 'bg-green-500/20 text-green-400',
      glow: 'shadow-green-500/30',
    };
  };

  return (
    <div
      className="relative rounded-3xl p-8 overflow-hidden
                 bg-gradient-to-br from-neutral-900 to-black
                 border border-white/10
                 shadow-[0_0_40px_rgba(234,179,8,0.1)]"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 blur-3xl" />

      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <Zap className="text-yellow-400" size={20} />
          <h3 className="text-xl font-semibold text-white">
            Upcoming Missions
          </h3>
        </div>

        <button className="text-sm text-neutral-400 hover:text-yellow-400 transition">
          View Calendar →
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-6 relative z-10">
        {tasks.map((task, index) => {
          const style = getPriorityStyle(task.priority);
          const Icon = style.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`relative flex items-center justify-between
                          rounded-2xl px-6 py-5
                          bg-gradient-to-r ${style.bg}
                          border ${style.border}
                          backdrop-blur-md
                          shadow-lg ${style.glow}
                          transition-all duration-300`}
            >
              {/* Left Content */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                              bg-black/50 border border-white/10`}
                >
                  <Icon className={style.color} size={18} />
                </div>

                <div>
                  <p className="font-medium text-white">
                    {task.title}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    {task.date}
                  </p>
                </div>
              </div>

              {/* Priority Badge */}
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${style.badge}`}
              >
                {task.priority}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
