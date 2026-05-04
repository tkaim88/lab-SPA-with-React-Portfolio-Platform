// src/components/ProjectCard.jsx
// Individual project card - displays one project

import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {/* Show creation date if it exists (for newly added projects) */}
      {project.createdAt && (
        <small className="project-date">
          Added: {new Date(project.createdAt).toLocaleDateString()}
        </small>
      )}
    </div>
  );
}

export default ProjectCard;