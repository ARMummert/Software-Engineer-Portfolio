//page.tsx 
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.description}>
          I am a Full Stack Developer with a passion for creating beautiful and functional websites.
        </p>
        <div className={styles.videoContainer}>
          
          <div className={styles.videoText}>
            <p>Welcome, My Name Is</p>
            
          </div>
        </div>
      </div>
    </main>
  );
}

