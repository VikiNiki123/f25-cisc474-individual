"use client";
import styles from "./page.module.css";
import Link from "next/link";

{/*Login In Page */}
export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.loginCard}>
                    <div className={styles.loginHeader}>
                        <h1>Welcome User!</h1>
                        <h2> - Sage Green Learning - </h2>
                        <p>Please sign in to your account</p>
                    </div>

                    <form className={styles.loginForm}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                className={styles.input}
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className={styles.input}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <Link href="./dashboard" className={styles.loginButton}>
                            Log In
                        </Link>
                    </form>

                    <div className={styles.loginFooter}>
                        <p>No Account? 
                            <Link href="#" className={styles.signupLink}> Sign up!</Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <div className={styles.footer}>
                <span>Sage Green Learning System © 2025</span>
            </div>
        </div>
    );
}