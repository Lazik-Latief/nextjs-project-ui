// features/student/dashboard/components/ProgressCard.jsx
'use client';

export default function ProgressCard() {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
      <div className="relative w-32 h-32 mb-6">
        <div className="w-full h-full rounded-full border-[10px] border-yellow-400 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">68%</span>
        </div>
      </div>
      <p className="text-red-400 text-sm bg-red-500/10 px-4 py-1 rounded-full mb-4">
        Rank: 112/250 Students
      </p>
      <h4 className="text-white font-semibold text-lg">
        Excellent Progress!
      </h4>
      <p className="text-neutral-400 text-sm mt-2">
        You are 12% ahead of your weekly target schedule.
      </p>
    </div>
  );
}
