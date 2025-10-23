import React, { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { mutateBackend, backendFetcher } from "../integrations/fetcher"
import styles from "../styles/courseForm.module.css"
import type { CourseOut, CourseDelete } from "@repo/api/courses"

function CourseDeleteForm() {
  const [selectedCourseId, setSelectedCourseId] = useState("")
  const queryClient = useQueryClient()

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: backendFetcher<Array<CourseOut>>("/courses"),
  })

  const mutation = useMutation({
    mutationKey: ["delete-course"],
    mutationFn: (courseToDelete: CourseDelete) =>
      mutateBackend<CourseDelete, CourseOut>("/courses", "DELETE", courseToDelete),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] })
      alert("🗑️ Course deleted successfully!")
      setSelectedCourseId("")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (confirm("Are you sure you want to delete this course?")) {
      mutation.mutate({ id: Number(selectedCourseId) })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <select
        value={selectedCourseId}
        onChange={(e) => setSelectedCourseId(e.target.value)}
        required
      >
        <option value="">Select a course to delete</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id.toString()}>
            {course.title}
          </option>
        ))}
      </select>

      <button type="submit" className={styles.deleteButton} disabled={mutation.isPending}>
        {mutation.isPending ? "Deleting..." : "Delete Course"}
      </button>
    </form>
  )
}

export default CourseDeleteForm
