import Button from "../Layout/Button/Button";
import Row from "../Layout/Row/Row";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverLay}></div>

      <Row>
        <div className={styles.heroText}>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <h1 className={styles.heroHead}>
              We aspire to take a whole-child approach to elementary education.
            </h1>
            <p className={styles.heroSub}>
              Teachers, administrators, counselors, and support staff will work
              together to meet the intellectual, social, behavioral, and
              emotional needs of each and every child we serve.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
      </Row>
    </section>
  );
};

export default Hero;
