import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HELLO THIS IS THE HOMEPAGE</h1>
      <Link href="/signup">to sign up</Link>
      <Link href="/login">to log in</Link>
    </main>
  );
}
