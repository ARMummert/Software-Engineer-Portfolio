// page.tsx 
// SPA version 1.0 - 2024 - Amy Mummert - All Rights Reserved
// Main Page Component
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import Image from "next/image";
import ProjectComponent from "./projects";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiReact, SiExpress, SiNextdotjs, SiDjango, SiJavascript, SiExpo, SiTypescript, SiMysql, SiPostgresql, SiMariadb, SiHeroku, SiRabbitmq } from "react-icons/si";

const techIcons = [
  { icon: <FaReact /> },
  { icon: <SiExpress />},
  { icon: <SiNextdotjs />},
  { icon: <SiDjango /> },
  { icon: <FaNodeJs />},
  { icon: <FaPython />},
  { icon: <SiJavascript /> },
  { icon: <SiExpo />},
  { icon: <SiTypescript />},
  { icon: <FaHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <SiMysql />},
  { icon: <SiPostgresql /> },
  { icon: <SiMariadb /> },
  { icon: <FaDocker />},
  { icon: <SiHeroku /> },
  { icon: <SiRabbitmq /> },
  { icon: <FaGitAlt /> },
];

export default function Home() {
  return (
    <main id="home" className={styles.main}>
      <section className={styles.top}>
      <div className={styles.headerText}>
          <p className={styles.line}>AMY MUMMERT</p>
          <p className={styles.line}>SOFTWARE ENGINEER</p>
      </div>
      <div>
        <p className={styles.text}>
        Fueled by Coffee, Driven by Code, and Bridging the Gap Between Ideas and Reality.
        </p>
      </div>
      </section>
      <div className={styles.projectsSection}>
      <section id="projects" className={styles.projects}>
        <div className={styles.projectheader}>
        <h2 className={styles.projectheader}>Projects</h2>
        </div>
        <div><ProjectComponent /></div>
      </section>
      </div>
      <div className={styles.aboutSection}>
      <section id="about" className={styles.about}>
        <h2 className={styles.aboutHeader}>About</h2>
        <p className={styles.quote}>&quot;The only skill that will be important in the 21st century is the skill of learning new skills. Everything else will become obsolete over time.&quot;</p>
        <p className={styles.author}>- Peter Drucker</p>
        <Image className={styles.profilepic} src="/images/profilepic.jpg" alt="Profile Picture" width={400} height={200} priority/>
        <p className={styles.aboutText}>
          I am a software engineer with a passion for creating and problem solving. I have experience with a variety of technologies, including JavaScript, React, Node.js, and Python. I am always eager to learn new things and take on new challenges. I am currently seeking new opportunities to grow and develop my skills as a software engineer. 
        </p>
        <a href="resume/mummert.pdf" target="_blank" className={styles.resumeLink}>View My Resume</a>
        <p className={styles.techStack}>Tech Stack</p>
        <div>
      <ul className={styles.techList}>
        {techIcons.map((tech, index) => (
          <li key={index} className={styles.techItem}>
            {tech.icon}
          </li>
        ))}
      </ul>
    </div>
      </section>
      </div>
      <section id="contact" className={styles.contact}>
        <h2 className={styles.contactHeader}>Contact</h2>
        <ContactForm />
      </section>
    </main>
  );
}