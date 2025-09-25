import { prisma } from "./client";
import type {
  User,
  Course,
  Profile,
  Assignment,
  Enrollment,
  Submission,
  Announcement,
  Grade
} from "../generated/client";

(async () => {
  try {
    // --- USERS ---
    const DEFAULT_USERS: Array<Partial<User>> = [
      { firstName: "Alice", lastName: "Johnson", email: "alice@udel.edu", role: "STUDENT" },
      { firstName: "Bob", lastName: "Smith", email: "bob@udel.edu", role: "STUDENT" },
      { firstName: "Charlie", lastName: "Brown", email: "charlie@udel.edu", role: "STUDENT" },
      { firstName: "Dana", lastName: "Miller", email: "dana@udel.edu", role: "STUDENT" },
      { firstName: "Evan", lastName: "Davis", email: "evan@udel.edu", role: "STUDENT" },
      { firstName: "Fiona", lastName: "Wilson", email: "fiona@udel.edu", role: "INSTRUCTOR" },
      { firstName: "George", lastName: "Taylor", email: "george@udel.edu", role: "INSTRUCTOR" },
      { firstName: "Hannah", lastName: "Lee", email: "hannah@udel.edu", role: "INSTRUCTOR" },
      { firstName: "Ian", lastName: "Moore", email: "ian@udel.edu", role: "INSTRUCTOR" },
      { firstName: "Admin", lastName: "User", email: "admin@udel.edu", role: "ADMIN" },
    ];

    for (const user of DEFAULT_USERS) {
      await prisma.user.upsert({
        where: { email: user.email! },
        update: user,
        create: user as User,
      });
    }

    // --- PROFILES ---
    const DEFAULT_PROFILES: Array<Partial<Profile>> = [
      { userId: 1, theme: "light", profilePic: "alice.png", bio: "Hi, I'm Alice!" },
      { userId: 2, theme: "dark", profilePic: "bob.png", bio: "Bob loves coding." },
      { userId: 3, theme: "light", profilePic: "charlie.png", bio: "Charlie here." },
      { userId: 4, theme: "dark", profilePic: "dana.png", bio: "Dana the student." },
      { userId: 5, theme: "light", profilePic: "evan.png", bio: "Evan in CS." },
      { userId: 6, theme: "light", profilePic: "fiona.png", bio: "Instructor Fiona." },
      { userId: 7, theme: "dark", profilePic: "george.png", bio: "Instructor George." },
      { userId: 8, theme: "light", profilePic: "hannah.png", bio: "Instructor Hannah." },
      { userId: 9, theme: "dark", profilePic: "ian.png", bio: "Instructor Ian." },
      { userId: 10, theme: "light", profilePic: "admin.png", bio: "Admin user." },
    ];

    for (const profile of DEFAULT_PROFILES) {
      await prisma.profile.upsert({
        where: { userId: profile.userId! },
        update: profile,
        create: profile as Profile,
      });
    }

    // --- COURSES ---
    const DEFAULT_COURSES: Array<Partial<Course>> = [
      { title: "Web Development", courseCode: "CISC474", credits: 3, instructorId: 6 },
      { title: "Database Systems", courseCode: "CISC437", credits: 3, instructorId: 7 },
      { title: "Human-Computer Interaction", courseCode: "CISC481", credits: 3, instructorId: 8 },
      { title: "Discrete Mathematics", courseCode: "CISC210", credits: 4, instructorId: 9 },
    ];

    for (const course of DEFAULT_COURSES) {
      await prisma.course.upsert({
        where: { courseCode: course.courseCode! },
        update: course,
        create: course as Course,
      });
    }

    // --- ENROLLMENTS ---
    const DEFAULT_ENROLLMENTS: Array<Partial<Enrollment>> = [
      { userId: 1, courseId: 1 },
      { userId: 2, courseId: 1 },
      { userId: 3, courseId: 2 },
      { userId: 4, courseId: 2 },
      { userId: 5, courseId: 3 },
      { userId: 1, courseId: 4 },
      { userId: 2, courseId: 4 },
      { userId: 3, courseId: 4 },
    ];

    await prisma.enrollment.createMany({
      data: DEFAULT_ENROLLMENTS as Enrollment[],
      skipDuplicates: true,
    });

    // --- ASSIGNMENTS ---
    const DEFAULT_ASSIGNMENTS: Array<Partial<Assignment>> = [
      { title: "HTML Basics", description: "Build a simple webpage", dueDate: new Date("2025-10-10"), courseId: 1 },
      { title: "CSS Styling", description: "Style your webpage", dueDate: new Date("2025-10-15"), courseId: 1 },
      { title: "JavaScript DOM", description: "Manipulate DOM elements", dueDate: new Date("2025-10-20"), courseId: 1 },
      { title: "ER Diagram", description: "Design ER Diagram", dueDate: new Date("2025-10-12"), courseId: 2 },
      { title: "SQL Queries", description: "Write basic SQL queries", dueDate: new Date("2025-10-18"), courseId: 2 },
      { title: "Normalization", description: "Normalize a schema", dueDate: new Date("2025-10-22"), courseId: 2 },
      { title: "UI Mockups", description: "Create wireframes", dueDate: new Date("2025-10-14"), courseId: 3 },
      { title: "Usability Testing", description: "Test with peers", dueDate: new Date("2025-10-19"), courseId: 3 },
      { title: "Accessibility Report", description: "Audit accessibility", dueDate: new Date("2025-10-25"), courseId: 3 },
      { title: "Logic Proofs", description: "Prove logical statements", dueDate: new Date("2025-10-11"), courseId: 4 },
      { title: "Set Theory", description: "Work with sets", dueDate: new Date("2025-10-16"), courseId: 4 },
      { title: "Graph Theory", description: "Graph problems", dueDate: new Date("2025-10-23"), courseId: 4 },
    ];

    await prisma.assignment.createMany({
      data: DEFAULT_ASSIGNMENTS as Assignment[],
      skipDuplicates: true,
    });

    // --- SUBMISSIONS ---
    const DEFAULT_SUBMISSIONS: Array<Partial<Submission>> = [
      { userId: 1, assignmentId: 1, status: "SUBMITTED", submissionText: "My HTML work" },
      { userId: 2, assignmentId: 2, status: "SUBMITTED", submissionText: "My CSS work" },
      { userId: 3, assignmentId: 4, status: "LATE", submissionText: "Late ER diagram" },
      { userId: 4, assignmentId: 5, status: "SUBMITTED", submissionText: "SQL queries" },
      { userId: 5, assignmentId: 7, status: "SUBMITTED", submissionText: "Wireframes PDF" },
      { userId: 1, assignmentId: 10, status: "SUBMITTED", submissionDiscrete: "∀x∃y P(x,y)" },
      { userId: 2, assignmentId: 11, status: "NOT_SUBMITTED" },
    ];

    await prisma.submission.createMany({
      data: DEFAULT_SUBMISSIONS as Submission[],
      skipDuplicates: true,
    });

     // --- ANNOUNCEMENTS ---
    const DEFAULT_ANNOUNCEMENTS: Array<Partial<Announcement>> = [
      { title: "Welcome to Web Dev", message: "Class starts Monday!", userId: 6, courseId: 1 },
      { title: "Database Project", message: "ER Diagrams due soon", userId: 7, courseId: 2 },
      { title: "Usability Testing", message: "Bring your laptops", userId: 8, courseId: 3 },
      { title: "Exam Reminder", message: "Discrete Math midterm", userId: 9, courseId: 4 },
    ];

    await prisma.announcement.createMany({
      data: DEFAULT_ANNOUNCEMENTS as Announcement[],
      skipDuplicates: true,
    });

    // --- GRADES ---
    const DEFAULT_GRADES: Array<Partial<Grade>> = [
      { score: 95, feedback: "Great job!", submissionId: 1, assignmentId: 1, studentId: 1, graderId: 6 },
      { score: 88, feedback: "Well styled", submissionId: 2, assignmentId: 2, studentId: 2, graderId: 6 },
      { score: 70, feedback: "Late but acceptable", submissionId: 3, assignmentId: 4, studentId: 3, graderId: 7 },
      { score: 92, feedback: "Correct queries", submissionId: 4, assignmentId: 5, studentId: 4, graderId: 7 },
      { score: 85, feedback: "Good sketches", submissionId: 5, assignmentId: 7, studentId: 5, graderId: 8 },
      { score: 100, feedback: "Perfect proof", submissionId: 6, assignmentId: 10, studentId: 1, graderId: 9 },
      { score: 0, feedback: "No submission", submissionId: 7, assignmentId: 11, studentId: 2, graderId: 9 },
      { score: 78, feedback: "Solid work", submissionId: 8, assignmentId: 5, studentId: 4, graderId: 7 },
    ];

    await prisma.grade.createMany({
      data: DEFAULT_GRADES as Grade[],
      skipDuplicates: true,
    });

  } catch (error) {
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();