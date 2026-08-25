import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PixelBlast from "../PixelBlast";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.background}>
        <PixelBlast
          variant="diamond"
          pixelSize={2}
          color="#be95e4"
          patternScale={3.25}
          patternDensity={1.4}
          pixelSizeJitter={0.15}
          enableRipples={false}
          speed={0.4}
          edgeFade={0.2}
          transparent
        />
      </div>

      <div className={styles.foreground}>
        <Header />

        <div className={styles.content}>
          <main className={styles.main}>{children}</main>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;