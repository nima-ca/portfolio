import { TypeAnimation } from "react-type-animation";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.header}>
        <TypeAnimation
          sequence={[
            `I'm a Front End Developer! 😁`,
            1000,
            "I Develop Web Applications! 🍕",
            1000,
            "I Love JavaScript and TypeScript! 😍",
            1000,
            "I use React and NextJs! 🧙‍♂️",
            1000,
          ]}
          speed={60}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>
      <p className={styles.subHeader}>
        Hi, I'm <span>NIMA NEKOUEI NIA</span>, A React Front-End Developer based
        in Isfahan, Iran.
      </p>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
