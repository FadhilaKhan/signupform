"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyNextApp</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "font-bold" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "font-bold" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
