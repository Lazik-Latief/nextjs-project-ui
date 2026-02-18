'use client';

import { useParams } from 'next/navigation';
import { Play, Lock, CheckCircle } from 'lucide-react';
import { coursesData } from '../data';

export default function CoursePage() {
  const { slug } = useParams();

  const course = coursesData.find((c) => c.slug === slug);

  if (!course) return null;

  return (
    <div className="space-y-4">

      {course.lectures.map((lecture, index) => (
        <div
          key={lecture.id}
          className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex justify-between items-center hover:border-yellow-400/40 transition"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-sm text-neutral-400">
              {index + 1}
            </div>

            <div>
              <h3 className="font-semibold">
                {lecture.title}
              </h3>
              <p className="text-sm text-neutral-400">
                {lecture.duration}
              </p>
            </div>
          </div>

          {lecture.status === 'completed' && (
            <CheckCircle className="text-green-500" />
          )}

          {lecture.status === 'current' && (
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:scale-105 transition">
              <Play size={16} />
              Watch
            </button>
          )}

          {lecture.status === 'locked' && (
            <Lock className="text-neutral-600" />
          )}
        </div>
      ))}

    </div>
  );
}
