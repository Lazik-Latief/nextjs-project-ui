// features/student/dashboard/components/ContinueLearning.jsx
'use client';

import CourseCard from './CourseCard';

export default function ContinueLearning() {
  const courses = [
    { subject: 'Science', title: 'Light: Reflection & Refraction', progress: 75 },
    { subject: 'Mathematics', title: 'Trigonometry: Basic Ratios', progress: 30 },
    { subject: 'Urdu', title: 'Ghazal: Mirza Ghalib', progress: 60 },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-white text-xl font-semibold mb-6">
        Continue Learning
      </h3>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
