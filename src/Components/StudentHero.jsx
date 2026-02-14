"use client";

import { motion } from "framer-motion";

export default function StudentHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row justify-between gap-6"
    >
      <div>
        <h1
          className="text-3xl font-semibold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Welcome back, Lazik 👋
        </h1>
        <p
          className="mt-2"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          You are doing great! Todays goal: Finish Light Reflection.
        </p>
      </div>

      <div
        className="card p-6 rounded-xl flex items-center justify-center relative"
        style={{ minWidth: "180px" }}
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-center"
          style={{
            background: "conic-gradient(var(--accent) 70%, transparent 70%)",
            boxShadow: "0 0 20px rgba(255, 204, 0, 0.25)",
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: "var(--surface)", color: "var(--text-primary)" }}
          >
            <div>
              <div className="text-lg font-semibold">5</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Days
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
