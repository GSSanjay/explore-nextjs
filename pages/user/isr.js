import { Container } from "../../components/Container";

export default function ISR({ users }) {
  return <Container users={users} />;
}

//ISR
export async function getStaticProps() {
  const res = await fetch("https://634e64cc4af5fdff3a5ab145.mockapi.io/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 5, //In seconds
  };
}
