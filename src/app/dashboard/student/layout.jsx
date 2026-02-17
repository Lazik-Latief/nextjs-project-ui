'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import { Menu } from 'lucide-react';

export default function StudentLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-950 text-white relative">

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-50
                   bg-yellow-400 text-black
                   p-3 rounded-xl shadow-lg"
      >
        <Menu size={22} />
      </button>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto lg:ml-80">
        {children}
      </main>

    </div>
  );
}
