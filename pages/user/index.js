import { useEffect, useState } from "react";
import styles from "../../styles/User.module.css";

import axios from "axios";

function Card({ user }) {
  return (
    <div className={styles.card}>
      <img src={user.avatar} alt="Test" className={styles["card-mage"]} />
      <h4 className={styles["card-title"]}>{user.name}</h4>
    </div>
  );
}

export default function User() {
  //CSR
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const data = await fetch(
      "https://634e64cc4af5fdff3a5ab145.mockapi.io/users"
    );
    const users = await data.json();
    return users;
  };

  useEffect(() => {
    const users = getUsers();
    users.then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {users &&
          users.map((user, index) => {
            return <Card user={user} key={index} />;
          })}
      </div>
    </div>
  );
}

//SSR
/* export async function getServerSideProps() {
  const res = await fetch("https://634e64cc4af5fdff3a5ab145.mockapi.io/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
} */

//CSR
/* export async function getStaticProps() {
  const res = await fetch("https://634e64cc4af5fdff3a5ab145.mockapi.io/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
} */

//ISR
/* export async function getStaticProps() {
  const res = await fetch("https://634e64cc4af5fdff3a5ab145.mockapi.io/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 5, //In seconds
  };
} */
