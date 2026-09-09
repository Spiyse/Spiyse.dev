import React from "react";
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <a href="">HOME</a>
                <a href="">ABOUT</a>
                <div className={styles.logo}>
                    <img src="/GooseWithHat_Regular.png" alt="" />
                </div>
                <a href="">NOTES</a>
                <a href="">PROJECTS</a>

            </nav>
        </header>
    );
}

export default Header;