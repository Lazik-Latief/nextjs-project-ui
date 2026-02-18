'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Play, CheckCircle } from 'lucide-react';

/*
==================================================
MY COURSES PAGE – PREMIUM VERSION
Location: app/myCourses/page.jsx

- No header section
- Big premium tab buttons
- Strong luxury UI
- Click leads to /courses/[id]
- Fully responsive
==================================================
*/

export default function MyCoursesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');

  /*
    Replace later with API:
    const { data } = useGetMyCoursesQuery()
  */
  const courses = [
    {
      id: 1,
      title: 'Mastering Advanced UI/UX Design Systems',
      batch: 'Batch Alpha 2024',
      progress: 75,
      status: 'ongoing',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    },
    {
      id: 2,
      title: 'Fullstack React Development & Architecture',
      batch: 'Batch Sigma 2024',
      progress: 30,
      status: 'ongoing',
      image: 
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',

    },
    {
      id: 3,
      title: 'Luxury Brand Strategy & Identity',
      batch: 'Batch Delta 2023',
      progress: 100,
      status: 'completed',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    },
  ];

  const filtered =
    activeTab === 'all'
      ? courses
      : courses.filter((c) => c.status === activeTab);

  return (
    <div className="min-h-full bg-[#0b0b0c] text-white px-6 md:px-10 xl:px-16 py-12">

      {/* ================= BIG FILTER BUTTONS ================= */}
      <div className="flex flex-wrap gap-5 mb-14">
        {[
          { key: 'all', label: 'All Courses' },
          { key: 'ongoing', label: 'Ongoing' },
          { key: 'completed', label: 'Completed' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              px-8 py-3
              rounded-2xl
              text-sm md:text-base
              font-semibold
              transition-all duration-300
              ${
                activeTab === tab.key
                  ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-500/30 scale-105'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-yellow-400/50 hover:text-white'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= COURSES GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">

        {filtered.map((course) => (
          <div
            key={course.id}
            className="
              group
              relative
              bg-gradient-to-br from-neutral-900 to-black
              border border-neutral-800
              rounded-3xl
              overflow-hidden
              hover:border-yellow-400/40
              hover:shadow-2xl hover:shadow-yellow-500/10
              transition-all duration-500
            "
          >
            {/* ===== IMAGE ===== */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* ===== CONTENT ===== */}
            <div className="p-7 flex flex-col">

              <h3 className="text-xl font-bold mb-1 tracking-tight">
                {course.title}
              </h3>

              <p className="text-neutral-400 text-sm mb-6">
                {course.batch}
              </p>

              {/* ===== PROGRESS ===== */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-neutral-400 mb-2">
                  <span>Progress</span>
                  <span className="text-yellow-400 font-semibold">
                    {course.progress}%
                  </span>
                </div>

                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-yellow-400 transition-all duration-700"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* ===== ACTION BUTTON ===== */}
              <button
                onClick={() => router.push(`/courses/${course.id}`)}
                className={`
                  w-full
                  flex items-center justify-center gap-2
                  py-3 rounded-xl
                  font-semibold
                  transition-all duration-300
                  ${
                    course.status === 'completed'
                      ? 'bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                      : 'bg-yellow-400 text-black hover:scale-[1.03] shadow-lg shadow-yellow-500/20'
                  }
                `}
              >
                {course.status === 'completed' ? (
                  <>
                    <CheckCircle size={18} />
                    View Course
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    Continue Learning
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* bottom spacing */}
      <div className="h-20" />
    </div>
  );
}
