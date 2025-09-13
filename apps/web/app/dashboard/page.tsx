"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <h1>Dashboard</h1>
      <p>Welcome! Select a course to start:</p>
      <ul>
        <li>
          <Link href="/courses/1">Course 1: Intro to CS</Link>
        </li>
        <li>
          <Link href="/courses/2">Course 2: Web Development</Link>
        </li>
      </ul>
      <Link href="/profile">Click here for Dashboard</Link>
    </div>
  );
}
