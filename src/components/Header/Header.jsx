import styles from "./Header.module.css";
import Row from "../../components/Layout/Row/Row";

import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/img/ips-logo.png";

import Button from "../Layout/Button/Button";

const Header = () => {
  return (
    <header>
      <div className={styles.headerMain}>
        <Row>
          <div className={styles.headerMainItem}>
            <div className={styles.headerMainItems}>
              <div className={styles.headerMainItem}>
                <IoCallOutline></IoCallOutline>
                <p>+91 12121 12121</p>
              </div>
              <div className={styles.headerMainItem}>
                <IoMailOutline></IoMailOutline>
                <p>mail@example.com</p>
              </div>
              <div className={styles.headerMainItem}>
                <IoLocationOutline></IoLocationOutline>
                <p>Daulatpur, Gaulapar</p>
              </div>
            </div>
            <div className={styles.headerSocials}>
              <FaFacebookF></FaFacebookF>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </Row>
      </div>
      <Row>
        <div className={styles.headerNav}>
          <div className={styles.headerNavLogo}>
            <img src={logo} alt="" />
          </div>
          <ul className={styles.headerNavList}>
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
          <div className={styles.headerBtn}>
            <Button>ADMISSION OPEN</Button>
          </div>
          <div className={styles.headerHamburger}>
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
        </div>
      </Row>
    </header>
  );
};

export default Header;
