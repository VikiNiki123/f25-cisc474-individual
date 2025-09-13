"use client";
import styles from "./page.module.css";
import Link from "next/link";


{/*Login In Page */}
export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <input type="text" id="username" className="username"></input>
                <input type="text" id="password" className="password"></input>
                <nav>
                    <Link className="Log In" href="./dashboard">Log In</Link>
                </nav>
                
            </main>
        </div>
  );
}