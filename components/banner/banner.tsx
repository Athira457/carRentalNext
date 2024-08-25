import Image from "next/image";
import styles from './banner.module.css';
import Link from "next/link";

export default function Banner() {
    const topLinks = [
        { href: "", text: "Same as Pick-Up" },
        { href: "", text: "Different Drop-Off" }
    ];

    const bottomLinks = [
        { href: "https://www.apple.com/", imgSrc: "assets/images/Group1.svg", width: 100, height: 40 },
        { href: "https://play.google.com/", imgSrc: "assets/images/Group2.svg", width: 100, height: 40 }
    ];

    const botLinks = [
        { href: "#callBot", imgSrc: "assets/images/call.svg", width: 60, height: 40 },
        { href: "#chatBot", imgSrc: "assets/images/chat.svg", width: 60, height: 40 }
    ];

    const mobileLinks = [
        { href: "", text: "Same as Pick-Up" },
        { href: "", text: "Different Drop-Off" }
    ];

    return (
        <div className="bannerWrapper">
            <div className={styles.bannerContainer}>
                <div className={styles.bannerTop}>
                    <div className={styles.topText}>
                        {topLinks.map((link, index) => (
                            <Link key={index} href={link.href}>{link.text}</Link>
                        ))}
                        <select id={styles.vehicleType}>
                            <option value="0">Select vehicle type</option>
                        </select>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.check}>
                            <select className={styles.location} id={styles.location}>
                                <option id={styles.location} value="0">Quoz</option>
                            </select>
                            <input type="datetime-local"  id={styles.datetimeInput} name="datetime" />
                            <input type="datetime-local"  id={styles.datetimeInput} name="datetime" />
                        </div>
                        <button className={styles.searchBtn}>
                            <Link href="#search"><Image src="assets/images/search.svg" alt="" width={20} height={20} /></Link>
                        </button>
                        <div className={styles.bar}></div>
                        <a href="#QuickBook">
                            <button className={styles.bookBtn}>Quick Book</button>
                        </a>
                    </div>

                    <div className={styles.bottomText}>
                        <p>Download our App for easy accessibility anytime, anywhere!</p>
                        {bottomLinks.map((link, index) => (
                            <Link key={index} href={link.href} target="_blank" className={styles.playBtn}>
                                <Image src={link.imgSrc} alt="" width={link.width} height={link.height} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.bot}>
                    {botLinks.map((link, index) => (
                        <Link key={index} href={link.href} target="_blank">
                            <Image src={link.imgSrc} alt="" className={styles.callBot} width={link.width} height={link.height} />
                        </Link>
                    ))}
                </div>
            </div>
            {/* Show on mobile view */}
            <div className={styles.linkText}>
                {mobileLinks.map((link, index) => (
                    <Link key={index} href={link.href} className={styles.link}>{link.text}</Link>
                ))}
                <select id={styles.vehicleType}>
                    <option value="0">Select vehicle type</option>
                </select>
            </div>

            <div className={styles.mobileButton}>
                <button className={styles.book}>Book a car</button>
                <button className={styles.book1}>Quick book</button>
            </div>
        </div>
    );
}
