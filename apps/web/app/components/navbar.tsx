"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./navbar.module.css";

interface NavLink {
  href: string;
  label: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false); /*setCollapsed was orginally part of the navbar but removed currently, may add it back later*/

  const links: NavLink[] = [
    { href: "/dashboard", label: "Home" },
    { href: "/course", label: "Courses" },
    { href: "/assignment", label: "Assignments" },
    { href: "/profile", label: "Profile" },
    { href: "/", label: "Log In/Out" },
  ];

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
              href={link.href}
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
  );
}