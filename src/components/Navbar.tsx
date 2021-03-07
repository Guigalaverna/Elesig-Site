import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
        <img src='./Logo.svg' alt='Logo'/>
        <div className={styles.navLinks}>
          <p className={styles.navLink}>Home</p>
          <p className={styles.navLink}>Sobre Nós</p>
          <p className={styles.navLink}>Serviços</p>
          <p className={styles.navLink}>Depoimentos</p>
          <button>
            Contato
          </button>
        </div>
      </nav>
  )
}
