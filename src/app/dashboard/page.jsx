// export default function SubjectPage({ params }) {
//   const { subject } = params;

//   const lectures = [
//     { id: 1, title: 'Introduction', duration: '10 min' },
//     { id: 2, title: 'Chapter 1', duration: '25 min' },
//     { id: 3, title: 'Chapter 2', duration: '30 min' },
//   ];

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold capitalize mb-6">
//         {subject}
//       </h1>

//       <div className="space-y-4">
//         {lectures.map((lecture) => (
//           <div
//             key={lecture.id}
//             className="p-4 bg-neutral-900 rounded-xl flex justify-between"
//           >
//             <span>{lecture.title}</span>
//             <span className="text-neutral-400 text-sm">
//               {lecture.duration}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

 export default function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
