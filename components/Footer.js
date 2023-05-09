import styles from "../styles/footer.module.css";
import { useSelector } from "react-redux";

function Footer() {

const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <footer className={darkMode ? styles.footer : styles.footerLight}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} - Portfolio | Florent Lelubez
      </p>
    </footer>
  );
}

export default Footer;
