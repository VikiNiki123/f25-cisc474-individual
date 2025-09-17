"use client";
import styles from "./page.module.css";
import Link from "next/link";

{/*Profile Page */}
export default function Profile() {
  return (
    <div className={styles.dashboard}>
      {/* Header matching dashboard style */}
      <div className={styles.navbar}>
        <h1 className={styles.navTitle}>Profile ༄˖°.🍃.ೃ࿔*:･</h1>
        <div className={styles.navActions}>
          <span>User's Profile</span>
          <div className={styles.profileIcon}></div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Left Content - Profile Card */}
        <div className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageSection}>
              <div className={styles.profileImage}></div>
              <button className={styles.editButton}>
                Edit Photo
              </button>
            </div>

            <div className={styles.profileInfo}>
              <h2 className={styles.userName}>User Name</h2>
              
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <label>Name:</label>
                  <span>User Name</span>
                </div>
                <div className={styles.infoItem}>
                  <label>Major:</label>
                  <span>Computer Science</span>
                </div>
                <div className={styles.infoItem}>
                  <label>Year of Graduation:</label>
                  <span>2025</span>
                </div>
                <div className={styles.infoItem}>
                  <label>Overall GPA:</label>
                  <span>3.8</span>
                </div>
              </div>

              <div className={styles.buttonGroup}>
                <button className={styles.button}>Edit Profile</button>
                <button className={`${styles.button} ${styles.deleteButton}`}>Delete Account</button>
              </div>
            </div>
          </div>

          {/* Settings Card */}
          <div className={styles.settingsCard}>
            <h3>Settings</h3>
            <div className={styles.settingsList}>
              <div className={styles.settingItem}>
                <span>Theme Preference</span>
                <button className={styles.toggleButton}>Light</button>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <span>Sage Green Learning System © 2025</span>
          </div>
        </div>

        {/* Right Sidebar - Quick Actions */}
        <div className={styles.sidebar}>
          {/* Account Stats */}
          <div className={styles.accountStats}>
            <h3>Account Overview</h3>
            <div className={styles.statItem}>
              <label>Courses Enrolled:</label>
              <span> -- </span>
            </div>
            <div className={styles.statItem}>
              <label>Assignments Due:</label>
              <span> -- </span>
            </div>
            <div className={styles.statItem}>
              <label>Account Created:</label>
              <span>Sept 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}