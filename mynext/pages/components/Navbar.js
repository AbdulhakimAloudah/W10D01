import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>posts</a>
          </Link>
        </li>
      </ul>
      ;
    </div>
  );
};

export default Navbar;
