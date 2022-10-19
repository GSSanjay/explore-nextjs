import { Container } from "../../components/Container";

export default function SSR(props) {
  return <Container users={props.allPosts.data} />;
}

//SSR
export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  console.log("dddd", { allPosts });

  return {
    props: { allPosts },
  };
}
