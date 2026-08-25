import React from "react";
import styles from "./Layout/MainPage.module.css";


export default function Home() {
  return (
    <section className={styles.top}>
      <div className={styles["top-content"]}>
        <h1 className={styles.name}>Spiyse</h1>
        <p className={styles.tagline}> Developer - Some other - Yeah - Mhmmm</p>
      </div>
    </section>
  );
}