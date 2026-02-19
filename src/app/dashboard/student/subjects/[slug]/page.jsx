// export default function SubjectPage({ params }) {
//   return (
//     <div className="text-white text-2xl mt-10">
//       Subject Detail Page - {params.slug}
//     </div>
//   );
// }

export default function SubjectPage({ params }) {
  const { slug } = params;

  return (
    <div className="text-white text-2xl mt-10">
      Subject Detail Page - {slug}
    </div>
  );
}




// 'use client';

// import { useParams } from 'next/navigation';
// import { subjects } from '@/lib/data/subjects';

// export default function SubjectDetailPage() {
//   const params = useParams();
//   const subject = subjects.find(s => s.slug === params.slug);

//   if (!subject) {
//     return (
//       <div className="text-white p-10">
//         Subject Not Found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black">

//       <main className="px-6 md:px-10 lg:px-16 py-10">

//         <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
//           {subject.title}
//         </h1>

//         <p className="text-neutral-400 mt-3">
//           {subject.description}
//         </p>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//           {subject.lectures.map(lecture => (
//             <div
//               key={lecture.id}
//               className="
//                 bg-neutral-900
//                 border border-yellow-500/20
//                 rounded-2xl
//                 p-6
//                 transition-all
//                 hover:border-yellow-400
//               "
//             >
//               <h3 className="text-white font-semibold">
//                 {lecture.title}
//               </h3>

//               <p className="text-sm text-neutral-400 mt-2">
//                 {lecture.duration}
//               </p>

//               <p className="mt-3 text-xs text-yellow-400 uppercase">
//                 {lecture.status}
//               </p>
//             </div>
//           ))}

//         </div>

//       </main>
//     </div>
//   );
// }
