import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import styles from "../styles/assignment.module.css";

export const Route = createFileRoute("/$assignmentId")({
  component: AssignmentDetailPage,
});

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

function AssignmentDetailPage() {
  const { assignmentId } = Route.useParams();
  const assignment = assignments[assignmentId as keyof typeof assignments];

  if (!assignment) {
    return (
      <div className={styles.notFoundCard}>
        <h1>Assignment Not Added Yet!</h1>
        <Link to="/dashboard" className={styles.backLink}>
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.assignmentDetailContainer}>
      {/* Header */}
      <div className={styles.assignmentHeader}>
        <h1 className={styles.assignmentTitle}>{assignment.title}</h1>
        <div className={styles.metaInfo}>
          <span className={styles.points}>{assignment.points} pts</span>
          <span className={styles.dueDate}>
            Due: {assignment.dueDate} at {assignment.dueTime}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className={styles.assignmentDescription}>
        <p>{assignment.description}</p>
      </div>

      {/* Requirements */}
      <div className={styles.requirementsSection}>
        <h3>Requirements:</h3>
        <ul className={styles.requirementsList}>
          {assignment.requirements.map((req, idx) => (
            <li key={idx} className={styles.requirementItem}>
              <span className={styles.checkIcon}>✓</span> {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Details */}
      <div className={styles.detailsSection}>
        <div>
          <strong>Submission Type:</strong> {assignment.submissionType}
        </div>
        <div>
          <strong>Attempts:</strong> {assignment.attempts}
        </div>
        <div>
          <strong>Status:</strong>{" "}
          {assignment.submitted ? "Submitted ✅" : "Not Submitted ❌"}
        </div>
      </div>

      {/* Back Link */}
      <div className={styles.footerNav}>
        <Link to="/assignments" className={styles.backButton}>
          ← Back to Assignments
        </Link>
      </div>
    </div>
  );
}