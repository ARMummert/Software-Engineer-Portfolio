"use client";

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

interface Project {
  id: number;
  name: string;
  description: string;
}

const ProjectComponent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

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
    <div>
      {projects.map((project) => (
        <div key={project.id} className={styles.project}>
          <h3>{project.name}</h3>
          <p>Test Project</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;