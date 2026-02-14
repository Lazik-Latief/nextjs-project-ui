"use client";
import React from "react";




export default function Header() {
    return (
        <header className="bg-black text-white px-6 py-4">
            <div className="flex items-center justify-between gap-4">
                {/* Welcome Message */}
                <div className="text-2xl font-bold">Welcome back, Lazik 👋</div>

                {/* Right Side Container */}
                <div className="flex items-center gap-4">
                    {/* Study Streak */}
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                        🔥 Study Streak: 7 days
                    </div>

                    {/* Urgent Attention Bar */}
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg flex items-center gap-3 font-semibold">
                        <span>⚠️ You are behind 190 students in your batch</span>
                        <button className="bg-black text-yellow-400 px-3 py-1 rounded font-bold hover:bg-gray-800 transition">
                            Catch up now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}