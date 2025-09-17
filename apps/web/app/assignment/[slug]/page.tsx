"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

// Example Assignment Data
const assignments = {
  "1": {
    id: 1,
    title: "Project Phase 1",
    dueDate: "Sept 21, 2025",
    dueTime: "11:59 PM",
    status: "pending",
    points: 100,
    description:
      "Create a wireframe and initial project proposal for your web application. Include user stories, technology stack decisions, and project timeline.",
    requirements: [
      "Detailed wireframe mockups",
      "Project proposal document (2-3 pages)",
      "Technology stack justification",
      "Timeline with milestones",
    ],
    submissionType: "File Upload",
    attempts: "Unlimited",
    submitted: false,
  },
  "2": {
    id: 2,
    title: "Resume Revisions 1",
    dueDate: "Sept 22, 2025",
    dueTime: "11:59 PM",
    status: "pending",
    points: 50,
    description:
      "Submit your revised resume incorporating feedback from the career services workshop. Focus on technical skills, project experience, and professional formatting.",
    requirements: [
      "Updated resume in PDF format",
      "Cover letter template",
      "LinkedIn profile screenshot",
      "Reflection essay (1 page)",
    ],
    submissionType: "File Upload",
    attempts: "3 attempts allowed",
    submitted: false,
  },
};

export default function AssignmentDetailPage() {
  const { id, slug } = useParams();
  const assignment = assignments[id as keyof typeof assignments];

  if (!assignment) {
    return (
      <div className={styles.notFoundCard}>
        <h1>Assignment Not Added Yet!</h1>
        <Link href={`/dashboard`}>← Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className={styles.assignmentDetailContainer}>
     {/*Specific Assignment will be added eventually*/}
    </div>
  );
}
