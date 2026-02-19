// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// import { BookOpen, Calculator, Feather } from 'lucide-react';

// export default function ContinueLearning() {
//   const router = useRouter();

//   const courses = [
//     {
//       subject: 'Science',
//       slug: 'science',
//       title: 'Light: Reflection & Refraction',
//       progress: 75,
//       image:
//         'https://plus.unsplash.com/premium_photo-1690297971716-6bbf8ea1d736?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       icon: BookOpen,
//     },
//     {
//       subject: 'Mathematics',
//       slug: 'mathematics',
//       title: 'Trigonometry: Basic Ratios',
//       progress: 30,
//       image:
//         'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=800&auto=format&fit=crop',
//       icon: Calculator,
//     },
//     {
//       subject: 'Urdu',
//       slug: 'urdu',
//       title: 'Ghazal: Mirza Ghalib',
//       progress: 60,
//       image:
//         'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
//       icon: Feather,
//     },
//   ];

//   return (
//     <section className="mt-14 relative">

//       {/* Section Background Glow */}
//       <div className="absolute -top-10 left-1/4 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />

//       <div className="relative">

//         <h3 className="text-2xl font-bold text-yellow-300 mb-8 tracking-wide">
//           Continue Learning
//         </h3>

//         <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

//           {courses.map((course, index) => {
//             const Icon = course.icon;

//             return (
//               <motion.div
//               onClick={() => router.push(`/student/subjects/${course.slug}`)}

//                 key={index}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.04,
//                 }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 200,
//                   damping: 15,
//                 }}
//                 className="relative min-w-[320px] rounded-3xl overflow-hidden 
//                            bg-gradient-to-br from-neutral-950 to-black
//                            border border-yellow-500/10
//                            shadow-xl hover:shadow-yellow-400/30
//                            transition-all duration-500 cursor-pointer"
//               >

//                 {/* Background Image */}
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                      fill="true" 

//                     className="object-cover transition-all duration-700 
//                                group-hover:scale-110"
//                   />

//                   {/* Dark Overlay */}
//                   <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

//                   {/* Hover Yellow Glow */}
//                   <motion.div
//                     className="absolute inset-0 bg-yellow-500/0"
//                     whileHover={{ backgroundColor: 'rgba(234,179,8,0.15)' }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4">

//                   <div className="flex items-center gap-3">
//                     <motion.div
//                       whileHover={{
//                         rotate: 15,
//                         scale: 1.2,
//                       }}
//                       className="w-10 h-10 flex items-center justify-center
//                                  rounded-full bg-yellow-500/10
//                                  border border-yellow-400/20"
//                     >
//                       <Icon size={20} className="text-yellow-300" />
//                     </motion.div>

//                     <span className="text-sm text-yellow-400 font-semibold tracking-wide">
//                       {course.subject}
//                     </span>
//                   </div>

//                   <h4 className="text-white text-lg font-bold leading-snug">
//                     {course.title}
//                   </h4>

//                   {/* Progress Bar */}
//                   <div>
//                     <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: `${course.progress}%` }}
//                         transition={{ duration: 1 }}
//                         className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
//                       />
//                     </div>
//                     <p className="text-xs text-neutral-400 mt-2">
//                       {course.progress}% completed
//                     </p>
//                   </div>

//                 </div>
//               </motion.div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { subjects } from '@/lib/data/subjects';

export default function ContinueLearning() {
  const router = useRouter();

  const courses = subjects
  .map(subject => {
    const nextLecture = subject.lectures.find(
      lec => lec.status === "next"
    );

    if (!nextLecture) return null;

    return {
      ...nextLecture,
      slug: subject.slug,
      subjectTitle: subject.title,
       image: subject.image,
    };
  })
  .filter(Boolean)
  .slice(0, 2);


  // Take only lectures with status "next" or "completed"
  // const courses = subjects.flatMap(subject =>
  //   subject.lectures
  //     .filter(lec => lec.status === "next")
  //     .map(lecture => ({
  //       ...lecture,
  //       slug: subject.slug,
  //       subjectTitle: subject.title,
  //     }))
  // );

  
//     <section className="mt-14 relative">

//       {/* <h3 className="text-2xl font-bold text-yellow-300 mb-8 tracking-wide">
//         Continue Learning
//       </h3>

//       <div className="
//         flex gap-6 overflow-x-auto pb-6 scrollbar-hide
//         md:grid md:grid-cols-2 md:gap-8 md:overflow-visible
//         xl:grid-cols-3
//       "> */}
//       <div className="flex items-center justify-between mb-8">
//   <div>
//     <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
//       Continue Learning
//     </h2>
//     <p className="text-neutral-400 text-sm mt-1">
//       Pick up where you left off
//     </p>
//   </div>

//   <button className="text-sm text-yellow-400 hover:underline">
//     View All
//   </button>
// </div>


//         {courses.map((course, index) => (
//           <motion.div
//             key={index}
//             onClick={() =>
//               router.push(`/dashboard/student/subjects/${course.slug}`)
//             }
//             whileHover={{ y: -8 }}
//             className="
//               min-w-[280px] md:min-w-0
//               rounded-3xl p-6
//               bg-gradient-to-br from-neutral-900 to-black
//               border border-yellow-500/20
//               cursor-pointer
//               transition-all duration-300
//               hover:border-yellow-400
//             "
//           >
//             <div className="relative h-40 w-full rounded-xl overflow-hidden">
//   <img
//     src={course.image}
//     alt={course.subjectTitle}
//     className="w-full h-full object-cover"
//   />
// </div>

//             <h4 className="text-yellow-400 font-semibold">
//               {course.subjectTitle}
//             </h4>

//             <p className="text-white mt-2 font-bold">
//               {course.title}
//             </p>

//             <p className="text-sm text-neutral-400 mt-2">
//               {course.duration}
//             </p>

//           </motion.div>
//         ))}
 
//     </section>

return (
  <section className="mt-16">

    {/* Header */}
    <div className="flex items-center justify-between mb-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
          Continue Learning
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Pick up where you left off
        </p>
      </div>

      <button className="text-sm text-yellow-400 hover:underline">
        View All
      </button>
    </div>

    {/* Cards Container */}
   <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-3
  gap-10
">
  {courses.map((course, index) => (
    <motion.div
      key={index}
      onClick={() =>
        router.push(`/dashboard/student/subjects/${course.slug}`)
      }
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        group
        relative
        rounded-2xl
        overflow-hidden
        bg-[#111]
        border border-neutral-800
        hover:border-yellow-500/50
        shadow-lg
        hover:shadow-yellow-500/20
        transition-all duration-500
        cursor-pointer
      "
    >

      {/* Glow Background */}
      <div className="
        absolute -inset-1
        bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0
        opacity-0
        group-hover:opacity-100
        blur-xl
        transition duration-500
      " />

      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-5 space-y-2">
        <h4 className="text-yellow-400 text-xs uppercase tracking-wider font-semibold">
          {course.subjectTitle}
        </h4>

        <h3 className="text-white text-lg font-semibold leading-snug">
          {course.title}
        </h3>

        <p className="text-neutral-400 text-sm">
          {course.duration}
        </p>

        {/* Premium Progress */}
        <div className="mt-4">
          <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="
                h-full
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
                transition-all duration-500
              "
              style={{ width: "65%" }}
            />
          </div>
        </div>
      </div>

    </motion.div>
  ))}
</div>


  </section>
);


}
