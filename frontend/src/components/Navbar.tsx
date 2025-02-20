"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "../components/styles.css"; // Import styles

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Left Side: Navigation Links */}
        <ul className="nav-links md:flex hidden">
          <li>
            <Link href="/community" className={pathname === "/community" ? "active" : ""}>
              Community
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
              Blog
            </Link>
          </li>
        </ul>

        {/* Center: Brand Name + Profile Icon */}
<div className="brand-container flex items-center space-x-4">
  <h1 className="brand">AutoSphere</h1>
  {/* Profile Icon with Image */}
  <div className="profile-icon">
    <img src="/image/logo.png" alt="Profile" className="profile-img" />
  </div>
</div>


        {/* Right Side: Get Started Button + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Get Started Button */}
          <Link href="/get-started">
            <button className="cta-button">Get started</button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="menu-button md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden">
          <Link href="/community" className={pathname === "/community" ? "active" : ""}>
            Community
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
