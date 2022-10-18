import styles from "../styles/User.module.css";

export function Card({ user }) {
  return (
    <div className={styles.card}>
      <img src={user.avatar} alt="Test" className={styles["card-mage"]} />
      <h4 className={styles["card-title"]}>{user.name}</h4>
    </div>
  );
}
