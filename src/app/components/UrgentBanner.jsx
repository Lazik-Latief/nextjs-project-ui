'use client';

export default function UrgentBanner() {
  return (
    <div className="relative rounded-3xl p-6 
                    bg-gradient-to-r from-yellow-500/10 to-yellow-400/5
                    border border-yellow-400/30
                    shadow-[0_0_40px_rgba(234,179,8,0.15)]">

      <div className="flex justify-between items-center">

        <div>
          <h3 className="text-yellow-400 font-semibold uppercase text-sm tracking-wide">
            Urgent Attention Required
          </h3>

          <p className="text-neutral-300 mt-2 text-sm">
            You are currently behind <span className="text-yellow-400 font-medium">109 students</span> in your batch.
          </p>
        </div>

        <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition">
          Catch Up Now
        </button>

      </div>
    </div>
  );
}
