"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface Project {
  id: number;
  name: string;
  description: string;
  image_url: string;
  demo_url: string;
  github_url: string;
}

const formatUrl = (url: string) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};


const ProjectComponent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sampleProjects, setSampleProjects] = useState<Project[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/projects');
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    // Sample projects data
    const sampleProjects: Project[] = [
      {
        id: 1,
        name: 'Temperature Conversion',
        description: 'A temperature conversion tool that converts Fahrenheit to Celsius and vice versa.',
        image_url: 'https://www.github.com',
        demo_url: 'https://example.com/demo1',
        github_url: 'https://github.com/ARMummert/temp_conversion',
      },
      {
        id: 2,
        name: 'Project Two',
        description: 'This is a description for Project Two.',
        image_url: 'https://www.github.com',
        demo_url: 'https://example.com/demo2',
        github_url: 'https://github.com/user/project2',
      },
    ];
  
    setSampleProjects(sampleProjects);
  }, []);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectWrapper}>
        {sampleProjects.map((project) => (
      <div className={styles.singleproject} key={project.id}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className={styles.buttonContainer}>
        <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={faPlay} />
        </a>
        <a href={formatUrl(project.github_url)} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
      </div>
    </div>
  ))}
</div>
    <div className={styles.projectWrapper}>
      {projects.map((project) => (
        <div className={styles.singleproject} key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
         
          <div className={styles.buttonContainer}>
          <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={styles.icon4} icon={faGithub} />
              </a>
              <a href={formatUrl(project.github_url)} target="_blank" rel="noopener noreferrer">
                <button className={styles.githubButton}>GitHub</button>
              </a>
          </div>
        </div>

      ))}
    </div>
    <div></div>
  </div>
  );
};

export default ProjectComponent;