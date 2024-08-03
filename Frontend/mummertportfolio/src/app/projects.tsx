"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css'; // Adjust the path as needed

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

  return (
    <div className={styles.projectContainer}>
    <div className={styles.projectWrapper}>
      {projects.map((project) => (
        <div className={styles.singleproject} key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <img className={styles.projectImage} src={project.image_url} alt={project.name} />
          <div className={styles.buttonContainer}>
          <a href={formatUrl(project.demo_url)} target="_blank" rel="noopener noreferrer">
                <button className={styles.demoButton}>Demo</button>
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