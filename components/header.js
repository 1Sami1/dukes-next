import Link from 'next/link'
import dukesLogo from '../assets/Duke-logo.svg'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Burger from './burger'
import React, { useState, useEffect } from 'react';



const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  const showHideNav = () => {
    setNavOpen(!navOpen);
}

const isDesktop = (e) => {
    if(e.matches)
        setNavOpen(false);
    }
    useEffect(() => {
      let mediaQuery = window.matchMedia('(min-width: 600px)');
      mediaQuery.addEventListener('change', isDesktop);
      // this is the cleanup function to remove the listener
      return () => mediaQuery.removeEventListener('change', isDesktop);
}, []);
}

  return (
    <header className={styles.siteHeader}>
      <Image src={dukesLogo}
             alt="Duke's Steakhouse beige logo"
             width={150}
      />
  <div>
      <ul className={styles.navUl} >
        <li className={styles.navLi}><Link href='/'>Home</Link></li>
        <li className={styles.navLi}><Link href='/menuPage'>Menu</Link></li>
        <li className={styles.navLi}><Link href='/aboutPage'>About</Link></li>
        <li className={styles.navLi}><Link href='/contactPage'>Contact</Link></li>
      </ul>
      <Burger />
  </div>
    </header>
  )

export default Header
