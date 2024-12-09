// page.tsx 
// SPA version 1.0 - 2024 - Amy Mummert - All Rights Reserved
// Main Page Component
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import Image from "next/image";
import ProjectComponent from "./projects";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiDjango, SiJavascript, SiExpo, SiTypescript, SiMysql, SiPostgresql, SiMariadb, SiHeroku, SiRabbitmq } from "react-icons/si";

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
      <div className={styles.headerTextWrapper}>
      <div className={styles.headerText}>
          <p className={styles.line}>AMY MUMMERT</p>
          <p className={styles.line2}>SOFTWARE ENGINEER</p>
      </div>
      </div>
      <div className={styles.motto}>
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
         <p className={styles.techStack}>Skills</p>
        <div>
      <div className={styles.tagList}>
      <div className={styles.loopSlider}  style={{ "--duration": "15951ms", "--direction": "normal" } as React.CSSProperties}>
        <div className={styles.inner}>
        <div className={styles.tag}><span>#</span> JavaScript</div>
        <div className={styles.tag}><span>#</span> React</div>
        <div className={styles.tag}><span>#</span> React Native</div>
        <div className={styles.tag}><span>#</span> Django</div>
        <div className={styles.tag}><span>#</span> Python</div>
        <div className={styles.tag}><span>#</span> Typescript</div>
        <div className={styles.tag}><span>#</span> Next.js</div>
        <div className={styles.tag}><span>#</span> NodeJs</div>
        <div className={styles.tag}><span>#</span> ExpressJS</div>
      </div>
      </div>
      <div className={styles.loopSlider} style={{ "--duration": "19260ms", "--direction": "reverse" } as React.CSSProperties}>
        <div className={styles.inner}>
        <div className={styles.tag}><span>#</span> Restful APIs</div>
        <div className={styles.tag}><span>#</span> FastAPI</div>
        <div className={styles.tag}><span>#</span> HTML</div>
        <div className={styles.tag}><span>#</span> CSS</div>
        <div className={styles.tag}><span>#</span> MySQL</div>
        <div className={styles.tag}><span>#</span> PostgreSQL</div>
        <div className={styles.tag}><span>#</span> MariaDB</div>
        <div className={styles.tag}><span>#</span> Docker</div>
        <div className={styles.tag}><span>#</span> RabbitMQ</div>
        <div className={styles.tag}><span>#</span> Heroku</div>
      </div>
      </div>
      <div className={styles.loopSlider} style={{ "--duration": "10449ms", "--direction": "normal" } as React.CSSProperties}>
        <div className={styles.inner}>
        <div className={styles.tag}><span>#</span> Agile & Waterfall Methodologies</div>
        <div className={styles.tag}><span>#</span> Test Driven Development</div>
        <div className={styles.tag}><span>#</span> Debugging</div>
        <div className={styles.tag}><span>#</span> Software Development Lifecycle</div>
        <div className={styles.tag}><span>#</span> Version Control</div>
        <div className={styles.tag}><span>#</span> Git</div>
        <div className={styles.tag}><span>#</span> GitHub</div>
        <div className={styles.tag}><span>#</span> Relational Databases</div>
        <div className={styles.tag}><span>#</span> UI/UX</div>
      </div>
      </div>
    </div>   
    <a href="resume/mummert.pdf" target="_blank" className={styles.resumeLink}>View My Resume</a>
    </div>
    </section>
    </div>
    <div className={styles.contactSection}>
    <section id="contact" className={styles.contact}>
      <h2 className={styles.contactHeader}>Contact</h2>
      <ContactForm />
    </section>
    </div>
    </main>
  );
}