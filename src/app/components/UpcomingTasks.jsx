// features/student/dashboard/components/UpcomingTasks.jsx
'use client';

import TaskItem from './TaskItem';

export default function UpcomingTasks() {
  const tasks = [
    { title: 'Physics: Light Chapter Quiz', date: 'Today, 04:00 PM', priority: 'Urgent' },
    { title: 'History: Submission - Nationalism', date: 'Tomorrow, 11:00 AM', priority: 'Medium' },
    { title: 'Math: Practice Trigonometry Ratios', date: '25th Oct, 10:00 AM', priority: 'Low' },
  ];

  return (
    <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold text-lg">
          Upcoming Tasks
        </h3>
        <button className="text-sm text-yellow-400 hover:underline">
          View Calendar
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </div>
    </div>
  );
}
