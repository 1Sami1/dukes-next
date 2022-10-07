import Link from 'next/link'
import dukesLogo from '../assets/Duke-logo.svg'
import Image from 'next/image'


const Header = () => {
  return (
    <header>
      <Image src={dukesLogo}
             alt="Duke's Steakhouse beige logo"
             width={200}
      />
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/menuPage'>Menu</Link></li>
        <li><Link href='/aboutPage'>About</Link></li>
        <li><Link href='/contactPage'>Contact</Link></li>
      </ul>

    </header>
  )
}

export default Header
