import Row from "../Layout/Row/Row";
import styles from "./AtImperium.module.css";
import school from "../../assets/img/ips-school-image.jpeg";

const AtImperium = () => {
  return (
    <section className={styles.imperium}>
      <Row>
        <div className={styles.imperiumContainer}>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
            className={styles.imperiumLeft}
          >
            <img src={school} alt="" />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
            className={styles.imperiumRight}
          >
            <div className={styles.imperiumRightTab}>
              <button>Development</button>
              <button>Benefits</button>
              <button>Self Discovery</button>
            </div>
            <h2>Achieve Excellence Through Education</h2>
            <ul>
              <li>
                <p>
                  We want to be able to challenge each student to think
                  critically and be able to express themselves freely thus
                  enabling them to develop into confident problem solvers.
                </p>
                <p>
                  We look to provide a nurturing and respectful environment
                  which would encourage self- discovery and collaboration. We
                  want to provide a strong base of value education which stands
                  well in the long run in the future to help each student
                  becoming a responsible human being.
                </p>
                <p>
                  We want to encourage open communication between teachers and
                  students to make the learning a two way path. Our teachers
                  still believe that knowledge is never complete and they too
                  are open to learn new things every day from kids and parents
                  alike.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Row>
    </section>
  );
};

export default AtImperium;
