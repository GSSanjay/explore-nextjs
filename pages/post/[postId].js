// import { useRouter } from "next/router";
export default function ProductDetail({ post }) {
  // const router = useRouter();
  // const slug = router.query.slug;

  return <h1>{post.body}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
