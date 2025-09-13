"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function Assignment() {
  const params = useParams();
  const { courseId, assignmentId } = params;

  return (
    <div className={styles.page}>
      <h1>Assignment {assignmentId}</h1>
      <p>Course: {courseId}</p>
      <p>Here’s where students can view assignment details and submit their work.</p>

      <Link href={`/courses/${courseId}`}>Back to Course</Link>
    </div>
  );
}
