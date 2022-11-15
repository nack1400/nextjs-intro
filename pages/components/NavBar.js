import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css"

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        About
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          color : white;
        }
      `}
      </style>
    </nav>
  );
}
