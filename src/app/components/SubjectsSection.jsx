import Link from "next/link";
import SubjectCard from "./SubjectCard";
import { subjects } from "@/lib/data/subjects";

export default function SubjectsSection() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {subjects.map((subject) => (
        <Link
          key={subject.slug}
          href={`/dashboard/student/subjects/${subject.slug}`}
        >
          <SubjectCard
            name={subject.title}
            lessons={subject.lectures.length}
          />
        </Link>
      ))}
    </div>
  );
}
