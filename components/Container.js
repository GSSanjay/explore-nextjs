import styles from "../styles/User.module.css";

import { Card } from "./Card";

export function Container({ users }) {
  return (
    <div className={styles.container}>
      {users &&
        users.map((user, index) => {
          return <Card user={user} key={index} />;
        })}
    </div>
  );
}
