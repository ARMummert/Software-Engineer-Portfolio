// page.tsx 
// SPA version 1.0 - 2024 - Amy Mummert - All Rights Reserved
// Main Page Component
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import ProjectComponent from "./projects";
import './globals.css';
import { FaLinkedin, FaGithub, FaGoogle, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiNextdotjs, SiDjango, SiJavascript, SiExpo, SiTypescript, SiMysql, SiPostgresql, SiMariadb, SiHeroku, SiRabbitmq } from "react-icons/si";

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
    { icon: <SiTailwindcss /> },
];

export default function Home() {
  return (
    <main id="home" className="flex flex-col justify-between items-center bg-black w-screen">
      <section className="flex justify-center items-center h-screen mt-2 text-1.5rem font-montserrat uppercase font-semibold">
      <div className="flex flex-col justify-center items-center absolute top-[35%] left-[50%]">
      <div className="flex flex-col justify-center items-center absolute top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center uppercase font-montserrat font-semibold ">
          <p className="mb-3 text-5xl bg-clip-text text-transparent bg-gradient-to-l from-[#71C9CF] via-[#45B4D6] to-[#775FA8]">AMY MUMMERT</p>
          <span className="mb-2 scroll-smooth overflow-hidden text-5xl border-r-3 border-black animate-typing whitespace-nowrap border-r-white pr-5 font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#71C9CF] via-[#45B4D6] to-[#775FA8]">SOFTWARE ENGINEER </span>
      </div>
      </div>
          <div className="flex flex-col justify-center
                      items-center animate-slide-in duration-4000">
              <p className="flex flex-row justify-center items-center
                      w-full font-montserrat text-white text-center text-2xl mt-36">
                  Fueled by Coffee, Driven by Code, and Bridging the Gap Between Ideas and Reality.
              </p>
              <div className="flex flex-row">
                  <a href="resume/amy-mummert-resume.pdf" target="_blank"
                     className="flex flex-row justify-center items-center rounded
                      w-32 h-12 mt-20 text-white uppercase font-montserrat
                      font-semibold bg-[#775FA8] hover:bg-[#45B4D6] text-#775FA8 ">My Resume
                  </a>
                  <a href="https://www.linkedin.com/in/armummert" target="_blank"
                     className="flex flex-row text-white mt-8 text-2xl hover:text-[#45B4D6]">
                      <FaLinkedin className="ml-8 mt-12 m-2 w-12 h-12"/>
                  </a>
                  <a href="https://www.linkedin.com/in/armummert" target="_blank"
                     className="flex flex-row text-white mt-8 text-2xl hover:text-[#45B4D6]">
                      <FaGithub className="mt-12 m-2 w-12 h-12"/>
                  </a>
                  <a href="mailto:armummert4@gmail.com" target="_blank"
                     className="flex flex-row text-white mt-8 text-2xl hover:text-[#45B4D6]">
                      <FaGoogle className="mt-12 m-2 w-12 h-12"/>
                  </a>
              </div>
          </div>
      </section>
        <div className="bg-black font-montserrat flex flex-col justify-center items-center">
            <section id="projects">
                <div>
                    <h2 className="mt-24 mb-3 text-4xl font-semibold text-white">Projects</h2>
                </div>
                <div><ProjectComponent/></div>
            </section>
        </div>
      <div className="h-auto">
          <section id="about" className="flex flex-col font-montserrat justify-center items-center text-white">
              <h2 className="mt-24 mb-3 text-4xl text-white font-semibold">About</h2>
              <p className="flex flex-col flex-wrap-reverse items-center mt-12 font-montserrat text-white text-center text-2xl w-4/5">
                  I am a software engineer with a passion for creating innovative solutions and solving complex
                  problems.
                  My journey in technology has allowed me to work with a wide array of tools and frameworks, including
                  JavaScript, Typescript, React, Next.js, Node.js, FastAPI, PostgreSQL and Python.
                  These tools have helped me create, develop, test, and improve applications that deliver user-friendly
                  experiences.
                  I am always eager to learn new things and take on new challenges.
              </p>
              <p className="flex flex-col flex-wrap-reverse items-center mt-12 font-montserrat text-white text-center text-2xl w-4/5">
                  Beyond my technical skills, I am a dedicated team player who is always willing to lend a helping hand.
                  I am a strong communicator who is able to work with cross-functional teams to deliver high-quality
                  products.
                  I am driven by a love for learning and personal growth. I thrive on tackling new challenges and
                  finding creative solutions to complex problems.
              </p>
              <p className="flex flex-col flex-wrap-reverse items-center mt-12 font-montserrat text-white text-center text-2xl w-4/5">
                  I am currently seeking new opportunities to contribute my skills to impactful projects,
                  collaborate with like-minded professionals, and continue growing as a developer.
                  If you&apos;re looking for a passionate and adaptable engineer to join your team,
                  I&apos;d love to connect!

              </p>
              <a href="resume/amy-mummert-resume.pdf" target="_blank"
                 className="flex flex-row justify-center items-center rounded
                      w-32 h-12 mt-20 text-white uppercase font-montserrat
                      font-semibold bg-[#775FA8] hover:bg-[#45B4D6] text-#775FA8">My Resume
              </a>
              <p className="flex flex-col justify-center items-center mt-20 text-2xl font-semibold text-white font-montserrat">Technologies
                  I&apos;ve worked with</p>
              <div>
                  <div
                      className="w-[40rem] h-auto max-w-[90vw] flex flex-col items-center flex-shrink-0 gap-y-4 relative py-4 overflow-hidden">
                      <div className={styles.loopSlider}
                           style={{"--duration": "15951ms", "--direction": "normal"} as React.CSSProperties}>
                          <div className={styles.inner}>
                              {techIcons.slice(0, 10).map((tech, index) => (
                                  <div key={index} className={styles.tag}>{tech.icon}</div>
                              ))}
                          </div>
                      </div>
                      <div className={styles.loopSlider}
                           style={{"--duration": "19260ms", "--direction": "reverse"} as React.CSSProperties}>
                          <div className={styles.inner}>
                              {techIcons.slice(10, 19).map((tech, index) => (
                                  <div key={index} className={styles.tag}>{tech.icon}</div>
                              ))}
                          </div>
                      </div>
                      <div className={styles.loopSlider}
                           style={{"--duration": "10449ms", "--direction": "normal"} as React.CSSProperties}>
                          <div className={styles.inner}>
                              {techIcons.slice(19).map((tech, index) => (
                                  <div key={index} className={styles.tag}>{tech.icon}</div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
        <section id="contact"
                 className="bg-white flex flex-col items-center justify-between w-full px-6 py-24 mt-32 mb-64 text-white uppercase font-montserrat">
            <h2 className="flex flex-row text-black items-center justify-center text-4xl uppercase font-montserrat font-semibold mt-12">Contact</h2>
            <ContactForm/>
        </section>
    </main>
  );
}