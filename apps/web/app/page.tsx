"use client";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Dashboard</h1>

      <section className={styles.section}>
        <h2>Courses</h2>
        <ul>
          <li><Link href="/courses/1">Intro to CS</Link></li>
          <li><Link href="/courses/2">Web Dev 101</Link></li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>To-Do</h2>
        <ul>
          <li><Link href="/assignments/1">Assignment 1 – Due 9/20</Link></li>
          <li><Link href="/assignments/2">Assignment 2 – Due 10/1</Link></li>
        </ul>
      </section>

      <Link href="/profile" className={styles.linkButton}>Go to Profile Settings</Link>
    </div>
  );
}
