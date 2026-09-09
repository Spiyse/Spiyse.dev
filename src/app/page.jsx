import React from "react";
import styles from "./Layout/MainPage.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={`${styles.section} ${styles.top}`}>
        <div className={styles["top-content"]}>
          <h1 className={styles.name}>Spiyse</h1>
          <p className={styles.tagline}>Developer · Creator · Explorer</p>
        </div>
      </section>

      <div className={`${styles.section} ${styles.middle}`}>
        <section>
          <p>Grid 1</p>
        </section>
        <section>
          <p>Grid 2</p>
        </section>
        <section>
          <p>Grid 3</p>
        </section>
        <section>
          <p>Grid 4</p>
        </section>
        <section>
          <p>Grid 5</p>
        </section>
        <section>
          <p>Grid 6</p>
        </section>
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