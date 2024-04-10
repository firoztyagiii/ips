import styles from "./Card.module.css";

import { GiHealthCapsule } from "react-icons/gi";

const Card = ({ head, text, Icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <Icon></Icon>
        <p>{head}</p>
      </div>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default Card;
