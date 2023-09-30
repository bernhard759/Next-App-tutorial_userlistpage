import Link from 'next/link'
import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
    <Head>
      <title>Userlist | Home</title>
      <meta name="keywords" content="users"></meta>
    </Head>
    <div>
     <h1 className={styles.title}>Home</h1>
     <p className={styles.text}>This is some text</p>
     <Link href="/users" className={styles.btn}>User list</Link>
     </ div>
     </>
  )
}
