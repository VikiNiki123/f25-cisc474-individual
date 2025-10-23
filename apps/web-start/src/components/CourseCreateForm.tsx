import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { mutateBackend } from "../integrations/fetcher"
import styles from "../styles/courseForm.module.css"
import type { CourseOut, CourseCreate } from "@repo/api/courses"

function CourseCreateForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [courseCode, setCourseCode] = useState("")
  const [credits, setCredits] = useState(0)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: ["create-course"],
    mutationFn: (newCourse: CourseCreate) =>
      mutateBackend<CourseCreate, CourseOut>("/courses", "POST", newCourse),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] })
      alert("✅ Course created successfully!")
      setTitle("")
      setDescription("")
      setCourseCode("")
      setCredits(0)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ title, description, courseCode, credits })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
      <input
        type="number"
        placeholder="Credits"
        value={credits}
        onChange={(e) => setCredits(Number(e.target.value))}
        required
      />

      <button type="submit" className={styles.submitButton} disabled={mutation.isPending}>
        {mutation.isPending ? "Creating..." : "Create Course"}
      </button>

      {mutation.isError && (
        <div className={styles.errorMessage}>
          Error: {(mutation.error as Error).message}
        </div>
      )}
    </form>
  )
}

export default CourseCreateForm
