// features/student/dashboard/components/SubjectsSection.jsx
'use client';

import SubjectCard from './SubjectCard';

export default function SubjectsSection() {
  const subjects = [
    { name: 'English', lessons: 24 },
    { name: 'Math', lessons: 48 },
    { name: 'Science', lessons: 36 },
    { name: 'History', lessons: 18 },
    { name: 'Urdu', lessons: 22 },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-white text-xl font-semibold mb-6">My Subjects</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} {...subject} />
        ))}
      </div>
    </div>
  );
}
