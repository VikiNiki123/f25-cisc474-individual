import { createFileRoute, Link } from "@tanstack/react-router"
import styles from "../styles/dashboard.module.css"
import { Course } from "./courses"
import { backendFetcher } from "../integrations/fetcher"
import { useQuery } from "@tanstack/react-query"


export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
})

const coursesQueryOptions = {
  queryKey: ['courses'],
  queryFn: backendFetcher<Array<Course>>('/courses'),
  initalData:[],
}


function DashboardPage() {
  const {data, refetch, error, isFetching } = useQuery(coursesQueryOptions);
    
  if (isFetching) return <div style={{fontSize:"40px", color: "#0f411eff", alignContent:"center", alignItems:"center", textAlign:"center"}}>Loading...</div>;
  
  if (error){
    return <div style={{fontSize:"40px", color: "#815656", alignContent:"center", alignItems:"center", textAlign:"center"}}>Error: {error.message}</div>
  }
  if (data){
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
              {data.map((course) => (
                <Link
                  key={course.id}
                  to={`/$courseId`}
                  params={{ courseId: course.id.toString()}}
                  className={styles.courseCard}
                >
                  <div className={styles.courseImage}></div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.courseInfo}>
                      <div className={styles.courseTitle}>
                        <h3>{course.title}</h3>
                        <span className={styles.courseCode}>{course.courseCode}</span>
                      </div>
                      <p className={styles.instructor}>Instructor: {course.instructor}</p>
                    </div>

                    {/* Assignments List */}
                    <div className={styles.assignmentsList}>
                      <h4>Recent Assignments:</h4>
                      {/*
                      {course.assignments.map((assignment, idx) => (
                        <div
                          key={idx}
                          className={`${styles.assignmentItem} ${styles[assignment.status]}`}
                        >
                          <span>{assignment.title}</span>
                          <small>Due: {assignment.dueDate}</small>
                        </div>
                      ))}*/}
                      <p>Assignments will be listed here and link to the assignments page</p>
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
              <div className={styles.todoItem}>
                  <span>All Data Under is Fake</span>
                  <small>Dont trust Me!</small>
              </div>
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
                  <p>FAKE DATA, NEED FOR STYLE RN!</p>
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
}