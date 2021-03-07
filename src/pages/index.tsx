import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

/**
 * TODO: Create Navigation Bar
 * TODO: Use React Smooth Scroll to scroll
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.homeContainer}>
        <div>
          <h1 className={styles.homeTitle}>A ajuda que sua empresa <span style={{color: '#6452DE'}}>precisa</span></h1>
          <img className={styles.illustrationTwo} src='./Illus2.svg' alt='Ilustração'/>
        </div>
      </section>
    </>
  )
}
