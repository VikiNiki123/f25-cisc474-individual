"use client";
//import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Profile() {
  return (
    <div className={styles.main}>
      <h1>Profile Settings</h1>
      <hr />

      <div className={styles.profileContent}>
        <div className={styles.profileImage}>
        </div>

        <div className={styles.profileInfo}>
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>Major:</strong> Computer Science</p>
          <p><strong>Graduation Year:</strong> 2026</p>
          <p><strong>GPA:</strong> 3.8</p>
          <button className={styles.button}>Edit</button>
          <button className={`${styles.button} ${styles.delete}`}>Delete</button>4

          <Link href="./dashboard" className={styles.linkButton}>Go to Profile Settings</Link>
        </div>
      </div>
    </div>
  );
}
