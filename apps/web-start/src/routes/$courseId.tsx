import { createFileRoute, useParams, Link } from "@tanstack/react-router"
import styles from "../styles/course.module.css"
import { backendFetcher } from "../integrations/fetcher"
import { useQuery } from "@tanstack/react-query"
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import type { CourseOut } from "@repo/api/courses"

export const Route = createFileRoute("/$courseId")({
  component: CoursePage,
})

const coursesQueryOptions = (courseId: string) =>
  queryOptions({
    queryKey: ['courses', courseId],
    queryFn: backendFetcher<CourseOut>(`/courses/${courseId}`),
  });


function CoursePage() {
  const { courseId } = Route.useParams();

  const {data, refetch, error, isFetching } = useQuery(coursesQueryOptions(courseId) );
  
    if (isFetching) return <div style={{fontSize:"40px", color: "#0f411eff", alignContent:"center", alignItems:"center", textAlign:"center"}}>Loading...</div>;
    
    if (error){
      return <div style={{fontSize:"40px", color: "#815656", alignContent:"center", alignItems:"center", textAlign:"center"}}>Error: {error.message}</div>
    }
    if (data){
      return (
        <div className={styles.coursePageContainer}>
          {/* Navigation Header */}
          <div className={styles.courseNavbar}>
            <div className={styles.courseNavContent}>
              <h1 className={styles.coursePageTitle}>
                {data.courseCode}: {data.title} ༄˖°.🍃.ೃ࿔*:･
              </h1>
            </div>
          </div>

          <div className={styles.courseContent}>
            {/* Main Content */}
            <div className={styles.mainSection}>
              {/* Course Info Card */}
              <div className={styles.courseInfoCard}>
                <div className={styles.courseHeader}>
                  <div className={styles.courseDetails}>
                    <h2 className={styles.courseName}>{data.title}</h2>
                    <i className={styles.description}>{data.description}</i>
                  </div>
                </div>
              </div>


              {/* Schedule Card - Taking Away right now, may implement later!
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
              */}

              {/* Weekly Module Card */}
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
                {/*<div className={styles.assignmentsList}>
                  {data.assignments.map((assignment, idx) => (
                    <div key={idx} className={`${styles.assignmentItem} ${styles[assignment.status]}`}>
                      <div className={styles.assignmentInfo}>
                        <span className={styles.assignmentTitle}>{assignment.title}</span>
                        <small className={styles.assignmentDue}>Due: {assignment.dueDate}</small>
                      </div>
                      <div className={`${styles.statusBadge} ${styles[assignment.status]}`}>
                        {assignment.status === "pending" ? "Due" : "Upcoming"}
                      </div>
                    </div>
                  ))}
                  <p>Assignments will be listed here and link to the assignments page</p>
                {/*</div>*/}
                </div>
              </div>

              {/* Course Announcements */}
              <div className={styles.courseAnnouncementsCard}>
                <h3>✭ Course Announcements</h3>
                {/*<div className={styles.announcementsList}>
                  {data.announcements.map((announcement, idx) => (
                    <div key={idx} className={styles.announcementItem}>
                      <p>{announcement.text}</p>
                      <small>{announcement.date}</small>
                    </div>
                  ))}
                </div>*/}
                <p>Announcements will be listed here</p>
              </div>

              {/* Quick Actions */}
              <div className={styles.quickActionsCard}>
                <h3>Quick Actions</h3>
                <div className={styles.actionsList}>
                  <Link to="/assignments" className={styles.actionLink}>
                    View All Assignments
                  </Link>
                  <button className={styles.actionLink}>
                    Check Grades
                  </button>
                  <button className={styles.actionLink}>
                    Course Materials
                  </button>
                </div>
              </div>
            </div>
          </div>
  )
}
  
}