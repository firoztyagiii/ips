import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="300"
        className={styles.footerContainer}
      >
        <div className={styles.headerSocials}>
          <span>
            <FaFacebookF></FaFacebookF>
          </span>
          <span>
            <FaInstagram></FaInstagram>
          </span>
          <span>
            <FaTwitter></FaTwitter>
          </span>
        </div>
        <div className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Our Vision</a>
            </li>
            <li>
              <a href="#">Motto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Imperium Public School 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
