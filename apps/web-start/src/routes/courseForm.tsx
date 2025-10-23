import React, { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import CourseCreateForm from "../components/CourseCreateForm"
import CourseEditForm from "../components/CourseEditForm"
import CourseDeleteForm from "../components/CourseDeleteForm"
import styles from "../styles/courseForm.module.css"

export const Route = createFileRoute("/courseForm")({
  component: CourseForm,
})

function CourseForm() {
  const [formType, setFormType] = useState<"create" | "edit" | "delete">("create")

  return (
    <div className={styles.dashboard}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <h1 className={styles.navTitle}>Course Manager ˚ʚ♡ɞ˚</h1>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.sectionHeader}>
          <h2>Manage Your Courses</h2>
        </div>

        {/* Tabs */}
        <div className={styles.actionTabs}>
          {["create", "edit", "delete"].map((type) => (
            <button
              key={type}
              className={formType === type ? styles.active : ""}
              onClick={() => setFormType(type as "create" | "edit" | "delete")}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Render the right form */}
        <div className={styles.formContainer}>
          {formType === "create" && <CourseCreateForm />}
          {formType === "edit" && <CourseEditForm />}
          {formType === "delete" && <CourseDeleteForm />}
        </div>
      </div>
    </div>
  )
}

export default CourseForm
