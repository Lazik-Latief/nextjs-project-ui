// features/student/dashboard/components/CourseCard.jsx
'use client';

export default function CourseCard({ subject, title, progress }) {
  return (
    <div className="min-w-[320px] bg-neutral-900 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
      <span className="text-xs bg-yellow-400 text-black px-3 py-1 rounded-full">
        {subject}
      </span>
      <h3 className="text-white text-lg font-semibold mt-4">{title}</h3>

      <div className="w-full h-2 bg-neutral-800 rounded-full mt-6">
        <div
          className="h-2 bg-yellow-400 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-xs text-yellow-400 mt-2">{progress}% Complete</p>
    </div>
  );
}
