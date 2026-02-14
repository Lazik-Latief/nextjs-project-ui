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
    <section className="mt-10">

      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold">
          My Subjects
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} {...subject} />
        ))}
      </div>

    </section>
  );
}
