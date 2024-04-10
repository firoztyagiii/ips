import styles from "./Principle.module.css";

import Row from "../Layout/Row/Row";
import Card from "../Layout/Card/Card";

import { BiHealth } from "react-icons/bi";
import { PiExam } from "react-icons/pi";
import { FaChild } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";

const Principle = () => {
  return (
    <section className={styles.principle}>
      <h2 className={styles.principleHeadText}>Founding Principles</h2>
      <Row>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="300"
          className={styles.principleCardContainer}
        >
          <Card
            head="health comes first"
            text="Free health check up in every 2 months for all kids"
            Icon={BiHealth}
          ></Card>
          <Card
            head="learning comes by doing"
            text="Practical demonstration and modernized study environment with audio visual presentation"
            Icon={PiExam}
          ></Card>
          <Card
            head="Adapt education to the individual child"
            text="Teacher- student ratio at the optimum level and parent- teacher interaction every bi-monthly"
            Icon={FaChild}
          ></Card>
          <Card
            head="Develop group consciousness and social mindedness"
            text="Team building exercises and interactions with influential personalities on a regular basis"
            Icon={FaBrain}
          ></Card>
          <Card
            head="Provide our children with abundant opportunities for creative expression"
            text="Creative workshops, Open classrooms and creative walls and freedom of expression workshops"
            Icon={SiGoogleclassroom}
          ></Card>
          <Card
            head="Adapt education to the individual child"
            text="Teacher- student ratio at the optimum level and parent- teacher interaction every bi-monthly"
            Icon={FaChild}
          ></Card>
        </div>
      </Row>
    </section>
  );
};

export default Principle;
