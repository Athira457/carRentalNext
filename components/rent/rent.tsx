import Image from "next/image";
import styles from './rent.module.css';

export default function Rent() {
    const rentSteps = [
        {
            icon: "assets/images/01.svg",
            iconAlt: "icon1",
            detailIcon: "assets/images/blurloc.svg",
            detailAlt: "location",
            text: "Select the location. Browse through our available options and find the perfect car to suit your needs",
        },
        {
            icon: "assets/images/02.svg",
            iconAlt: "icon2",
            detailIcon: "assets/images/blurcalendar.svg",
            detailAlt: "calendar",
            text: "Choose your desired Pick-Up date and time.",
        },
        {
            icon: "assets/images/03.svg",
            iconAlt: "icon3",
            detailIcon: "assets/images/blurcar.svg",
            detailAlt: "car",
            text: "Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.",
        },
    ];

    return (
        <div className={styles.rendDetails}>
            <h1>Rent/Lease In Three Easy Steps</h1>
            <div className={styles.rent}>
                {rentSteps.map((step, index) => (
                    <div key={index} className={styles.detailsOrder}>
                        <Image src={step.icon} alt={step.iconAlt} width={20} height={20} />
                        <div className={styles.rentLocation}>
                            <Image src={step.detailIcon} alt={step.detailAlt} width={40} height={40} />
                            <p>{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
