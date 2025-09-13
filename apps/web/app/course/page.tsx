"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

export default function Course() {
  const params = useParams();
  const courseId = params.id;

  return (
    <div className={styles.page}>
      <h1>Course {courseId}</h1>
      <p>Assignments for this course:</p>
      <ul>
        <li>
          <Link href={`/courses/${courseId}/assignments/1`}>Assignment 1</Link>
        </li>
        <li>
          <Link href={`/courses/${courseId}/assignments/2`}>Assignment 2</Link>
        </li>
      </ul>
      <Link href="/dashboard">Back to Dashboard</Link>
    </div>
  );
}
