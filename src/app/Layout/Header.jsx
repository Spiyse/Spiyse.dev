"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10 || currentScrollY < lastScrollY.current) {
        setShow(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShow(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);


  return (
    <>
      <header className={`${styles.header} ${!show ? styles.hidden : ""}`}>
        <nav>
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>

          <div className={styles.logo}>
            <div className={styles.logoImage}>
              <img
                src="/GooseWithHat_Regular.png"
                alt="Goose"
                className={styles.regularGoose}
              />
              <img
                src="/GooseWithHat_Inverted.png"
                alt=""
                aria-hidden="true"
                className={styles.invertedGoose}
              />
            </div>
          </div>

          <a href="/notes">NOTES</a>
          <a href="/projects">PROJECTS</a>
        </nav>
      </header>

      {!show && (
        <button
          className={styles.scrollDot}
          aria-label="Show navigation"
          onMouseEnter={() => setShow(true)}
        />
      )}
    </>
  );
}

export default Header;
