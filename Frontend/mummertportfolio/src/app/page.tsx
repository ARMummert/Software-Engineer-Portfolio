// page.tsx 
// SPA version 1.0 - 2024 - Amy Mummert - All Rights Reserved
// Main Page Component
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import Image from "next/image";
import ProjectComponent from "./projects";
import ChessBoard from "./ChessBoard";
import RPS from "./RockPaperScissors";
import Footer from "./Footer";


export default function Home() {
  return (
    <main id="home" className={styles.main}>
      <section className={styles.top}>
      <div>
      <div className={styles.headerText}>
        <h1>Amy Mummert</h1>
        <h1 className={styles.headertText2}>Software Engineer</h1>
      </div>
      <p className={styles.text}>Fueled by Coffee, Driven by Code, and Bridging the Gap Between Ideas and Reality.</p>
      </div>
      </section>
      <section id="projects" className={styles.projects}>
        <h2 className={styles.projectheader}>Projects</h2>
        <div><ProjectComponent /></div>
      </section>
      <section id="about" className={styles.about}>
        <h2 className={styles.aboutHeader}>About</h2>
        <Image className={styles.profilepic} src="/images/profilepic.jpg" alt="Profile Picture" width={400} height={200} priority/>
        <p className={styles.aboutText}>
          I am a software engineer with a passion for creating and problem solving. I have experience with a variety of technologies, including JavaScript, React, Node.js, and Python. I am always eager to learn new things and take on new challenges. I am currently seeking new opportunities to grow and develop my skills as a software engineer. 
        </p>
      </section>
      <section id="contact" className={styles.contact}>
        <h2 className={styles.contactHeader}>Contact</h2>
        <ContactForm />
      </section>
    </main>
  );
}

