import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-60 bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold mb-6">LMS</h1>
          <nav className="flex flex-col gap-3">
            <Link href="/">🏠 Home</Link>
            <Link href="/courses/1">📚 Courses</Link>
            <Link href="/assignments/1">📝 Assignments</Link>
            <Link href="/profile">👤 Profile</Link>
          </nav>
        </aside>
        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}

