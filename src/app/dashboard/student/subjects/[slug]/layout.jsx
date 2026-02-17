'use client';

import Link from "next/link";
import { subjects } from "@/lib/data/subjects";
import {
  Bell,
  User,
  ArrowLeft,
  Play,
  Lock,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { notFound } from "next/navigation";

export default async function SubjectLayout({ children, params }) {
  const { slug } = await params;

  const subject = subjects.find((s) => s.slug === slug);
  if (!subject) return notFound();

  const totalLectures = subject.lectures.length;
  const completedLectures = subject.lectures.filter(
    (lec) => lec.status === "completed"
  ).length;

  const completionPercentage = Math.round(
    (completedLectures / totalLectures) * 100
  );

  return (
    <>

      {/* ================= NAVBAR ================= */}
      <header className="flex items-center justify-between
                         px-4 md:px-8 lg:px-10
                         py-4 md:py-6
                         border-b border-zinc-800">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
            Σ
          </div>
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            Koshur Scientist
          </h1>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Bell className="w-5 h-5 text-zinc-400 hover:text-yellow-400 cursor-pointer transition" />
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-800 flex items-center justify-center">
            <User className="w-5 h-5 text-zinc-400" />
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="px-4 md:px-8 lg:px-10 py-6 md:py-8 max-w-6xl mx-auto">

        {/* Back */}
        <Link
          href="/dashboard/student/subjects"
          className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 mb-6 md:mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Subjects
        </Link>

        {/* ================= SUBJECT HERO ================= */}
        <div className="rounded-3xl bg-gradient-to-r from-yellow-500/20 to-zinc-900
                        border border-yellow-500/20
                        p-6 md:p-10
                        mb-10 md:mb-12 shadow-lg">

          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

            {/* Left */}
            <div className="flex gap-5 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center text-black text-2xl md:text-3xl font-bold shadow-lg">
                {subject.title.charAt(0)}
              </div>

              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {subject.title}
                </h2>
                <p className="text-zinc-400 text-sm md:text-base">
                  Instructor:{" "}
                  <span className="text-white font-medium">
                    {subject.instructor}
                  </span>
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">

              <div className="bg-zinc-900/70 px-5 py-4 rounded-2xl border border-zinc-800">
                <p className="text-xs text-zinc-400 uppercase tracking-wider">
                  Total Lectures
                </p>
                <p className="text-xl md:text-2xl font-bold text-yellow-400">
                  {totalLectures}
                </p>
              </div>

              <div className="bg-zinc-900/70 px-5 py-4 rounded-2xl border border-zinc-800">
                <p className="text-xs text-zinc-400 uppercase tracking-wider">
                  Completion
                </p>
                <p className="text-xl md:text-2xl font-bold text-yellow-400">
                  {completionPercentage}%
                </p>
              </div>

            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 md:mt-10">
            <div className="flex justify-between text-xs md:text-sm text-zinc-400 mb-2">
              <span>Overall Course Progress</span>
              <span>
                {completedLectures} / {totalLectures} Lectures Finished
              </span>
            </div>

            <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
              <div
                className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* ================= CURRICULUM ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
            Curriculum
          </h3>

          <span className="text-xs md:text-sm bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-zinc-400">
            Academic Year {subject.academicYear}
          </span>
        </div>

        {/* Lecture List */}
        <div className="space-y-4 mb-12 md:mb-16">
          {subject.lectures.map((lecture) => (
            <div
              key={lecture.id}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between
                          gap-4
                          p-5 md:p-6
                          rounded-2xl border transition
                          ${
                            lecture.status === "next"
                              ? "border-yellow-400 bg-yellow-400/10"
                              : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                          }`}
            >
              <div className="flex items-center gap-4">
                {lecture.status === "completed" && (
                  <CheckCircle className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
                )}
                {lecture.status === "next" && (
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full" />
                )}
                {lecture.status === "locked" && (
                  <Lock className="text-zinc-500 w-5 h-5 md:w-6 md:h-6" />
                )}

                <div>
                  <h4 className="font-semibold text-base md:text-lg">
                    {lecture.id}. {lecture.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400">
                    {lecture.duration}
                  </p>
                </div>
              </div>

              <button
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition
                  ${
                    lecture.status === "locked"
                      ? "bg-zinc-800 text-zinc-500"
                      : "bg-yellow-400 text-black hover:scale-105"
                  }`}
              >
                {lecture.status === "locked" ? (
                  <Lock className="w-4 h-4 md:w-5 md:h-5" />
                ) : (
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* ================= ASSIGNMENT ================= */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl
                        p-6 md:p-8
                        flex flex-col md:flex-row md:justify-between md:items-center
                        gap-6">
          <div>
            <p className="text-yellow-400 font-semibold mb-1">
              Upcoming Assignment
            </p>
            <p className="text-zinc-300 text-sm md:text-base">
              {subject.upcomingAssignment}
            </p>
          </div>

          <button className="bg-yellow-400 text-black px-6 md:px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Review Resources
          </button>
        </div>

        <div className="mt-14 md:mt-16">{children}</div>

        <footer className="text-center text-zinc-600 text-xs md:text-sm mt-16 pb-10">
          © 2024 KOSHUR SCIENTIST • {subject.title.toUpperCase()} DEPARTMENT
        </footer>
      </div>
    </>
  );
}
