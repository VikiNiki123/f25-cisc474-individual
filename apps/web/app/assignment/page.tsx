"use client";
import Link from "next/link";
import styles from "./page.module.css";

// Sample Assignment Data - via help with ChatGPT
const assignments = [
  {
    id: 1,
    title: "Project Phase 1",
    course: "CISC474",
    courseName: "Advanced Web Technologies",
    dueDate: "Sept 21, 2025",
    dueTime: "11:59 PM",
    status: "pending",
    points: 100,
    description: "Create a wireframe and initial project proposal for your web application. Include user stories, technology stack decisions, and project timeline.",
    requirements: [
      "Detailed wireframe mockups",
      "Project proposal document (2-3 pages)",
      "Technology stack justification",
      "Timeline with milestones"
    ],
    submissionType: "File Upload",
    attempts: "Unlimited",
    submitted: false
  },
  {
    id: 2,
    title: "Resume Revisions 1",
    course: "CISC498",
    courseName: "Senior Capstone",
    dueDate: "Sept 22, 2025",
    dueTime: "11:59 PM",
    status: "pending",
    points: 50,
    description: "Submit your revised resume incorporating feedback from the career services workshop. Focus on technical skills, project experience, and professional formatting.",
    requirements: [
      "Updated resume in PDF format",
      "Cover letter template",
      "LinkedIn profile screenshot",
      "Reflection essay (1 page)"
    ],
    submissionType: "File Upload",
    attempts: "3 attempts allowed",
    submitted: false
  }
];

export default function assignment() {
  return (
    <div className={styles.assignmentsContainer}>
      {/* Header */}
      <div className={styles.moduleHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.moduleTitle}>Upcoming Assignments ༄˖°.🍃.ೃ࿔*:･</h1>
        </div>
      </div>

      {/* Assignments Grid */}
      <div className={styles.assignmentsGrid}>
        {assignments.map((assignment) => (
          <div key={assignment.id} className={`${styles.assignmentCard} ${styles[assignment.status]}`}>
            {/* Assignment Header */}
            <div className={styles.assignmentHeader}>
              <div className={styles.assignmentTitleSection}>
                <h2 className={styles.assignmentTitle}>{assignment.title}</h2>
                <div className={styles.courseInfo}>
                  <span className={styles.courseCode}>{assignment.course}</span>
                  <span className={styles.courseName}>{assignment.courseName}</span>
                </div>
              </div>
              <div className={styles.assignmentMeta}>
                <div className={`${styles.statusBadge} ${styles[assignment.status]}`}>
                  {assignment.status === 'pending' ? 'Due Soon' : 'Upcoming'}
                </div>
                <div className={styles.pointsValue}>{assignment.points} pts</div>
              </div>
            </div>

            {/* Due Date Section */}
            <div className={styles.dueDateSection}>
              <div className={styles.dueDateInfo}>
                <span className={styles.dueDateLabel}>Due:</span>
                <span className={styles.dueDate}>{assignment.dueDate}</span>
                <span className={styles.dueTime}>at {assignment.dueTime}</span>
              </div>
            </div>

            {/* Assignment Description */}
            <div className={styles.assignmentDescription}>
              <p>{assignment.description}</p>
            </div>

            {/* Requirements List */}
            <div className={styles.requirementsSection}>
              <h4>Requirements:</h4>
              <ul className={styles.requirementsList}>
                {assignment.requirements.map((req, idx) => (
                  <li key={idx} className={styles.requirementItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Assignment Details */}
            <div className={styles.assignmentDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Submission:</span>
                <span className={styles.detailValue}>{assignment.submissionType}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Attempts:</span>
                <span className={styles.detailValue}>{assignment.attempts}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Status:</span>
                <span className={`${styles.detailValue} ${styles.statusText} ${styles[assignment.status]}`}>
                  {assignment.submitted ? 'Submitted' : 'Not Submitted'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.assignmentActions}>
              <Link 
                href={`/assignment/${assignment.id}`} 
                className={`${styles.actionButton} ${styles.primaryButton}`}
              >
                {assignment.submitted ? 'View Submission' : 'Start Assignment'}
              </Link>
              <button className={`${styles.actionButton} ${styles.secondaryButton}`}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/*Footer */}
      <div className={styles.footer}>
        <span>Sage Green Learning System © 2025</span>
      </div>
    </div>
  );
}