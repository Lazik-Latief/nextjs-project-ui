'use client';

import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function UpcomingTasks() {
  const tasks = [
    { title: 'Physics: Light Chapter Quiz', date: 'Today, 04:00 PM', priority: 'Urgent' },
    { title: 'History: Submission - The Rise of Nationalism', date: 'Tomorrow, 11:00 AM', priority: 'Medium' },
    { title: 'Math: Practice Trigonometry Ratios', date: '25th Oct, 10:00 AM', priority: 'Low' },
  ];

  const getIcon = (priority) => {
    if (priority === 'Urgent') return <AlertCircle className="text-red-400" size={18} />;
    if (priority === 'Medium') return <Clock className="text-blue-400" size={18} />;
    return <CheckCircle2 className="text-green-400" size={18} />;
  };

  return (
    <div className="bg-[#111112] border border-white/5 rounded-3xl p-8">

      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-semibold">Upcoming Tasks</h3>
        <button className="text-sm text-neutral-400 hover:text-yellow-400 transition">
          View Calendar
        </button>
      </div>

      <div className="space-y-6">

        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between 
                       bg-black/40 border border-white/5
                       rounded-2xl px-5 py-4
                       hover:border-yellow-400/20
                       transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              {getIcon(task.priority)}
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-neutral-500 text-sm">{task.date}</p>
              </div>
            </div>

            <span className={`text-xs px-3 py-1 rounded-full 
              ${task.priority === 'Urgent' && 'bg-red-500/20 text-red-400'}
              ${task.priority === 'Medium' && 'bg-blue-500/20 text-blue-400'}
              ${task.priority === 'Low' && 'bg-green-500/20 text-green-400'}
            `}>
              {task.priority}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
