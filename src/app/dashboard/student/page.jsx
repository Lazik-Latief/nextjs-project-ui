'use client';

import TopHeader from '@/app/components/TopHeader';
import UrgentBanner from '@/app/components/UrgentBanner';
import ContinueLearning from '@/app/components/ContinueLearning';
import SubjectsSection from '@/app/components/SubjectsSection';
import ProgressCard from '@/app/components/ProgressCard';
import UpcomingTasks from '@/app/components/UpcomingTasks';
import Sidebar from '@/app/components/Sidebar';

export default function StudentDashboardPage() {
  return (
    <>
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-yellow-500/5 blur-[140px] md:blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-400/5 blur-[120px] md:blur-[160px] rounded-full" />
      </div>

          
            
            
           

      <div className="space-y-8 md:space-y-10">
        
        <TopHeader />

        <UrgentBanner />

        <ContinueLearning />

        <SubjectsSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <ProgressCard />
          <UpcomingTasks />
        </div>

      </div>
       
    </>
  );
}
