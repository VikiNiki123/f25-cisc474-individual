import { Link, createFileRoute } from "@tanstack/react-router"
import { useApiQuery } from "../integrations/api"
import styles from "../styles/courses.module.css"
import type { CourseOut } from "@repo/api/courses"

// Route definition
export const Route = createFileRoute("/courses")({
  component: CoursesTab,
})

function CoursesTab() {
  const { data, showLoading, error } = useApiQuery<Array<CourseOut>>(
    ["courses"],
    "/courses"
  )

  if (showLoading)
    return (
      <div
        style={{
          fontSize: "40px",
          color: "#0f411eff",
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Loading...
      </div>
    )

  if (error) {
    return (
      <div
        style={{
          fontSize: "40px",
          color: "#0f411eff",
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Error: {error.message}
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.navbar}>
          <h1 className={styles.navTitle}>My Courses ༄˖°.🍃.ೃ࿔*:･</h1>
          <div className={styles.navActions}>
            <span>Academic Year 2025 - 2026</span>
          </div>
        </div>
        <div className={styles.emptyState}>
          <p>No courses available yet.</p>
          <Link to="/courseForm" className={styles.createCourseButton}>
            + Create your first course
          </Link>
        </div>
      </div>
    )
  }

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
                <strong>{data.length}</strong> Active Courses
              </span>
              <span className={styles.statItem}>
                <strong>
                  {data.reduce((sum, course) => sum + (course.credits || 0), 0)}
                </strong>{" "}
                Total Credits
              </span>
            </div>
          </div>

          <div className={styles.courseGrid}>
            {data.map((course) => (
              <Link
                key={course.id}
                to={"/$courseId"}
                params={{ courseId: course.id.toString() }}
                className={styles.courseCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.courseImage}></div>
                  <div className={styles.courseInfo}>
                    <h3 className={styles.courseTitle}>
                      {course.courseCode}: {course.title}
                    </h3>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.announcement}>
                    <div className={styles.announcementIcon}>✭</div>
                    <p>{"No announcements yet"}</p>
                  </div>
                  
                  {/*{course.upcomingAssignments > 0 && (
                    <div className={styles.assignmentAlert}>
                      <span className={styles.alertIcon}>⚠︎</span>
                      <span>
                        {course.upcomingAssignments} assignment
                        {course.upcomingAssignments > 1 ? "s" : ""} due soon
                      </span>
                    </div>
                  )}*/}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.enterCourse}>Enter Course →</span>
                </div>
              </Link>
            ))}

            {/* Create New Course Card */}
            <Link
              to="/courseForm"
              className={`${styles.courseCard} ${styles.addCourseCard}`}
            >
              <div className={styles.addCardContent}>
                <p>Manage Your Courses</p>
              </div>
            </Link>
          </div>

          <div className={styles.footer}>
            <span>Sage Green Learning System © 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}
