import styles from "./Vision.module.css";

const Vision = () => {
  return (
    <section className={styles.vision}>
      <div id="our-vision" className={styles.visionCard}>
        <div className={styles.visionCardLeft}>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
            className={styles.visionCardLeftTextContainer}
          >
            <h2>Our Vision</h2>
            <p>
              To provide all our students with the tools and strategies to
              become life long learners and succeed in the global environment.
            </p>
            <a href="#about-us">Read our Story</a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="300"
          className={styles.visionCardRight1}
        ></div>
      </div>
      <div id="our-mission" className={`${styles.visionCard} `}>
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="300"
          className={styles.visionCardRight2}
        ></div>
        <div className={`${styles.visionCardLeft} ${styles.visionCard2}`}>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
            className={styles.visionCardLeftTextContainer}
          >
            <h2>Our Mission</h2>
            <p>
              We at Imperium Public School look forward to providing a rigorous,
              hands-on and well- balanced educational experience. Mindful of the
              different strengths of all our learners and preparing them well
              for the future.
            </p>
            <a href="#about-us">Read our Story</a>
          </div>
        </div>
      </div>
      <div id="our-motto" className={styles.visionCard}>
        <div className={styles.visionCardLeft}>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
            className={styles.visionCardLeftTextContainer}
          >
            <h2>Our MOTTO</h2>
            <p>
              Our Motto itself embalms the very attitude we want the kids from
              our school to have. Vincere Somnium (Latin) translates to Dream to
              Win.
            </p>
            <a href="#about-us">Read our Story</a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="300"
          className={styles.visionCardRight3}
        ></div>
      </div>
    </section>
  );
};

export default Vision;
