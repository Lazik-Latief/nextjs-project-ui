// features/student/dashboard/components/UrgentBanner.jsx
'use client';

export default function UrgentBanner() {
  return (
    <div className="mt-6 bg-yellow-500/10 border border-yellow-400 rounded-2xl p-6 flex justify-between items-center shadow-lg">
      <div>
        <h3 className="text-yellow-400 font-semibold text-sm uppercase">
          Urgent Attention Required
        </h3>
        <p className="text-neutral-300 text-sm mt-2">
          You are currently behind 109 students in your batch.
        </p>
      </div>
      <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-300 transition">
        Catch Up Now
      </button>
    </div>
  );
}
