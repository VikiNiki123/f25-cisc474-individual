import { createFileRoute, Link } from '@tanstack/react-router';
import LoginButton from '../components/LoginButton';
import styles from "../styles/loginIn.module.css";

export const Route = createFileRoute('/loginIn')({
  component: LoginIn,
});

function LoginIn() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.loginCard}>
                    <div className={styles.loginHeader}>
                        <h1>Welcome User!</h1>
                        <h2> - Sage Green Learning - </h2>
                        <p>Please sign in to your account</p>
                    </div>
                        
                        <div className={styles.loginButton}>
                        <LoginButton />
                        </div>

                    <div className={styles.loginFooter}>
                        <p>Log In with Auth0</p>
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