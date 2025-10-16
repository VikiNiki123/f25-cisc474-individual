import { createFileRoute, Link } from "@tanstack/react-router"
import styles from "../styles/courses.module.css"
import { backendFetcher } from "../integrations/fetcher"
import { useQuery } from "@tanstack/react-query"

// Define the route
export const Route = createFileRoute("/courses")({
  component: CoursesTab,
})

export interface Course {
  id: number;
  courseCode: string;
  title: string;
  announcement: string;
  description: string;
  meetsIn: string;
  link: string;
  instructor: string;
  credits: number;
  upcomingAssignments: number;
}

const coursesQueryOptions = {
  queryKey: ['courses'],
  queryFn: backendFetcher<Array<Course>>('/courses'),
  initalData:[],
}

export default function CoursesTab() {
  const {data, refetch, error, isFetching } = useQuery(coursesQueryOptions);

  if (isFetching) return <div style={{fontSize:"40px", color: "#0f411eff", alignContent:"center", alignItems:"center", textAlign:"center"}}>Loading...</div>;
  
  if (error){
    return <div style={{fontSize:"40px", color: "#0f411eff", alignContent:"center", alignItems:"center", textAlign:"center"}}>Error: {error.message}</div>
  }

  if (data) {
    return (
      <
        div className={styles.dashboard}>
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
                    {data.reduce((sum, course) => sum + course.credits, 0)}
                  </strong>{" "}
                  Total Credits
                </span>
              </div>
            </div>

            <div className={styles.courseGrid}>
              {data.map((data) => (
                <Link
                  key={data.id}
                  to={`/$courseId`}
                  params={{ courseId: data.id.toString()}}
                  className={styles.courseCard}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.courseImage}></div>
                    <div className={styles.courseInfo}>
                      <h3 className={styles.courseTitle}>
                        {data.courseCode}: {data.title}
                      </h3>
                      <p className={styles.instructor}>
                        {data.instructor} • {data.credits} Credits
                      </p>
                    </div>
                    <div className={styles.courseStatus}>
                      <span className={styles.meetsIn}>
                        Meets in {data.meetsIn}
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.announcement}>
                      <div className={styles.announcementIcon}>✭</div>
                      <p>{data.announcement}</p>
                    </div>

                    {data.upcomingAssignments > 0 && (
                      <div className={styles.assignmentAlert}>
                        <span className={styles.alertIcon}>⚠︎</span>
                        <span>
                          {data.upcomingAssignments} assignment
                          {data.upcomingAssignments > 1 ? "s" : ""} due soon
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
  } else{
    return <div>No courses available.</div>
  }
}