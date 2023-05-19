import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.title}>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.text}>Welcome to the home page.</p>
      <p className={styles.text}>This is another text.</p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
  );
}
