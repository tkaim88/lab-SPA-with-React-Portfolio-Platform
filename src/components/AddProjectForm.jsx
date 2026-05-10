// src/components/AddProjectForm.jsx
// Form component allows users to add new projects

import { useState } from 'react';

function AddProjectForm({ onAddProject }) {
  // State to store form input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({}); // Track validation errors

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    
    if (!validateForm()) {
      return; // Stop if validation fails
    }
    
    // Create new project object with unique ID
    const newProject = {
      id: Date.now(), // Use timestamp as unique ID
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString() // Track when project was added
    };
    
    // Send new project to parent component
    onAddProject(newProject);
    
    // Clear form inputs
    setTitle('');
    setDescription('');
    setErrors({});
  };

  return (
    <div className="add-project-section">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} className="add-project-form">
        <div className="form-group">
          <label htmlFor="title">Project Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            className={errors.title ? 'error-input' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Project Description *</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your project..."
            rows="4"
            className={errors.description ? 'error-input' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        
        <button type="submit" className="add-btn">➕ Add Project</button>
      </form>
    </div>
  );
}

export default AddProjectForm;