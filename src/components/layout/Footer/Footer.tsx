import { Github } from "../../../utils/icons/Github";
import { Linkedin } from "../../../utils/icons/Linkedin";
import { Telegram } from "../../../utils/icons/Telegram";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.info}>
          <div>
            <span>E: </span>
            <a
              href="mailto:nekoueinima@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nekoueinima@gmail.com
            </a>
          </div>
          <div>
            <span>T: </span>
            <a
              href="Tel: +989136648475"
              target="_blank"
              rel="noopener noreferrer"
            >
              +98 913 664 8475
            </a>
          </div>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/nima-nekouei-nia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/nima-ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://t.me/Nima_ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
