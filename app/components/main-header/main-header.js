import Link from "next/link"
import logoImg from '@/assets/icon.png';
import classes from './main-header.module.css';
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader(){

    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logoImg} alt="A plate with food on in it." priority></Image>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}