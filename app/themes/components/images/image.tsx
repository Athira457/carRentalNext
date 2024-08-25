import Image from "next/image";
import styles from "./image.module.css"

export default function Images() {
  return (
    <Image
      className={styles.athira}
      src="/next.svg" 
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  );
}
