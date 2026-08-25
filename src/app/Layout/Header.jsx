import React from "react";
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <a href="">home</a>
                <a href="">something</a>
                <a href="">Hello2</a>
                <div className={styles.logo}>
                    <img src="/GooseWithHat_Regular.png" alt="" />
                </div>
                <a href="">home</a>
                <a href="">something</a>
                <a href="">Hello2</a>

            </nav>
        </header>
    );
}

export default Header;