import Image from "next/image";
import styles from './footer.module.css'; 
import Link from "next/link";

//footer section starts here
export default function Footer(){
    return(
        <div className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <div className={styles.divisionFooter}>
                    <div className={styles.logoFooter}>
                        <Image src="assets/images/iconf.svg" alt="logo" width={200} height={50}/>
                        <p>Member of the Al Habtoor Group</p>
                    </div>
                    <div className={styles.footerMenu}>
                        <ul className={styles.footerItems}>
                            <li><Link href="#Home">Home</Link></li>
                            <li><Link href="#Offers">Offers</Link></li>
                            <li><Link href="#FAQ">FAQ</Link></li>
                            <li><Link href="#career">Career</Link></li>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#Location">Locations</Link></li>
                            <li><Link href="#privacy">Privacy Policy</Link></li>
                            <li><Link href="#terms">Terms And Conditions</Link></li>
                            <li><Link href="#services">Services</Link></li>
                            <li><Link href="#Contact">Contact Us</Link></li>
                            <li><Link href="#service request">Service Request</Link></li>  
                        </ul>
                        <p>Al Habtoor Companies</p>
                        <ul className={styles.Companies}>
                            <li>Hospitality</li>
                            <li>Real Estate</li>
                            <li>Education</li>
                            <li>Publishing</li>
                            <li>Automotive</li>
                            <li>Vehicle Leasing</li>
                        </ul>
                    </div>
                    <div className={styles.footerSecurity}>
                        <p>follow us on</p>
                        <ul className={styles.socialIcons}>
                            <li><Link href="" target="_blank"><Image src="assets/images/Social Icons (1).svg" alt="" width={10} height={10}/></Link></li>
                            <li><Link href="" target="_blank"><Image src="assets/images/Social Icons (2).svg" alt="" width={10} height={10}/></Link></li>
                            <li><Link href="" target="_blank"><Image src="assets/images/Vector.svg" width={10} alt="" height={10}/></Link></li>
                            <li><Link href="" target="_blank"><Image src="assets/images/Social Icons (3).svg" alt="" width={10} height={10}/></Link></li>
                            <li><Link href="" target="_blank"><Image src="assets/images/socialicon.svg" alt="" width={10} height={10}/></Link></li>
                        </ul>
                        <Image className={styles.lock} src="assets/images/secure.svg" alt="" width={40} height={20}/>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2018 Car rental LLC - All Rights Reserved. </p>
                </div>
            </div>

            <div className={styles.mobileFooter}>
                <div className={styles.mobileIcon}>
                    <div className={styles.sectionTop}>
                        <Image src="assets/images/logofooter.svg" alt="footerlogo" width={200} height={50}/>
                        <p>Member of the AI habtoor Group</p>
                        <ul className={styles.social}>
                            <li><Link href="" target="_blank"><Image src="assets/images/f.svg" alt="facebook" width={10} height={10}/></Link></li>
                            <li><Link href="" target="_blank"><Image src="assets/images/x.svg" alt="meta" width={10} height={10}/></Link></li>
                            <li><Link href="" target="_blank"><Image src="assets/images/insta.svg" alt="instagram" width={10} height={10}/></Link></li>
                            <li><Link href="" target="_blank"><Image src="assets/images/in.svg" alt="in" width={10} height={10}/></Link></li>
                        </ul>
                    </div>
                    <div className={styles.mobileList}>
                        <ul className={styles.links}>
                            <li><Link href="#Home" className={styles.linkStyle}>Home</Link></li>
                            <li><Link href="#Offers" className={styles.linkStyle}>Offers</Link></li>
                            <li><Link href="#FAQ" className={styles.linkStyle}>FAQ</Link></li>
                            <li><Link href="#career" className={styles.linkStyle}>Career</Link></li>
                            <li><Link href="#about" className={styles.linkStyle}>About Us</Link></li>
                            <li><Link href="#Location" className={styles.linkStyle}>Locations</Link></li>
                            <li><Link href="#privacy" className={styles.linkStyle}>Privacy Policy</Link></li>
                            <li><Link href="#terms" className={styles.linkStyle}>Terms And Conditions</Link></li>
                            <li><Link href="#services" className={styles.linkStyle}>Services</Link></li>
                            <li><Link href="#Contact" className={styles.linkStyle}>Contact Us</Link></li>
                            <li><Link href="#service request" className={styles.linkStyle}>Service Request</Link></li>  
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.mobieBottom}>
                <p>Al Habtoor Companies</p>
                <ul className={styles.Companies}>
                    <li>Hospitality</li>
                    <li>Real Estate</li>
                    <li>Education</li>
                    <li>Publishing</li>
                    <li>Automotive</li>
                    <li>Vehicle Leasing</li>
                </ul>
                <Image src="assets/images/secure.svg" alt="" width={40} height={20}/>
                <div className={styles.copy}>
                    <p>&copy; 2018 Car rental LLC - All Rights Reserved. </p>
                </div>
            </div>          
        </div>
    
    );
}