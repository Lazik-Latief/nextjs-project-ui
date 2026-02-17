// features/student/dashboard/page.jsx
'use client';

import Sidebar from '../../components/Sidebar';
import TopHeader from '../../components/TopHeader';
import StreakCard from '../../components/StreakCard';
import UrgentBanner from '../../components/UrgentBanner';
import ContinueLearning from '../../components/ContinueLearning';
import SubjectsSection from '../../components/SubjectsSection';
import ProgressCard from '../../components/ProgressCard';
import UpcomingTasks from '../../components/UpcomingTasks';

export default function StudentDashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0b0b0c] text-white">

      {/* Subtle yellow glow background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-yellow-500/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-400/5 blur-[160px] rounded-full" />
      </div>

      <Sidebar />

      <main className="flex-1 px-14 py-10 space-y-10 overflow-y-auto">

        <div className="flex justify-between items-start">
          <TopHeader />
          
        </div>
        <div>
          <UrgentBanner />
          
        </div>

        
        <ContinueLearning />
        <SubjectsSection />

        <div className="grid xl:grid-cols-2 gap-10">
          <ProgressCard />
          <UpcomingTasks />
        </div>

      </main>
    </div>
  );
}
