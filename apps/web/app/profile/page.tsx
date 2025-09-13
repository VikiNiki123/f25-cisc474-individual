export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> Jane Doe</p>
      <p><strong>Major:</strong> Computer Science</p>
      <p><strong>Graduation Year:</strong> 2026</p>
      <p><strong>GPA:</strong> 3.8</p>
      <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
    </div>
  );
}
