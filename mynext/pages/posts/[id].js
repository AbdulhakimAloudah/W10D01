// import styles from "./../../styles/post.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
  
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}

const Post = ({ post }) => {
  return (
    <div >
      <h1>Post</h1>

      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    </div>
  );
};

export default Post;
