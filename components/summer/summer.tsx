import Image from "next/image";
import styles from './summer.module.css'; 
import Link from "next/link";

// Summer promotion section
export default function Summer() {
    return (
    <div className={styles.carBanner}>
        <p>Recieve guarnteed  <button className={styles.offerBtn}><Link href="#" target="_blank">GIFT VOUCHER</Link></button>
            on a monthly hire or lease</p>
            <div className={styles.sliderDots}>
                <a href="#slide1" className={styles.dot}></a>
                <a href="#slide2" className={styles.dot}></a>
                <a href="#slide3" className={styles.dot}></a>
            </div>
    </div>
    );
}