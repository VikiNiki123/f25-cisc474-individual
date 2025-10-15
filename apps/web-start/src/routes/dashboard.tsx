import { createFileRoute, Link } from "@tanstack/react-router"
import styles from "../styles/dashboard.module.css"

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
})

// Course Data
const courses = [
  { 
    title: "Advanced Web Technologies", 
    slug: "cisc474", 
    code: "CISC474",
    instructor: "Dr. Johnson",
    assignments: [
      { title: "Project Phase 1", dueDate: "Sept 21", status: "pending" },
      { title: "Lab Assignment 3", dueDate: "Sept 25", status: "upcoming" }
    ],
    announcement: "Welcome to the first week of advanced web development!",
  },
  { 
    title: "Senior Capstone", 
    slug: "cisc498", 
    code: "CISC498",
    instructor: "Prof. John",
    assignments: [
      { title: "Resume Revisions 1", dueDate: "Sept 22", status: "pending" },
      { title: "Sprint Report", dueDate: "Sept 27", status: "upcoming" }
    ],
    announcement: "Class (9/19) is cancelled due to Victoria's bad joke!",
  }
]

function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      {/* Navigation Header */}
      <div className={styles.navbar}>
        <h1 className={styles.navTitle}>Student Dashboard ༄˖°.🍃.ೃ࿔*:･</h1>
        <div className={styles.navActions}>
          <span>Welcome back, Victoria</span>
          <Link to="/profile">
            <div className={styles.profileIcon}></div>
          </Link>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Left Content - Course Cards */}
        <div className={styles.coursesSection}>
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <Link
                key={course.slug}
                to={`/$courseId`}
                params={{ courseId: course.slug }}
                className={styles.courseCard}
              >
                <div className={styles.courseImage}></div>
                
                <div className={styles.cardContent}>
                  <div className={styles.courseInfo}>
                    <div className={styles.courseTitle}>
                      <h3>{course.title}</h3>
                      <span className={styles.courseCode}>{course.code}</span>
                    </div>
                    <p className={styles.instructor}>Instructor: {course.instructor}</p>
                  </div>

                  {/* Assignments List */}
                  <div className={styles.assignmentsList}>
                    <h4>Recent Assignments:</h4>
                    {course.assignments.map((assignment, idx) => (
                      <div
                        key={idx}
                        className={`${styles.assignmentItem} ${styles[assignment.status]}`}
                      >
                        <span>{assignment.title}</span>
                        <small>Due: {assignment.dueDate}</small>
                      </div>
                    ))}
                  </div>

                  <div className={styles.enterCourse}>Enter Course →</div>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.homeFooter}>
            <span>Sage Green Learning System © 2025</span>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className={styles.sidebar}>
          {/* To Do Section */}
          <div className={styles.todoCard}>
            <h3>Upcoming Tasks</h3>
            <div className={styles.todoList}>
              <div className={styles.todoItem}>
                <span>CISC474 - Project Phase 1</span>
                <small>Due: Sept 21</small>
              </div>
              <div className={styles.todoItem}>
                <span>CISC498 - Resume Revisions 1</span>
                <small>Due: Sept 22</small>
              </div>
              <div className={styles.todoItem}>
                <span>CISC474 - Lab Assignment 3</span>
                <small>Due: Sept 25</small>
              </div>
              <div className={styles.todoItem}>
                <span>CISC498 - Sprint Report</span>
                <small>Due: Sept 27</small>
              </div>
            </div>
            <div className={styles.todoFooter}>
              <Link to="/assignments" className={styles.viewAllLink}>
                View All Assignments
              </Link>
            </div>
          </div>

          {/* Recent Announcements */}
          <div className={styles.announcementCard}>
            <h3>Recent Announcements</h3>
            <div className={styles.announcementList}>
              <div className={styles.announcementItem}>
                <h4>CISC474</h4>
                <p>Welcome to the first week of advanced web development!</p>
                <small>Today</small>
              </div>
              <div className={styles.announcementItem}>
                <h4>CISC498</h4>
                <p>Class (9/19) is cancelled due to Victoria's bad joke!</p>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}