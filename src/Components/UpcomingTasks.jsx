"use client";

const tasks = [
  { title: "Physics Assignment", date: "Tomorrow", level: "Urgent" },
  { title: "Math Quiz", date: "Feb 18", level: "Medium" },
  { title: "Urdu Essay", date: "Feb 20", level: "Low" },
];

export default function UpcomingTasks() {
  return (
    <div className="card p-6 rounded-xl flex flex-col gap-4">
      <h2
        className="text-lg font-semibold"
        style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
      >
        Upcoming Tasks
      </h2>

      {tasks.map((task, i) => (
        <div
          key={i}
          className="flex justify-between items-center p-4 rounded-xl"
          style={{
            background: "var(--surface)",
            borderLeft: "4px solid var(--accent)",
          }}
        >
          <div>
            <p style={{ color: "var(--text-primary)" }}>{task.title}</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {task.date}
            </p>
          </div>

          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: "var(--border-subtle)",
              color: "var(--text-secondary)",
            }}
          >
            {task.level}
          </span>
        </div>
      ))}
    </div>
  );
}
