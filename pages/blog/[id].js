import posts from "../../posts.json";
import Link from "next/link";
export default function hello({ post }) {
  return (
    <>
      <h3>Dynamic page content</h3>
      <p>Post ID: {post.id}</p>
      <p>Blog: {post.text}</p>
      <Link href="/blog">Back to Blog list</Link>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(posts).map((id) => ({ params: { id } })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts[params.id],
    },
  };
}
