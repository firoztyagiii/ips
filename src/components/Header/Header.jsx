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
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (showHeader) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [showHeader]);

  const hambugerHandler = () => {
    setShowHeader(false);
  };

  return (
    <header id="home">
      <div
        style={{
          transform: showHeader && "translateX(0%)",
        }}
        className={styles.headerHambugerMenu}
      >
        <div onClick={hambugerHandler} className={styles.hamburgerContainer}>
          <div className={styles.hamburgerSocials}>
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
          <div className={styles.HambugerNav}>
            <ul className={styles.hamburgerNavList}>
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
      </div>

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
            <a href="#home">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <ul className={styles.headerNavList}>
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
          <div className={styles.headerBtn}>
            <Button>ADMISSION OPEN</Button>
          </div>
          <div
            onClick={() => {
              setShowHeader((prev) => !prev);
            }}
            className={styles.headerHamburger}
          >
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
        </div>
      </Row>
    </header>
  );
};

export default Header;
