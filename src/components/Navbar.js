import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/user.png" width={100} height={100}></Image>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/users">User listing</Link>
    </nav>
  );
};

export default Navbar;
