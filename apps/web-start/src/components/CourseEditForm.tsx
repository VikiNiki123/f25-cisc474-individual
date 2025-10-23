import React, { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { mutateBackend, backendFetcher } from "../integrations/fetcher"
import styles from "../styles/courseForm.module.css"
import type { CourseOut, CourseUpdate } from "@repo/api/courses"

function CourseEditForm() {
  const [selectedCourse, setSelectedCourse] = useState<CourseOut | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [courseCode, setCourseCode] = useState("")
  const queryClient = useQueryClient()

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: backendFetcher<Array<CourseOut>>("/courses"),
  })

  const mutation = useMutation({
    mutationKey: ["edit-course"],
    mutationFn: (courseToEdit: CourseUpdate) =>
      mutateBackend<CourseUpdate, CourseOut>("/courses", "PUT", courseToEdit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] })
      alert("✅ Course updated successfully!")
    },
  })

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const course = JSON.parse(e.target.value) as CourseOut
    setSelectedCourse(course)
    setTitle(course.title)
    setDescription(course.description || "")
    setCourseCode(course.courseCode)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCourse) return
    mutation.mutate({
      id: selectedCourse.id,
      title,
      description,
      courseCode,
    })
  }

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
          <button type="submit" className={styles.submitButton} disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : "Save Changes"}
          </button>
        </>
      )}
    </form>
  )
}

export default CourseEditForm
