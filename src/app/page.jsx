"use client";
import { useEffect, useState } from "react";
import styles from "./Layout/MainPage.module.css";


// Taglines !!
const taglines = [
  [
    { text: "Developer", color: "#58e9ad" },
    { text: "Creator" },
    { text: "Programmer" },
  ],
  [
    { text: "Making the web slightly more interesting", color: "#e9c258" },
  ],
  [
    { text: "Currently" },
    { text: "building", color: "#90f198" },
    { text: "something"},
  ],
];

  export default function Home() {
    const [tagline, setTagline] = useState(null);

  useEffect(() => {
    setTagline(taglines[Math.floor(Math.random() * taglines.length)]);
  }, []);

    return (
      <main className={styles.page}>
        <section className={`${styles.section} ${styles.top}`}>
          <div className={styles["top-content"]}>
            <h1 className={styles.name}>Spiyse</h1>
            <p className={styles.tagline}>
              {tagline?.map((word, i) => (
              <span key={i} style={word.color ? { color: word.color } : undefined}>
                {word.text}
              </span>
              ))}
            </p>
          </div>
        </section>

        <div className={`${styles.section} ${styles.middle}`}>
          <section className={styles["latest-blogs"]}>
            <h2>Latest blogs</h2>

            <ul>
              <li>
                <a href="">
                  <div className={styles["note-info"]}>
                    <strong>uuuu!!</strong>
                    <div className={styles["tag-list"]}>
                      <span className={`${styles.tag} ${styles.purple}`}>css</span>
                    </div>
                  </div>
                  <time dateTime="2026-08-03">3 Aug 2026</time>
                </a>
              </li>

              <li>
                <a href="">
                  <div className={styles["note-info"]}>
                    <strong>Spiyse.dev</strong>
                    <div className={styles["tag-list"]}>
                      <span className={`${styles.tag} ${styles.orange}`}>React</span>
                      <span className={`${styles.tag} ${styles.purple}`}>css</span>
                      <span className={`${styles.tag} ${styles.yellow}`}>js</span>
                    </div>
                  </div>
                  <time dateTime="2026-03-22">22 Mar 2026</time>
                </a>
              </li>

              <li>
                <a href="">
                  <div className={styles["note-info"]}>
                    <strong>Test blog 3</strong>
                    <div className={styles["tag-list"]}>
                      <span className={`${styles.tag} ${styles.gray}`}>IDK</span>
                      <span className={`${styles.tag} ${styles.cyan}`}>test</span>
                      <span className={`${styles.tag} ${styles.yellow}`}>i'm a tag :D</span>
                    </div>
                  </div>
                  <time dateTime="2026-03-16">16 Mar 2026</time>
                </a>
              </li>

              <li>
                <a href="">
                  <div className={styles["note-info"]}>
                    <strong>Test thingy</strong>
                    <div className={styles["tag-list"]}>
                      <span className={`${styles.tag} ${styles.orange}`}>python</span>
                      <span className={`${styles.tag} ${styles.blue}`}>Whiteboard</span>
                    </div>
                  </div>
                  <time dateTime="2026-03-02">2 Mar 2026</time>
                </a>
              </li>
            </ul>

            <a className={styles.more} href="/blogs">
              More blogs →
            </a>
          </section>

          <section><h2>Latest Projects</h2></section>
          <section><p>Grid 3</p></section>
          <section><p>Grid 4</p></section>
        </div>

        <section className={`${styles.section} ${styles.bottom}`}>
          <div>card 1</div>
          <div>card 2</div>
          <div>card 3</div>
          <div>card 4</div>
          <div>card 5</div>
        </section>
      </main>
    );
  }