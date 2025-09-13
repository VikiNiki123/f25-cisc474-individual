import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My LMS</h1>
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/assignments">Assignments</Link></li>
        </ul>
      </nav>
    </main>
  );
}
