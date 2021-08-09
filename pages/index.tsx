import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
        <link href="/GameSetup/SelectCharacter" className={styles.card}>
          <h2>Select a character to begin your journey</h2>
        </link>
      </main>
    </div>
  )
}
