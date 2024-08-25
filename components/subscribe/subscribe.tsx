import Image from "next/image";
import styles from './subscribe.module.css'; 
import Link from "next/link";

// Summer promotion section
export default function Subscribe() {
    return (
        <div className={styles.subscribe}>
            <div className={styles.subscribeInfo}>
            <h3>Subscribe here for exclusive offers and updates!</h3>
            <div className={styles.inputDiv}>
                <input className={styles.inputField} type="text" placeholder="Name"/>
                <input className={styles.inputField} type="email" placeholder="Email"/>
            </div>
            <p> Do not miss out! enter your email and your name, 
                then hit subscribe to unlock a world of special
                offers and details.
            </p>
            <Link href="#subscribe"><button id={styles.subscribeBtn}>Subscribe</button></Link>
        </div>
        <div className={styles.subscribeInfo}>
            <div className={styles.phoneImage}>
                <Image src="assets/images/Rectangle.svg" className="firstImage" alt="mobile" width={200} height={400}/>
                <div className={styles.contents}>
                    <p>Enter your number and receive a direct link to download the app</p>
                    <input type="text" className={styles.phnNumber} placeholder="Enter Phone Number" />
                    <Link href=""><button id={styles.getLinkBtn}>Get the link</button></Link>
                    <p>Get in on</p>
                    <div className={styles.socialMedia}>
                        <Image src="assets/images/appstore.svg" alt="app-store" width={80} height={40}/> 
                        <Image src="assets/images/playstore.svg" alt="google-app" width={80} height={40}/>
                    </div>
                </div>
            </div>
            <div className={styles.mobileSubscribe}>
                <div className={styles.subscribeContent}>
                    <Image src="assets/images/Rectangle.svg" alt="mobile" width={200} height={400}/>
                    <div className="socialMedia">
                        <p>Get in on</p>
                        <Image src="assets/images/appstore.svg" alt="app-store" width={80} height={40}/>
                        <Image src="assets/images/playstore.svg" alt="google-app"width={80} height={40}/>
                        <p>Enter your number and
                            receive a direct link
                            to download the app
                        </p>
                    </div>
                </div>
                <div className={styles.mobileInput}>
                    <div className={styles.input}>
                        <input type="text" className={styles.inputField} placeholder="Enter the Number"/>
                    </div>
                    <Link href=""><button id={styles.getLinkBtn}>Get the Link</button></Link>
                </div>
            </div>
        </div>
    </div>

    );
}