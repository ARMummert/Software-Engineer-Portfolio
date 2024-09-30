"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';


interface Project {
  id: number;
  name: string;
  description: string;
  image_url: string;
  demo_url: string;
  github_url: string;
  built_with: string;
}

const formatUrl = (url: string) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};


const ProjectComponent: React.FC = () => {
  const [sampleProjects, setSampleProjects] = useState<Project[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Project Data
    const sampleProjects: Project[] = [
      {
        id: 1,
        name: 'Temperature Conversion Microservice',
        description: 'A temperature conversion tool that converts Fahrenheit, Celsius, and Kelvin.',
        image_url: '/images/project1.png',
        demo_url: 'https://armummert.github.io/temp_conversion/',
        github_url: 'https://github.com/ARMummert/temp_conversion',
        built_with: 'NODEJS'
      },
      {
        id: 2,
        name: 'Web Developer Portfolio',
        description: 'A portfolio website showcasing a developers projects. Includes a contact form & experience page.',
        image_url: '/images/developerportfoliohomepage.png',
        demo_url: 'https://www.mummertar.xyz',
        github_url: 'https://github.com/user/project2',
        built_with: 'REACT DJANGO'
      },
      {
        id: 3,
        name: 'Baton Twirling Entry Form Database',
        description: 'A MySQL relational database for storing baton twirling competition entry forms.',
        image_url: '/images/homepage.ae85d5ed33164dae7cf9.png',
        demo_url: 'https://example.com/demo2',
        github_url: 'https://github.com/user/project2',
        built_with: 'npm NODEJS'
      },
      {
        id: 4,
        name: 'Project Three',
        description: 'This is a description for Project Two.',
        image_url: 'https://www.github.com',
        demo_url: 'https://example.com/demo2',
        github_url: 'https://github.com/user/project2',
        built_with: 'npm NODEJS'
      },
      {
        id: 5,
        name: 'Project Three',
        description: 'This is a description for Project Two.',
        image_url: 'https://www.github.com',
        demo_url: 'https://example.com/demo2',
        github_url: 'https://github.com/user/project2',
        built_with: 'npm NODEJS'
      },
      {
        id: 6,
        name: 'Project Three',
        description: 'This is a description for Project Two.',
        image_url: 'https://www.github.com',
        demo_url: 'https://example.com/demo2',
        github_url: 'https://github.com/user/project2',
        built_with: 'npm NODEJS'
      },
      {
        id: 7,
        name: 'Project Three',
        description: 'This is a description for Project Two.',
        image_url: 'https://www.github.com',
        demo_url: 'https://example.com/demo2',
        github_url: 'https://github.com/user/project2',
        built_with: 'npm NODEJS'
      },
      {
        id: 8,
        name: 'Project Three',
        description: 'This is a description for Project Two.',
        image_url: 'https://www.github.com',
        demo_url: 'https://example.com/demo2',
        github_url: 'https://github.com/user/project2',
        built_with: 'npm NODEJS'
      },
    ];
  
    setSampleProjects(sampleProjects);
  }, []);
  
  const projectContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
  projectContainerRef.current?.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className={styles.projectsSection}>
      <div className={styles.scrollButtons}>
      <div className={`${styles.scroll} ${styles.left}`} onClick={() => scroll(-300)}>
        <FontAwesomeIcon className={styles.scrollButton} icon={faChevronLeft} />
      </div>
      <div className={`${styles.scroll} ${styles.right}`} onClick={() => scroll(300)}>
        <FontAwesomeIcon className={styles.scrollButton} icon={faChevronRight} />
      </div>
      </div>
      <div className={styles.projectContainer} ref={projectContainerRef}>
        <div className={styles.projectWrapper}>
          {sampleProjects.map((project) => (
            <div className={styles.singleproject} key={project.id}>
              <h3 className={styles.projectname}>{project.name}</h3>
              <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
                <Image src={project.image_url} className={styles.img} alt="projectimg" width={600} height={400} />
              </a>
              <p className={styles.projDesc}>{project.description}</p>
              <div className={styles.buttonContainer}>
                <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className={styles.icon} icon={faPlay} />
                </a>
                <a href={formatUrl(project.github_url)} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className={styles.icon} icon={faGithub} />
                </a>
              </div>
              <div><p className={styles.built}>{project.built_with}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;