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
        demo_url: 'https://armummert.github.io/Web-Developer-Portfolio/',
        github_url: 'https://github.com/ARMummert/',
        built_with: 'REACT DJANGO JAVASCRIPT'
      },
      {
        id: 3,
        name: 'Dedicated Server Project',
        description: 'A dedicated server project that includes a website and PostgreSQL Database.',
        image_url: '/images/Dedicated-Server.png',
        demo_url: 'https://armummert.github.io/Dedicated-Server-Project/',
        github_url: 'https://github.com/ARMummert/Dedicated-Server-Project',
        built_with: 'SHELL SCRIPT'
      },
      {
        id: 4,
        name: 'Baton Twirling Entry Form Database',
        description: 'The Baton Twirling Database stores entries for athletes attending baton twirling events.',
        image_url: '/images/databasehomepage.png',
        demo_url: 'https://armummert.github.io/Apple-Jacks-Database-Project/',
        github_url: 'https://github.com/ARMummert/Apple-Jacks-Database-Project',
        built_with: 'NODEJS EXPRESSJS MYSQL DATABASE'
      },
      {
        id: 5,
        name: 'Dog Training App & Newsletter Microservice',
        description: 'A user friendly dog training application and newsletter microservice.',
        image_url: '/images/dogwebappportfolio2.png',
        demo_url: 'https://github.com/ARMummert/Dog-Training-Application-and-Newsletter-Microservce',
        github_url: 'https://github.com/ARMummert/Dog-Training-Application-and-Newsletter-Microservce',
        built_with: 'PYTHON DJANGO DOCKER POSTGRESQL RABBITMQ'
      },
      {
        id: 6,
        name: 'UX/UI Design - Note Taking App',
        description: 'A note taking app that includes a user friendly interface and design.',
        image_url: '/images/notetakingapp.png',
        demo_url: 'https://www.figma.com/proto/3R4YpXXdWzElBmLGLD6JXz/Notes_Station_Clickable_Prototype?page-id=1%3A2&node-id=89-1299&viewport=375%2C540%2C0.1&t=N57b1G0XzUXjgisW-1&scaling=scale-down&content-scaling=fixe',
        github_url: 'https://github.com/ARMummert/',
        built_with: 'FIGMA'
      },
      {
        id: 7,
        name: 'In Progress - Blog Website',
        description: 'A Blog website that allows users to create, edit, and delete blog posts.',
        image_url: '/images/bloghome.png',  
        demo_url: 'https://github.com/ARMummert/',
        github_url: 'https://github.com/ARMummert/',
        built_with: 'REACT NEXTJS TYPESCRIPT SANITY'
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
      <div className={styles.projectContainer} ref={projectContainerRef}>
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
  );
};

export default ProjectComponent;