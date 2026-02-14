// features/student/dashboard/components/TaskItem.jsx
'use client';

export default function TaskItem({ title, date, priority }) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 flex justify-between items-center hover:bg-neutral-800 transition">
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-neutral-400 text-xs mt-1">{date}</p>
      </div>
      <span className="text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold">
        {priority}
      </span>
    </div>
  );
}
