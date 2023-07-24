"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
export default function Navbar() {
  const currentPath = usePathname();
  const [showNavbar, setShowNavBar] = useState(false);
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Tours",
      path: "/tours",
    },
    {
      name: "Our Guides",
      path: "#",
    },
    {
      name: "Hotels",
      path: "#",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  function handleNavBar() {
    setShowNavBar(!showNavbar);
  }
  return (
    <header className="navbar">
      <Link href="/" className="logo">
        <Image src="/logo.png" width={50} height={50} alt="Jazz Africa Logo" />
        <h2>Jazz Africa</h2>
      </Link>
      <nav className={showNavbar ? "showNav" : ""}>
        {navLinks.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.path}
              className={link.path == currentPath ? "activeLink" : ""}
            >
              {link.name}
            </Link>
          );
        })}
        <Link href="#" className="call-link">
          <MdCall /> 0762063160
        </Link>
      </nav>
      <div className="cta">
        <Link href="#">Book Now</Link>
      </div>
      <button
        id="humbergMenu"
        className={showNavbar ? "showNav" : ""}
        onClick={handleNavBar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
