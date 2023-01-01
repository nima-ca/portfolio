import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h3>
          Nima <span>Nekouei</span>
        </h3>
        <ul>
          <li className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname == "/resume" ? styles.active : ""}>
            <Link href="/resume">Resume</Link>
          </li>
          <li className={router.pathname == "/contact" ? styles.active : ""}>
            <Link href="/contact">Contact Me</Link>
          </li>
          <li className={router.pathname == "/123" ? styles.active : ""}>
            <Link href="/">DarkMode</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
