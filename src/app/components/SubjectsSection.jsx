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
    <section className="mt-6">

      <h3 className="text-2xl font-semibold mb-8">
        My Subjects
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} {...subject} />
        ))}
      </div>

    </section>
  );
}
