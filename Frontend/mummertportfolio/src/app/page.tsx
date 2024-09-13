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
        <div className={styles.headerText}>
          <div className={styles.line}>
            <span>A</span>
            <span>M</span>
            <span className={styles.wordSpace}>Y</span>
            <span>M</span>
            <span>U</span>
            <span>M</span>
            <span>M</span>
            <span>E</span>
            <span>R</span>
            <span className={styles.wordSpace}>T</span>
          </div>
          <div className={styles.line}>
            <span>S</span>
            <span>O</span>
            <span>F</span>
            <span>T</span>
            <span>W</span>
            <span>A</span>
            <span>R</span>
            <span className={styles.wordSpace}>E</span>
            <span>E</span>
            <span>N</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
            <span>E</span>
            <span>E</span>
            <span>R</span>
          </div>
        </div>
        <div className={styles.text}>
          <span>F</span><span>u</span><span>e</span><span>l</span><span>e</span><span className={styles.wordSpace}>d</span>
          <span>b</span><span className={styles.wordSpace}>y</span>
          <span>C</span><span>o</span><span>f</span><span>f</span><span>e</span><span>e</span><span className={styles.wordSpace}>,</span>
          <span>D</span><span>r</span><span>i</span><span>v</span><span>e</span><span className={styles.wordSpace}>n</span>
          <span>b</span><span className={styles.wordSpace}>y</span>
          <span>C</span><span>o</span><span>d</span><span>e</span><span className={styles.wordSpace}>,</span>
          <span>a</span><span>n</span><span className={styles.wordSpace}>d</span>
          <span>B</span><span>r</span><span>i</span><span>d</span><span>g</span><span>i</span><span>n</span><span className={styles.wordSpace}>g</span>
          <span>t</span><span>h</span><span className={styles.wordSpace}>e</span>
          <span>G</span><span>a</span><span className={styles.wordSpace}>p</span>  
          <span>B</span><span>e</span><span>t</span><span>w</span><span>e</span><span>e</span><span className={styles.wordSpace}>n</span>
          <span>I</span><span>d</span><span>a</span><span className={styles.wordSpace}>s</span>
          <span>a</span><span>n</span><span className={styles.wordSpace}>d</span>
          <span>R</span><span>e</span><span>a</span><span>l</span><span>i</span><span>t</span><span>y</span><span className={styles.wordSpace}>.</span>
        </div>
      </section>
      <section id="projects" className={styles.projects}>
        <h2 className={styles.projectheader}>Projects</h2>
        <div><ProjectComponent /></div>
      </section>
      <section id="about" className={styles.about}>
        <h2 className={styles.aboutHeader}>About</h2>
        <p className={styles.quote}>"The only skill that will be important in the 21st century is the skill of learning new skills. Everything else will become obsolete over time."</p>
        <p className={styles.author}>- Peter Drucker</p>
        <Image className={styles.profilepic} src="/images/profilepic.jpg" alt="Profile Picture" width={400} height={200} priority/>
        <p className={styles.aboutText}>
          I am a software engineer with a passion for creating and problem solving. I have experience with a variety of technologies, including JavaScript, React, Node.js, and Python. I am always eager to learn new things and take on new challenges. I am currently seeking new opportunities to grow and develop my skills as a software engineer. 
        </p>
        <a href="resume/amyResumeCurrent.pdf" target="_blank" className={styles.resumeLink}>View My Resume</a>
        <p className={styles.aboutText}>Here are some technologies that I have experience with:</p>
        <ul className={styles.techList}>
          <li>React</li>
          <li>React-Native</li>
          <li>Express</li>
          <li>NextJS</li>
          <li>Django</li>
          <li>NodeJS</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Expo</li>
          <li>Typescript</li>
          <li>C / C#</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MariaDB</li>
          <li>Docker</li>
          <li>Heroku</li>
          <li>RabbitMQ</li>
          <li>Git / GitHub</li>
        </ul>
      </section>
      <section id="contact" className={styles.contact}>
        <h2 className={styles.contactHeader}>Contact</h2>
        <ContactForm />
      </section>
    </main>
  );
}