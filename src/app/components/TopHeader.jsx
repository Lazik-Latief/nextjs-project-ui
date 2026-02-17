// 'use client';

// import { motion } from 'framer-motion';
// import {
//   BookOpen,
//   GraduationCap,
//   Library,
//   NotebookPen,
//   Pencil,
//   FileText,
//   ClipboardCheck,
//   School,
  
// } from 'lucide-react';
// export default function TopHeader() {
//   const icons = [ BookOpen,
//   GraduationCap,
//   School,
//   NotebookPen,
//   Pencil,];
//   return (
//     <header className="sticky top-0 z-40 w-full">

//       <div className="relative">

//         <h1 className="text-4xl font-bold tracking-tight">
//           Welcome back, <span className="text-yellow-400">Lazik</span> 👋
//         </h1>

//         <p className="text-neutral-400 mt-3 text-lg">
//           You're doing great! Today's goal:
//           <span className="text-yellow-400 font-medium"> Finish Light Reflection.</span>
//         </p>

//         {/* Fast glowing floating icon */}
//         {/* <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="absolute -right-16 top-2 mr-10"
//         >
//           <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/20">
//             <Sparkles className="text-yellow-400" size={22} />
//           </div>
//           <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/20">
//             <Sparkles className="text-yellow-400" size={22} />
//           </div>
//           <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center shadow-lg shadow-yellow-500/20">
//             <Sparkles className="text-yellow-400" size={22} />
//           </div>
//         </motion.div> */}

//  <motion.div
//       className="absolute right-10 top-4 flex gap-6"
//       animate={{ y: [0, -10, 0] }}
//       transition={{
//         duration: 1.4,
//         repeat: Infinity,
//         ease: 'easeInOut',
//       }}
//     >
//       {icons.map((Icon, index) => (
//         <div
//           key={index}
//           className="w-14 h-14 rounded-full 
//                      bg-gradient-to-br from-yellow-500/20 to-black
//                      border border-yellow-400/40
//                      flex items-center justify-center
//                      shadow-lg shadow-yellow-500/30
//                      backdrop-blur-md
//                      transition-all duration-300
//                      hover:scale-110 hover:-translate-y-2
//                      hover:shadow-yellow-400/60"
//         >
//           <Icon className="text-yellow-400" size={24} />
//         </div>
//       ))}
//     </motion.div>
//       </div>
//     </header>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  School,
  NotebookPen,
  Pencil,
} from 'lucide-react';

export default function TopHeader() {
  const icons = [
    BookOpen,
    GraduationCap,
    School,
    NotebookPen,
    Pencil,
  ];

  return (
    <header className="sticky top-0 z-40 w-full"
      // className="
      //   sticky top-0 z-50 
      //   w-full
      //   bg-neutral-950/80
      //   backdrop-blur-lg
      //   border-b border-neutral-800
      // "
    >
      <div className="relative max-w-7xl mx-auto px-6 py-6">

        {/* Text Section */}
        <div className="pr-48 lg:pr-56">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Welcome back,{' '}
            <span className="text-yellow-400">Lazik</span> 👋
          </h1>

          <p className="text-neutral-400 mt-3 text-base md:text-lg">
            You're doing great! Today's goal:
            <span className="text-yellow-400 font-medium">
              {' '}Finish Light Reflection.
            </span>
          </p>
        </div>

        {/* Floating Icons - Hidden on small screens */}
        <motion.div
          className="
            absolute right-6 top-1/2 -translate-y-1/2
            hidden lg:flex
            gap-5
          "
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="
                w-12 h-12
                rounded-full
                bg-gradient-to-br from-yellow-500/20 to-neutral-900
                border border-yellow-400/40
                flex items-center justify-center
                shadow-lg shadow-yellow-500/20
                backdrop-blur-md
                transition-all duration-300
                hover:scale-110 hover:-translate-y-2
                hover:shadow-yellow-400/60
              "
            >
              <Icon className="text-yellow-400" size={20} />
            </div>
          ))}
        </motion.div>

      </div>
    </header>
  );
}
