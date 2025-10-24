import React, { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useApiQuery, useApiMutation } from "../integrations/api"
import styles from "../styles/courseForm.module.css"
import type { CourseOut, CourseUpdate } from "@repo/api/courses"

function CourseEditForm() {
  const [selectedCourse, setSelectedCourse] = useState<CourseOut | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [courseCode, setCourseCode] = useState("")
  const queryClient = useQueryClient()

  const coursesQuery = useApiQuery<Array<CourseOut>>(["courses"], "/courses")

  const editCourse = useApiMutation<CourseUpdate, CourseOut>({
    mutationKey: ["edit-course"],
    endpoint: (variables) => ({
      path: `/courses`,
      method: "PUT",
    }),
    invalidateKeys: [["courses"]],
  })

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (!value) return
    const course = JSON.parse(value) as CourseOut
    setSelectedCourse(course)
    setTitle(course.title)
    setDescription(course.description || "")
    setCourseCode(course.courseCode)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCourse) return
    editCourse.mutate({
      id: Number(selectedCourse.id),
      title,
      description,
      courseCode,
    })
  }

  if (coursesQuery.showLoading) return <p>Loading courses...</p>
  if (coursesQuery.error) return <p>Error loading courses 😭</p>

  const courses = coursesQuery.data || []

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <select onChange={handleSelect} required>
        <option value="">Select a course to edit</option>
        {courses.map((course) => (
          <option key={course.id} value={JSON.stringify(course)}>
            {course.title}
          </option>
        ))}
      </select>

      {selectedCourse && (
        <>
          <input
            placeholder="Course Code"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            required
          />
          <input
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={editCourse.isPending}
          >
            {editCourse.isPending ? "Saving..." : "Save Changes"}
          </button>
        </>
      )}
    </form>
  )
}

export default CourseEditForm
