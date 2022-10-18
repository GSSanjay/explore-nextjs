import { useEffect, useState } from "react";

import { Container } from "../../components/Container";

export default function CSR() {
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

  return <Container users={users} />;
}
