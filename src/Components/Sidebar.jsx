'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '/dashboard' },
    { icon: '📚', label: 'Courses', href: '/courses' },
    { icon: '📈', label: 'Analytics', href: '/analytics' },
    { icon: '🏆', label: 'Achievements', href: '/achievements' },
    { icon: '👤', label: 'Profile', href: '/profile' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-neutral-950 border-r border-neutral-800 p-6 flex flex-col">
      
      {/* Logo / Header */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-yellow-400 tracking-wide">
          LMS Panel
        </h2>
        <p className="text-xs text-neutral-500 mt-1">
          Learning Workspace
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-200
                ${isActive
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'text-neutral-400 hover:bg-neutral-800 hover:text-yellow-400'}
              `}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-8 border-t border-neutral-800">
        <div className="text-xs text-neutral-500">
          © {new Date().getFullYear()} LMS System
        </div>
      </div>
    </aside>
  );
}
