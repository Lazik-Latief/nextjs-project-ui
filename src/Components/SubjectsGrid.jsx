"use client";

const subjects = [
  { name: "English", lessons: 24 },
  { name: "Math", lessons: 48 },
  { name: "Science", lessons: 36 },
  { name: "History", lessons: 18 },
  { name: "Urdu", lessons: 22 },
];

export default function SubjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
      {subjects.map((subject, i) => (
        <div key={i} className="card p-6 rounded-xl hover:shadow-lg transition">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
            style={{ background: "var(--accent)" }}
          >
            📘
          </div>
          <h3
            className="font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {subject.name}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {subject.lessons} Lessons
          </p>
        </div>
      ))}
    </div>
  );
}
