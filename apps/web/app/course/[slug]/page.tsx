"use client";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

//Temporary User Data
const courses = {
  cisc474: {
    code: "CISC474",
    name: "Advanced Web Technologies",
    instructor: "Dr. Johnson",
    description: "Deep dive into modern web development technologies and frameworks.",
    assignments: [
      { title: "Project Phase 1", dueDate: "Sept 21", status: "pending" },
      { title: "Lab Assignment 3", dueDate: "Sept 25", status: "upcoming" },
    ],
    announcements: [
      { text: "Welcome to the first week of advanced web development!", date: "Today" },
      { text: "Remember to submit your project proposals by the deadline.", date: "2 days ago" }
    ],
    schedule: [
      { day: "Monday", time: "2:00 PM - 3:15 PM", location: "Smith Hall 204" },
      { day: "Wednesday", time: "2:00 PM - 3:15 PM", location: "Smith Hall 204" },
      { day: "Friday", time: "2:00 PM - 3:15 PM", location: "Smith Hall 204" }
    ]
  },
  cisc498: {
    code: "CISC498",
    name: "Senior Capstone",
    instructor: "Prof. John",
    description: "Capstone project course for senior computer science students.",
    assignments: [
      { title: "Resume Revision #1", dueDate: "Sept 22", status: "pending" },
      { title: "Sprint Report", dueDate: "Sept 27", status: "upcoming" },
    ],
    announcements: [
      { text: "Class (9/19) is cancelled due to Victoria's bad joke!", date: "Yesterday" },
      { text: "Career fair next week - don't forget to attend!", date: "3 days ago" }
    ],
    schedule: [
      { day: "Tuesday", time: "11:00 AM - 12:15 PM", location: "Memorial Hall 316" },
      { day: "Thursday", time: "11:00 AM - 12:15 PM", location: "Memorial Hall 316" }
    ]
  }
};

export default function CoursePage() {
  const { slug } = useParams();
  const course = courses[slug as keyof typeof courses];

  if (!course) return (
    <div className={styles.coursePageContainer}>
      <div className={styles.notFoundCard}>
        <h1>Course not found</h1>
        <Link href="/" className={styles.backLink}>← Back to Dashboard</Link>
      </div>
    </div>
  );

  return (
    <div className={styles.coursePageContainer}>
      {/* Navigation Header */}
      <div className={styles.courseNavbar}>
        <div className={styles.courseNavContent}>
          <h1 className={styles.coursePageTitle}>{course.code}: {course.name} ༄˖°.🍃.ೃ࿔*:･</h1>
        </div>
      </div>

      <div className={styles.courseContent}>
        {/* Main Content */}
        <div className={styles.mainSection}>
          {/* Course Info Card */}
          <div className={styles.courseInfoCard}>
            <div className={styles.courseHeader}>
              <div className={styles.courseDetails}>
                <h2 className={styles.courseName}>{course.name}</h2>
                <i className={styles.description}>{course.description}</i>
              </div>
            </div>
          </div>

          {/* Schedule Card */}
          <div className={styles.scheduleCard}>
            <h3>Class Schedule</h3>
            <div className={styles.scheduleList}>
              {course.schedule.map((session, idx) => (
                <div key={idx} className={styles.scheduleItem}>
                  <div className={styles.scheduleDay}>{session.day}</div>
                  <div className={styles.scheduleTime}>{session.time}</div>
                  <div className={styles.scheduleLocation}>{session.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/*Weekly Module Card */}
          <div className={styles.scheduleCard}>
            <h3>Week 1</h3>
            <p>Module Content will go here and connect with assignments later</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.courseSidebar}>
          {/* Assignments Card */}
          <div className={styles.assignmentsCard}>
            <h3>Course Assignments</h3>
            <div className={styles.assignmentsList}>
              {course.assignments.map((assignment, idx) => (
                <div key={idx} className={`${styles.assignmentItem} ${styles[assignment.status]}`}>
                  <div className={styles.assignmentInfo}>
                    <span className={styles.assignmentTitle}>{assignment.title}</span>
                    <small className={styles.assignmentDue}>Due: {assignment.dueDate}</small>
                  </div>
                  <div className={`${styles.statusBadge} ${styles[assignment.status]}`}>
                    {assignment.status === 'Pending' ? 'Due' : 'Upcoming'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Announcements */}
          <div className={styles.courseAnnouncementsCard}>
            <h3>✭ Course Announcements</h3>
            <div className={styles.announcementsList}>
              {course.announcements.map((announcement, idx) => (
                <div key={idx} className={styles.announcementItem}>
                  <p>{announcement.text}</p>
                  <small>{announcement.date}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className={styles.quickActionsCard}>
            <h3>Quick Actions</h3>
            <div className={styles.actionsList}>
              <Link href={`/assignment`} className={styles.actionLink}>
                View All Assignments
              </Link>
              <Link href={`/course/${slug}/grades`} className={styles.actionLink}>
                Check Grades
              </Link>
              <Link href={`/course/${slug}/materials`} className={styles.actionLink}>
                Course Materials
              </Link>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}