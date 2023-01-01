import { TypeAnimation } from "react-type-animation";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.header}>
        <TypeAnimation
          cursor={false}
          sequence={[
            `I'm a Front End Developer! 😁`,
            2000,
            "I Develop Web Applications! 🍕",
            2000,
            "I Love JavaScript and TypeScript! 😍",
            2000,
            "I use React and NextJs! 🧙‍♂️",
            2000,
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
