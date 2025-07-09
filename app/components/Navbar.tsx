import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/Logo.png';
export default function Navbar(){
    return(
        <nav>
            <Image src={Logo}
            alt='Logo'
            width={70}
            height={100}/>


        <Link href="/">
        Home
        </Link>
        <Link href="/about">
        About Me
        </Link>
        <Link href="/projects">
        Projects
        </Link>
    </nav>
    )
}