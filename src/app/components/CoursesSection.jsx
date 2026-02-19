'use client';

import { useRouter } from "next/navigation";
import { CheckCircle, Play } from "lucide-react";
import { coursesData } from "@/app/dashboard/student/courses/data";

export default function CoursesSection() {
  const router = useRouter();

  // If you don’t actually have filters yet
  const filtered = coursesData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">

      {filtered.map((course) => {
        const isCompleted = course.progress === 100;

        return (
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

              <h3 className="text-xl font-bold mb-1 tracking-tight text-white">
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
                onClick={() =>
                  router.push(`/dashboard/student/courses/${course.slug}`)
                }
                className={`
                  w-full
                  flex items-center justify-center gap-2
                  py-3 rounded-xl
                  font-semibold
                  transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                      : 'bg-yellow-400 text-black hover:scale-[1.03] shadow-lg shadow-yellow-500/20'
                  }
                `}
              >
                {isCompleted ? (
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
        );
      })}

    </div>
  );
}
