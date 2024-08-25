import Image from 'next/image';
import Link from 'next/link';
import styles from './popular.module.css'; 

const carData = [
  {
    id: 1,
    imageSrc: 'assets/images/bluecar.svg',
    title: 'Mitsubishi Eclipse',
    description: `Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV
                  mobility with signature Mitsubishi styling, technology, and
                  driving confidence.`,
    price: 'AED 2700/ Monthly',
    carInfoStyle: styles.carInfo,
  },
  {
    id: 2,
    imageSrc: 'assets/images/redcar.svg',
    title: 'Jac J7',
    description: `S3 Plus has been rated Five-Star in C-NCAP including front impact, 
                  side impact, frontal side impact & Whipping test.`,
    price: 'AED 2700/ Monthly',
    carInfoStyle: styles.carInfo2,
  },
];

export default function Popular() {
  return (
    <div className={styles.container}>
      <h1>Most Popular Cars</h1>
      <div className={styles.cardContainer}>
        {carData.map(car => (
          <div key={car.id} className={styles.content}>
            <Image src={car.imageSrc} alt={car.title} width={900} height={300} />
            <div className={styles.description}>
              <h2>{car.title}</h2>
              <p>{car.description}</p>
              <Image src="assets/images/Group.svg" alt="" width={300} height={80} />
              <div className={car.carInfoStyle}>
                <p>{car.price}</p>
                <Link href="" target="_blank">
                  <button className={styles.bookNow}>Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
