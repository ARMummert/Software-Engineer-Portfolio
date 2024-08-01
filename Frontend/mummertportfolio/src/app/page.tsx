// page.tsx 
// SPA version 1.0 - 2024 - Amy Mummert - All Rights Reserved
// Main Page Component
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import Image from "next/image";
import ProjectComponent from "./projects";

export default function Home() {
  return (
    <main id="home" className={styles.main}>
      <section className={styles.top}>
      <div>
      <div className={styles.videoText}>
        <h1>Amy Mummert</h1>
        <h1>Software Engineer</h1>
        </div>
        <p className={styles.text}>Fueled by Coffee, Driven by Code, and Bridging the Gap Between Ideas and Reality.</p>
      </div>
      </section>
      <section id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <ProjectComponent/>
      </section>
      <section id="about" className={styles.about}>
        <h2>About</h2>
        <div>
        <Image className={styles.profilepic} src="/images/profilepic.jpg" alt="Profile Picture" width={500} height={300} priority/>
        </div>
        <p></p>
      </section>
      <section id="contact" className={styles.contact}>
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </main>
  );
}

