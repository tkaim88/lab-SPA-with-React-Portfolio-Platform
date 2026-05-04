// src/App.jsx
// Main App Component - manages all state and coordinates child components

import React, { useState } from 'react';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import initialProjects from './data/projects';
import './App.css';

function App() {
  // ========== STATE MANAGEMENT ==========
  // State for storing all projects
  const [projects, setProjects] = useState(initialProjects);
  
  // State for search/filter term
  const [searchTerm, setSearchTerm] = useState('');
  
  // ========== HELPER FUNCTIONS ==========
  // Add a new project to the list
  // New projects are added to the BEGINNING of the array (most recent first)
  const addProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };
  
  // Filter projects based on search term
  // Checks both title and description (case-insensitive)
  const filteredProjects = projects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower)
    );
  });
  
  // ========== COMPONENT RENDERING ==========
  return (
    <div className="app">
      {/* Header - always visible */}
      <Header />
      
      <main className="main-content">
        {/* Form to add new projects */}
        <AddProjectForm onAddProject={addProject} />
        
        {/* Search bar for filtering */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        {/* List of filtered projects */}
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}

export default App;