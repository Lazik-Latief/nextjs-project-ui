'use client';

import Sidebar from "@/app/components/Sidebar";
import SubjectsSection from "@/app/components/SubjectsSection";

export default function SubjectsPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">

    
      {/* Main Content */}
      <main className="flex-1 px-16 py-14">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-yellow-400 tracking-wide">
            My Subjects
          </h1>

          <div className="w-32 h-1 bg-yellow-500 mt-4 rounded-full" />

          <p className="text-neutral-400 mt-6 text-lg">
            Explore all your enrolled subjects and continue your learning journey.
          </p>
        </div>

        {/* Subjects Container */}
        <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 
                        border border-yellow-500/20 
                        rounded-3xl 
                        p-14 
                        shadow-2xl 
                        shadow-yellow-500/10">

          <SubjectsSection />

        </div>

      </main>
    </div>
  );
}
