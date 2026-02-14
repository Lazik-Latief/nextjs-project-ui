export default function Topbar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  );
}
