// features/student/dashboard/components/StreakCard.jsx
'use client';

export default function StreakCard() {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 flex items-center gap-4 shadow-lg border border-yellow-500/10">
      <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center text-yellow-400 text-xl">
        🔥
      </div>
      <div>
        <p className="text-xs text-neutral-400 uppercase tracking-wide">
          Learning Streak
        </p>
        <p className="text-white text-lg font-semibold">5 Days</p>
      </div>
    </div>
  );
}
