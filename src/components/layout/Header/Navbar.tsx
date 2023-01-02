import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import ColorMode from "../../ColorMode/ColorMode";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h3>
          Nima <span>Nekouei</span>
        </h3>
        <div>
          <ul className={styles.desktopNav}>
            <li className={router.pathname == "/" ? styles.active : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname == "/resume" ? styles.active : ""}>
              <Link href="/resume">Resume</Link>
            </li>
            <li className={router.pathname == "/contact" ? styles.active : ""}>
              <Link href="/contact">Contact Me</Link>
            </li>
          </ul>
          <div className={styles.mobileNav}>
            <button
              onClick={(e) => setIsMenuActive(!isMenuActive)}
              className={`${styles.hamburger} ${styles["hamburger--spin"]} ${
                isMenuActive ? styles["is-active"] : ""
              }`}
              type="button"
            >
              <span className={styles["hamburger-box"]}>
                <span className={styles["hamburger-inner"]}></span>
              </span>
            </button>
            <ul
              className={`${styles["mobileNav--list"]} ${
                isMenuActive ? styles["is-active"] : ""
              }`}
            >
              <li className={router.pathname == "/" ? styles.active : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={router.pathname == "/resume" ? styles.active : ""}>
                <Link href="/resume">Resume</Link>
              </li>
              <li
                className={router.pathname == "/contact" ? styles.active : ""}
              >
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
          <ColorMode />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
