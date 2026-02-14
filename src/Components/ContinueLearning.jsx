"use client";

import { motion } from "framer-motion";

const courses = [
  { subject: "Science", title: "Light Reflection", progress: 60 },
  { subject: "Math", title: "Quadratic Equations", progress: 45 },
  { subject: "Urdu", title: "Nazm Analysis", progress: 80 },
];

export default function ContinueLearning() {
  return (
    <div className="flex flex-col gap-6">
      <h2
        className="text-xl font-semibold"
        style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
      >
        Continue Learning
      </h2>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="card p-6 min-w-[280px] snap-start rounded-xl flex flex-col gap-4"
          >
            <span
              className="text-xs"
              style={{ color: "var(--accent)" }}
            >
              {course.subject}
            </span>

            <h3
              className="font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {course.title}
            </h3>

            <div className="w-full h-2 rounded-full"
              style={{ background: "var(--border-subtle)" }}>
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${course.progress}%`,
                  background: "var(--accent)",
                }}
              />
            </div>

            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              {course.progress}% Complete
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
