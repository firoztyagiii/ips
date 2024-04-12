import styles from "./Button.module.css";

const Button = ({ children, href }) => {
  return (
    <a href={href} className={styles.btn}>
      {children}
    </a>
  );
};

export default Button;
