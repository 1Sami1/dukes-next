import type { NextPage } from 'next'
import dukesLogo from '../assets/Duke-logo.svg'
import Image from 'next/image'


const Header: NextPage = () => {
  return (
    <header>
      <Image src={dukesLogo}
             alt="Duke's Steakhouse beige logo"
             width={200}
      />
      
    </header>
  )
}

export default Header
