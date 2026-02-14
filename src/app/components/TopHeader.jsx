// features/student/dashboard/components/TopHeader.jsx
'use client';

export default function TopHeader() {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Welcome back, Lazik 👋
        </h2>
        <p className="text-neutral-400 mt-2">
          You are doing great! Todays goal: Finish Light Reflection.
        </p>
      </div>
    </div>
  );
}
