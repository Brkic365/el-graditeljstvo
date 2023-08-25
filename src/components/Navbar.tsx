"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";
import { useRouter, usePathname } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  // State that handles opening and closing of the mobile menu
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [links] = useState([
    {
      title: "O NAMA",
      href: "/#o-nama",
    },
    {
      title: "USLUGE",
      href: "/#usluge",
    },
    {
      title: "GALERIJA",
      href: "/#galerija",
    },
    {
      title: "KONTAKT",
      href: "/#kontakt",
    },
  ]);

  // Values asigned to the top line of the hamburger menu used for rotation
  const topLineVariants = {
    open: { transform: "translateY(350%) rotateZ(45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  // Values asigned to the bottom line of the hamburger menu used for rotation
  const bottomLineVariants = {
    open: { transform: "translateY(-350%) rotateZ(-45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  return (
    <nav className={styles.nav}>
      <MobileMenu
        open={openMenu}
        links={links}
        setOpen={(open) => setOpenMenu(open)}
      />

      <section className={styles.logoHolder} onClick={() => router.push("/")}>
        <section className={styles.logo}>
          <Image src="/images/logo.png" alt="Logo" layout="fill" />
        </section>
        <h1>EL GRADITELJSTVO</h1>
      </section>

      {/* Navbar links */}
      <ul className={styles.links}>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>

      <div
        className={styles.hamburger}
        onClick={() => setOpenMenu(!openMenu)}
        id="hamburger"
      >
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={topLineVariants}
          id="line1"
        />
        <div
          className={styles.line}
          style={openMenu ? { opacity: 0 } : undefined}
          id="line2"
        />
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={bottomLineVariants}
          id="line3"
        />
      </div>
    </nav>
  );
}

export default Navbar;
