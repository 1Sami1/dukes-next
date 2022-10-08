import Link from 'next/link'
import dukesLogo from '../assets/Duke-logo.svg'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Burger from './burger'
import React, { useState } from 'react';



const Header = () => {
  const [open, setOpen] = useState(false)


  return (
    <header className={styles.siteHeader}>
      <Image src={dukesLogo}
             alt="Duke's Steakhouse beige logo"
             width={200}
      />
  <div>
      <ul className={styles.navUl} open={open} setOpen{setOpen} >
        <li className={styles.navLi}><Link href='/'>Home</Link></li>
        <li className={styles.navLi}><Link href='/menuPage'>Menu</Link></li>
        <li className={styles.navLi}><Link href='/aboutPage'>About</Link></li>
        <li className={styles.navLi}><Link href='/contactPage'>Contact</Link></li>
      </ul>
      <Burger open={open} setOpen{setOpen} />
  </div>
    </header>
  )
}

export default Header
