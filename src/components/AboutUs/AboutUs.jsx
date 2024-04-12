import Row from "../Layout/Row/Row";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={styles.overLay}></div>
      <Row>
        <div
          data-aos="zoom-out-down"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="300"
          className={styles.aboutUsContainer}
        >
          <h2>About Us</h2>
          <p>
            Imperium Public School was established in the year 2016. At Imperium
            Public School we aspire to take a whole-child approach to elementary
            education. Teachers, administrators, counselors, and support staff
            will work together to meet the intellectual, social, behavioral, and
            emotional needs of each and every child we serve.
          </p>
          <p>
            Our aim is not only teach children but use the natural curiosity of
            the child to be able to learn what we teach the student. For this we
            are in a process of hiring the most efficient and involved staff to
            be able to guide your child.
          </p>
          <p>
            The location of the school is conducive for an educational
            environment. Spread over 2 acres of land, Imperium Public School
            provides a wholesome approach to education. With a blend of modern
            and traditional techniques we are adamant to provide all the
            facilities which would be needed for the wholesome development of
            the child.
          </p>
        </div>
      </Row>
    </section>
  );
};

export default AboutUs;
