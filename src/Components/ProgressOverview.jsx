"use client";

import { motion } from "framer-motion";

export default function ProgressOverview() {
  const progress = 68;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6 rounded-xl flex flex-col items-center text-center gap-4"
    >
      <div
        className="w-32 h-32 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(var(--accent) ${progress}%, var(--border-subtle) ${progress}%)`,
        }}
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ background: "var(--surface)" }}
        >
          <span
            className="text-xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {progress}%
          </span>
        </div>
      </div>

      <div
        className="px-4 py-1 rounded-full text-sm"
        style={{
          background: "var(--border-subtle)",
          color: "var(--text-secondary)",
        }}
      >
        112 / 250 Students
      </div>

      <h3
        className="font-semibold"
        style={{ color: "var(--accent)" }}
      >
        Excellent Progress!
      </h3>

      <p style={{ color: "var(--text-muted)" }}>
        Keep maintaining your streak and finish upcoming lessons on time.
      </p>
    </motion.div>
  );
}
