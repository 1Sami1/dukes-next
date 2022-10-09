import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header.js'
import styles from '../styles/Home.module.scss'

const Menu: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duke's Steakhouse & Bar</title>
        <meta name="description" content="Coming Soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Menu Page</h1>
      </main>

    </div>
  )
}

export default Menu
