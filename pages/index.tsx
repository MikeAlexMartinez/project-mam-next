import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project MAM</title>
        <meta name="description" content="Personal website and web home of Michael Alexander Martinez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/project-mam-logo-white.png" alt="Project MAM Logo" width={425} height={170}/>
        <h1>Under Construction</h1>
	<p>Concourse test</p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by{' '}🥰</p>
      </footer>
    </div>
  )
}
