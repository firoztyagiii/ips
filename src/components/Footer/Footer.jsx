import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="300"
          className={styles.headerSocials}
        >
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
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="300"
          className={styles.footerNav}
        >
          <ul className={styles.footerNavList}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#our-mission">Our Mission</a>
            </li>
            <li>
              <a href="#our-vision">Our Vision</a>
            </li>
            <li>
              <a href="#our-motto">Motto</a>
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
