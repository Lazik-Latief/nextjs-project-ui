"use client";

import { motion } from "framer-motion";

export default function UrgentAlert() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl p-6 border"
      style={{
        borderColor: "var(--accent)",
        background: "linear-gradient(135deg, var(--surface), rgba(255,204,0,0.05))",
        boxShadow: "0 0 30px rgba(255, 204, 0, 0.15)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div>
          <h3
            className="font-semibold"
            style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}
          >
            URGENT ATTENTION REQUIRED
          </h3>
          <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
            You are currently behind 109 students in your batch.
          </p>
        </div>
        <button className="btn-primary">Catch Up Now</button>
      </div>
    </motion.div>
  );
}
