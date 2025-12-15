// Home.jsx
// Tailwind CSS — same dark gradient theme, matches LoginPage styling
// Simple hero section for a Task Manager dashboard

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-gray-800 text-gray-100 px-6 py-10 flex flex-col items-center">

      {/* HERO SECTION */}
      <div className="max-w-3xl text-center mt-10">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent from-indigo-400 to-pink-500 drop-shadow">
          Your Tasks. Your Flow. Your Control.
        </h1>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          Welcome to your personal task manager. Organize your day, crush deadlines,
          and stay ahead without the chaos. Everything you need, in one clean dashboard.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-full max-w-5xl">
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-400">✔ Manage Tasks</h2>
          <p className="mt-2 text-gray-400">Create, update, and complete tasks with ease.</p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-400">📊 Stay Organized</h2>
          <p className="mt-2 text-gray-400">Track progress and never miss an important task.</p>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="mt-16">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition rounded-lg font-semibold shadow-md">
          Go to Dashboard
        </button>
      </div>

    </div>
  );
}
