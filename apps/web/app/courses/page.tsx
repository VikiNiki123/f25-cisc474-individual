export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Course: {params.id}</h2>
      <ul className="space-y-2">
        <li className="p-3 border rounded bg-white shadow">Week 1: Intro</li>
        <li className="p-3 border rounded bg-white shadow">Week 2: Basics</li>
        <li className="p-3 border rounded bg-white shadow">Week 3: Advanced Topics</li>
      </ul>
    </div>
  );
}
