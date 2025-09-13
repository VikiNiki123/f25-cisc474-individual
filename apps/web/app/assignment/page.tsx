export default function AssignmentPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Assignment {params.id}</h2>
      <p className="mb-4">Write a short essay on Next.js layouts and routing.</p>
      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter your answer..."
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
    </div>
  );
}
