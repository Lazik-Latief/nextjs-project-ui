// // features/student/dashboard/components/Sidebar.jsx
// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Sidebar() {
//   const pathname = usePathname();

//   const items = [
//     { label: 'Dashboard', href: '/student/dashboard', icon: '📊' },
//     { label: 'My Subjects', href: '#', icon: '📘' },
//     { label: 'Continue Learning', href: '#', icon: '▶️' },
//     { label: 'Progress', href: '#', icon: '📈' },
//     { label: 'Library', href: '#', icon: '📚' },
//   ];

//   return (
//     <aside className="w-64 min-h-screen bg-black border-r border-yellow-500/10 p-6 flex flex-col">
//       <div className="mb-10">
//         <h1 className="text-yellow-400 font-bold text-xl tracking-wide">
//           KOSHUR
//         </h1>
//         <p className="text-md text-yellow-500/89">SCIENTIST</p>
//       </div>

//       <div className="mb-8 flex items-center gap-3 bg-neutral-900 rounded-xl p-3">
//         <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
//           L
//           {/* <img src="file.svg" alt="" srcset="" /> */}
//         </div>
//         <div>
//           <p className="text-sm font-medium text-white">Lazik</p>
//           <p className="text-xs text-neutral-400">Class 10 Student</p>
//         </div>
//       </div>

//       <nav className="flex flex-col gap-2">
//         {items.map((item, index) => {
//           const active = pathname === item.href;
//           return (
//             <Link
//               key={index}
//               href={item.href}
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
//                 active
//                   ? 'bg-yellow-400 text-black font-semibold'
//                   : 'text-neutral-400 hover:bg-neutral-900 hover:text-yellow-400'
//               }`}
//             >
//               <span>{item.icon}</span>
//               {item.label}
//             </Link>
//           );
//         })}
//       </nav>

//       <div className="mt-auto text-neutral-500 text-sm pt-10">
//         Sign Out
//       </div>
//     </aside>
//   );
// }


'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  BarChart3,
  Library,
  LogOut,
} from 'lucide-react';

/**
 * NOTE:
 * In future, fetch user data from API like this:
 *
 * const { data } = useGetStudentProfileQuery();
 *
 * <img src={data?.profileImage} alt={data?.name} />
 * <p>{data?.name}</p>
 *
 * For now we are using static data.
 */

export default function Sidebar() {
  const pathname = usePathname();

  // Static Data (Replace with API later)
  const student = {
    name: 'Lazik Latief',
    role: 'Class 10 Student',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  };

  const items = [
    {
      label: 'Dashboard',
      href: '/student/dashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'My Subjects',
      href: '#',
      icon: BookOpen,
    },
    {
      label: 'Continue Learning',
      href: '#',
      icon: PlayCircle,
    },
    {
      label: 'Progress',
      href: '#',
      icon: BarChart3,
    },
    {
      label: 'Library',
      href: '#',
      icon: Library,
    },
  ];

  return (
    <aside className="relative w-80 min-h-screen flex flex-col px-8 py-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border-r border-yellow-500/10 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
      />

      {/* Logo Section */}
      <div className="mb-14 relative z-10">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide">
          KOSHUR
        </h1>
        <p className="text-lg font-semibold text-neutral-300 tracking-wider">
          SCIENTIST
        </p>
      </div>

      {/* Profile Card */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative z-10 mb-12 flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
      >
        <motion.img
          whileHover={{ rotate: 5, scale: 1.05 }}
          src={student.image}
          alt={student.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-md"
        />
        <div>
          <p className="text-base font-bold text-white tracking-wide">
            {student.name}
          </p>
          <p className="text-sm text-neutral-400 font-medium">
            {student.role}
          </p>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 relative z-10">
        {items.map((item, index) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={item.href}
                className={`group flex items-center gap-4 px-5 py-3 rounded-2xl text-base font-semibold transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/30'
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    active
                      ? 'bg-black/20'
                      : 'bg-white/5 group-hover:bg-yellow-500/10'
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-all duration-300 ${
                      active
                        ? 'text-black'
                        : 'text-yellow-400 group-hover:text-yellow-300'
                    }`}
                  />
                </motion.div>

                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Sign Out */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-auto pt-12 text-neutral-400 text-base font-medium flex items-center gap-3 cursor-pointer hover:text-red-400 transition-all duration-300 relative z-10"
      >
        <LogOut size={20} />
        Sign Out
      </motion.div>
    </aside>
  );
}
