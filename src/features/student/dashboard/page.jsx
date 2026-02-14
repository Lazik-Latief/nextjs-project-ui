// features/student/dashboard/page.jsx
'use client';

import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import StreakCard from './components/StreakCard';
import UrgentBanner from './components/UrgentBanner';
import ContinueLearning from './components/ContinueLearning';
import SubjectsSection from './components/SubjectsSection';
import ProgressCard from './components/ProgressCard';
import UpcomingTasks from './components/UpcomingTasks';

export default function StudentDashboardPage() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-start gap-8">
          <TopHeader />
          <StreakCard />
        </div>

        <UrgentBanner />
        <ContinueLearning />
        <SubjectsSection />

        <div className="grid xl:grid-cols-2 gap-8 mt-12">
          <ProgressCard />
          <UpcomingTasks />
        </div>
      </main>
    </div>
  );
}
