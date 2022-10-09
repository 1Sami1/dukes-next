import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header.js'
import styles from '../styles/Home.module.scss'
import { NextRouter } from 'next/router'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
      <Head>
        <title>Duke's Steakhouse & Bar</title>
        <meta name="description" content="Coming Soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Home Page</h1>
      </main>
      </div>
    </div>
  )
}

export default Home
