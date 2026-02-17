//  export default async function SubjectPage({ params }) {
//   const { subject } = await params;

//   return (
//     <div style={{ background: "red", padding: "50px" }}>
//       TEST PAGE
//       <h1>{subject}</h1>
//     </div>
//   );
// }

import { subjects } from "@/lib/data/subjects";

export default async function SubjectPage({ params }) {
  const { subject } = await params;

  const subjectData = subjects.find(
    (s) => s.slug === subject
  );

  if (!subjectData) {
    return <div className="p-10 text-white">Subject not found</div>;
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">
        {subjectData.title}
      </h1>

      <div className="space-y-4">
        {subjectData.lectures.map((lecture) => (
          <div
            key={lecture.id}
            className="p-4 bg-zinc-800 rounded-lg"
          >
            {lecture.title}
          </div>
        ))}
      </div>
    </div>
  );
}
