import { createFileRoute, Link } from "@tanstack/react-router"
import styles from "../styles/courses.module.css"

// Define the route
export const Route = createFileRoute("/courses")({
  component: CoursesTab,
})

interface Course {
  id: number;
  code: string;
  name: string;
  announcement: string;
  meetsIn: string;
  link: string;
  instructor: string;
  credits: number;
  upcomingAssignments: number;
}

// 🌿 Example Course Data
const courses: Course[] = [
  {
    id: 1,
    code: "CISC474",
    name: "Advanced Web Technologies",
    announcement: "Welcome to the first week of advanced web development!",
    meetsIn: "2 hours",
    link: "/course-page",
    instructor: "Dr. Johnson",
    credits: 3,
    upcomingAssignments: 2,
  },
  {
    id: 2,
    code: "CISC498",
    name: "Senior Capstone",
    announcement: "Class (9/19) is cancelled due to Victoria's bad joke!",
    meetsIn: "1 day",
    link: "/course-page",
    instructor: "Prof. John",
    credits: 4,
    upcomingAssignments: 2,
  },
];

export default function CoursesTab() {
  return (
    <div className={styles.dashboard}>
      {/* Navigation Header */}
      <div className={styles.navbar}>
        <h1 className={styles.navTitle}>My Courses ༄˖°.🍃.ೃ࿔*:･</h1>
        <div className={styles.navActions}>
          <span>Academic Year 2025 - 2026</span>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Left Content - Course Grid */}
        <div className={styles.coursesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Enrolled Courses</h2>
            <div className={styles.courseStats}>
              <span className={styles.statItem}>
                <strong>{courses.length}</strong> Active Courses
              </span>
              <span className={styles.statItem}>
                <strong>
                  {courses.reduce((sum, course) => sum + course.credits, 0)}
                </strong>{" "}
                Total Credits
              </span>
            </div>
          </div>

          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/$courseId`}
                params={{ courseId: course.code.toLowerCase() }}
                className={styles.courseCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.courseImage}></div>
                  <div className={styles.courseInfo}>
                    <h3 className={styles.courseTitle}>
                      {course.code}: {course.name}
                    </h3>
                    <p className={styles.instructor}>
                      {course.instructor} • {course.credits} Credits
                    </p>
                  </div>
                  <div className={styles.courseStatus}>
                    <span className={styles.meetsIn}>
                      Meets in {course.meetsIn}
                    </span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.announcement}>
                    <div className={styles.announcementIcon}>✭</div>
                    <p>{course.announcement}</p>
                  </div>

                  {course.upcomingAssignments > 0 && (
                    <div className={styles.assignmentAlert}>
                      <span className={styles.alertIcon}>⚠︎</span>
                      <span>
                        {course.upcomingAssignments} assignment
                        {course.upcomingAssignments > 1 ? "s" : ""} due soon
                      </span>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.enterCourse}>Enter Course →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.footer}>
            <span>Sage Green Learning System © 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}