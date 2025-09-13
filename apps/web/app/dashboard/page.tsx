export default function HomePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <section className="grid grid-cols-2 gap-6">
        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-2">Courses</h3>
          <div className="space-y-3">
            <div className="p-3 border rounded bg-white shadow">
              <h4>Intro to CS</h4>
              <p>Next Assignment: Sept 20</p>
            </div>
            <div className="p-3 border rounded bg-white shadow">
              <h4>Web Dev 101</h4>
              <p>Next Assignment: Oct 1</p>
            </div>
          </div>
        </div>

        {/* To-do + Announcements */}
        <div>
          <h3 className="font-semibold mb-2">To-Do</h3>
          <ul className="list-disc pl-6">
            <li>Assignment 1 (due 9/20)</li>
            <li>Assignment 2 (due 10/1)</li>
          </ul>
          <div className="mt-6 p-3 border rounded bg-white shadow">
            <h4 className="font-semibold">Announcements</h4>
            <p>Midterm exam on Oct 15</p>
          </div>
        </div>
      </section>
    </div>
  );
}
