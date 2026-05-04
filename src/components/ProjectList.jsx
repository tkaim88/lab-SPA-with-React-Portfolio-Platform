// src/components/ProjectList.jsx
// Displays all projects - receives filtered projects as prop

import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  // Show message if no projects match the search
  if (projects.length === 0) {
    return (
      <div className="project-list">
        <div className="no-results">
          <p>😕 No projects found</p>
          <p>Try a different search term or add a new project!</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="project-list">
      {projects.map((project) => (
        // Key prop is required for React to track list items efficiently
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;