import Image from "next/image";
import styles from './location.module.css'; 

// Location section starts here 
export default function Location() {
    const locations = ["Dubai", "Abu Dhabi", "Sharjah", "Fujairah", "Ras Al Khaimah"];

    return (
        <div className={styles.locationdiv}>
            <h1>Locations</h1>
            <ul className={styles.locationList}>
                {locations.map((location, index) => (
                    <li key={index}>
                        <Image src="assets/images/redloc.svg" alt="location" width={20} height={20} />
                        {location}
                    </li>
                ))}
            </ul>
        </div>
    );
}
