// features/student/dashboard/components/SubjectCard.jsx
'use client';

export default function SubjectCard({ name, lessons }) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 hover:shadow-lg transition">
      <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 text-xl mb-4">
        📘
      </div>
      <h4 className="text-white font-semibold">{name}</h4>
      <p className="text-neutral-400 text-sm mt-1">{lessons} Lessons</p>
    </div>
  );
}
