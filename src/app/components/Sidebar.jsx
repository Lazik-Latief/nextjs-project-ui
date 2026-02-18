'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  BarChart3,
  Library,
  LogOut,
  X,
} from 'lucide-react';

export default function Sidebar({ open, setOpen }) {
  const pathname = usePathname();

  const items = [
    { label: 'Dashboard', href: '/dashboard/student', icon: LayoutDashboard },
    { label: 'My Courses', href: '/dashboard/student/myCourses', icon: Library },
    { label: 'My Subjects', href: '/dashboard/student/subjects', icon: BookOpen },
    { label: 'Continue Learning', href: '#', icon: PlayCircle },
    { label: 'Progress', href: '#', icon: BarChart3 },
    { label: 'Library', href: '#', icon: Library },
  ];

  return (
    <>
      {/* Overlay (Mobile Only) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        className={`
          fixed top-0 left-0
          w-80 h-screen
          z-50
          bg-gradient-to-b from-neutral-950 via-black to-neutral-900
          border-r border-yellow-500/20
          flex flex-col
          px-6 py-8
          transform transition-transform duration-300 ease-in-out

          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Close Button (Mobile) */}
        <div className="flex justify-end lg:hidden mb-6">
          <button
            onClick={() => setOpen(false)}
            className="text-neutral-400 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Logo */}
        <div className="mb-14">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            KOSHUR
          </h1>
          <p className="text-neutral-400 text-sm tracking-widest">
            SCIENTIST
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-5">
          {items.map((item, index) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    group relative flex items-center gap-5
                    px-6 py-5 rounded-2xl
                    text-lg font-semibold
                    transition-all duration-300
                    overflow-hidden
                    ${
                      active
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-2xl shadow-yellow-500/40'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                                  bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl" />

                  <Icon
                    size={26}
                    className={`relative z-10 ${
                      active
                        ? 'text-black'
                        : 'text-yellow-400 group-hover:text-yellow-300'
                    }`}
                  />

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Sign Out */}
        <div className="mt-auto pt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 px-6 py-4
                       rounded-2xl bg-red-500/10
                       text-red-400 hover:bg-red-500/20
                       transition cursor-pointer"
          >
            <LogOut size={22} />
            <span className="text-lg font-medium">Sign Out</span>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}
