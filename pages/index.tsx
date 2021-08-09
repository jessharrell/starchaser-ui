import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Chaser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Star Chaser
        </h1>
          <div className={styles.card}>
            <Link href="/gameSetup/selectCharacter" >
                <a>Select a character to begin your journey</a>
            </Link>
          </div>
      </main>
    </div>
  )
}
