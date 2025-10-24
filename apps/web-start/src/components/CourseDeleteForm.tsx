import React, { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useApiQuery, useApiMutation } from "../integrations/api"
import styles from "../styles/courseForm.module.css"
import type { CourseOut } from "@repo/api/courses"

function CourseDeleteForm() {
  const [selectedCourseId, setSelectedCourseId] = useState("")
  const queryClient = useQueryClient()

  const coursesQuery = useApiQuery<Array<CourseOut>>(["courses"], "/courses")
  const courses = coursesQuery.data || []
  
  const deleteCourse = useApiMutation<{ id: number }, void>({
    mutationKey: ["delete-course"],
    endpoint: (variables) => ({
      path: `/courses`,
      method: "DELETE",
    }),
    invalidateKeys: [["courses"]],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCourseId) return
    if (confirm("Are you sure you want to delete this course?")) {
      deleteCourse.mutate({ id:Number(selectedCourseId) })
    }
  }

  if (coursesQuery.showLoading) return <p>Loading courses...</p>
  if (coursesQuery.error) return <p>Error loading courses 😭</p>

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <select
        value={selectedCourseId}
        onChange={(e) => setSelectedCourseId(e.target.value)}
        required
      >
        <option value="">Select a course to delete</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.title}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className={styles.deleteButton}
        disabled={deleteCourse.isPending}
      >
        {deleteCourse.isPending ? "Deleting..." : "Delete Course"}
      </button>
    </form>
  )
}

export default CourseDeleteForm
