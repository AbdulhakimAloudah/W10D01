import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>my web</title>
      </Head>
     <h1>hi from index</h1>
    </div>
  )
}
