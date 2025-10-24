import { Link, useRouterState } from "@tanstack/react-router"
import { useState } from "react"
import styles from "../styles/navbar.module.css"

interface NavLink {
  href: string
  label: string
}

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false) // Keep it for future use

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const links: NavLink[] = [
    { href: "/dashboard", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/assignment", label: "Assignments" },
    { href: "/profile", label: "Profile" },
    { href: "/", label: "Log In" },
  ]

  return (
    <nav className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <h1 className={styles.logo}>Sage Green 𖥸</h1>
        <div className={styles.divider}></div>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              <span className={styles.linkText}>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
