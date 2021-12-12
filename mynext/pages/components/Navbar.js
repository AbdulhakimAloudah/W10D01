import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      ;
    </div>
  );
};

export default Navbar;
