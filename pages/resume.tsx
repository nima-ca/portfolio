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
          React Front-End developer and computer engineering student currently
          attending Najafabad University. Experienced in developing user
          interfaces and web applications. Aiming to successfully fill in the
          front-end developer role and work in conjunction with the other team
          members. Eager to learn new Techs and proficient in an assortment of
          technologies including JavaScript and TypeScript, and able to write
          high-quality, clean, and tested code using patterns and best
          practices!
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

export async function getStaticProps() {
  return {
    props: {},
  };
}
