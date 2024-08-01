"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css'; // Adjust the path as needed

interface Project {
  id: number;
  name: string;
  description: string;
}

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.scrollContainer}>
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={scrollLeft}>
        &#9664;
      </button>
      <div className={styles.projectWrapper} ref={scrollContainerRef}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectComponent}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={scrollRight}>
        &#9654;
      </button>
    </div>
  );
};

export default ProjectComponent;