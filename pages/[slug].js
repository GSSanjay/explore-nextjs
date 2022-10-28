import { useRouter } from "next/router";
export default function ProductDetail() {
  const router = useRouter();
  const slug = router.query.slug;

  return <h1>Details about {slug}</h1>;
}
