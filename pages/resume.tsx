import { Download } from "../src/utils/icons/Download";
import styles from "../styles/Resume.module.scss";

const ResumePage = () => {
  return (
    <main className={styles.resume}>
      <div className={styles.card}>
        <h3 className={styles.header}>
          Hi, I'm <span>Nima</span>
        </h3>
        <p className={styles.paragraph}>
          I'm a 21-year-old software engineer. I'm from Iran and participating
          at Najafabad university. I specialize in TypeScript, React, and NextJs
          and I love making complex, beautiful, and performant web applications
          and solving computer science problems.
        </p>

        <p className={styles.paragraph}>
          I started to become a software engineer in January 2022, and I've had
          the opportunity to work with a B2B company, which has been an amazing
          learning experience for me, both in terms of technology and business.
          And also, I have been focusing more on developer relations to improve
          my people skills and get out of my coding comfort zone.
        </p>

        <p className={styles.paragraph}>
          In my free time, I like to challenge myself to be more creative and
          improve my tech skills by participating in coding meetings and
          listening to tech-related podcasts.
        </p>
        <a
          className="button"
          href="/Nima Nekouei Nia Front-End Developer.pdf"
          download
        >
          <Download />
          Download Resume
        </a>
      </div>
    </main>
  );
};

export default ResumePage;
