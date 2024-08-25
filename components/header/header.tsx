"use client";
import Image from "next/image";
import styles from './header.module.css'; 
import Link from "next/link";

const toggleMenu = () => {
    const menu = document.querySelector(`.${styles.hamburgerMenu}`) as HTMLElement;
    if (menu) {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
};

export default function Header() {
    return (
        // header section starts here
        <header className={styles.headerSection}>
            <div className={styles.media}>
            <ul>
                <li><Link href="" target="_blank"><Image src="assets/images/f.svg" alt="facebook" width={20} height={20}/></Link></li>
                <li><Link href="" target="_blank"><Image src="assets/images/insta.svg" alt="instagram" width={20} height={20} /></Link></li>
                <li><Link href="" target="_blank"><Image src="assets/images/x.svg" alt="meta" width={20} height={20} /></Link></li>
                <li><Link href="" target="_blank"><Image src="assets/images/in.svg" alt="linkedin" width={20} height={20} /></Link></li>
            </ul>
        </div>
            <nav className={styles.navbar}>
               
                    <Link href="#"><Image src="assets/images/logo.svg" alt="logo" className={styles.carLogo} width={360} height={50}/></Link>
                    <span id={styles.icon} onClick={toggleMenu}>&#9776;</span>
                
                <ul className={styles.items}>
                    <li><Link href="#About">About</Link></li>
                    <li><Link href="#Offers">Offers</Link></li>
                    <li><Link href="#Corporate">Corporate</Link></li>
                    <li><Link href="#Personal">Personal</Link></li>
                    <li><Link href="#Location">Location</Link></li>
                    <li><Link href="#Contact">Contact Us</Link></li>
                    <li><Link href="#notification"><Image src="assets/images/bell.svg" alt="icon" width={20} height={20} /></Link></li>
                    <li><Link href="#profile"><button className={styles.profile}><Image src="assets/images//j.svg" alt="profile" width={50} height={20}/>John Doe</button></Link></li>
                </ul>
                <div className={styles.hamburgerMenu}>
                    <ul>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Offers">Offers</a></li>
                        <li><a href="#Corporate">Corporate</a></li>
                        <li><a href="#Personal">Personal</a></li>
                        <li><a href="#Location">Location</a></li>
                        <li><a href="#Contact">Contact Us</a></li>
                        <li><a href="#notification"><Image src="assets/images/bell.svg" alt="icon" width={20} height={20} /></a></li>
                        <li><a href="#profile"><button className={styles.profileBtn}><Image src="assets/images//j.svg" alt="profile" width={50} height={20}/>John Doe</button></a></li>
                    </ul>
                </div>
            </nav>
            <div className={styles.marquee}>
                <p> Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for New Offers</p>
            </div>
        </header>
    );
}