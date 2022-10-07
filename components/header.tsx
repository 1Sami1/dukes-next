import Link from 'next/link'
import dukesLogo from '../assets/Duke-logo.svg'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <Image src={dukesLogo}
             alt="Duke's Steakhouse beige logo"
             width={200}
      />
      <ul className={styles.navUl} >
        <li className={styles.navLi}><Link href='/'>Home</Link></li>
        <li className={styles.navLi}><Link href='/menuPage'>Menu</Link></li>
        <li className={styles.navLi}><Link href='/aboutPage'>About</Link></li>
        <li className={styles.navLi}><Link href='/contactPage'>Contact</Link></li>
      </ul>
    </header>
  )
}

export default Header
