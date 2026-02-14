// features/student/dashboard/components/Sidebar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const items = [
    { label: 'Dashboard', href: '/student/dashboard', icon: '📊' },
    { label: 'My Subjects', href: '#', icon: '📘' },
    { label: 'Continue Learning', href: '#', icon: '▶️' },
    { label: 'Progress', href: '#', icon: '📈' },
    { label: 'Library', href: '#', icon: '📚' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-black border-r border-yellow-500/10 p-6 flex flex-col">
      <div className="mb-10">
        <h1 className="text-yellow-400 font-bold text-xl tracking-wide">
          KOSHUR
        </h1>
        <p className="text-xs text-yellow-500/70">SCIENTIST</p>
      </div>

      <div className="mb-8 flex items-center gap-3 bg-neutral-900 rounded-xl p-3">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
          L
        </div>
        <div>
          <p className="text-sm font-medium text-white">Lazik</p>
          <p className="text-xs text-neutral-400">Class 10 Student</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {items.map((item, index) => {
          const active = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                active
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'text-neutral-400 hover:bg-neutral-900 hover:text-yellow-400'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto text-neutral-500 text-sm pt-10">
        Sign Out
      </div>
    </aside>
  );
}
