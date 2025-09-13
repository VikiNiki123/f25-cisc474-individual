export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-6">LMS Login</h1>
      <input className="border p-2 mb-3 rounded w-64" placeholder="Username" />
      <input
        className="border p-2 mb-3 rounded w-64"
        placeholder="Password"
        type="password"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
    </div>
  );
}
