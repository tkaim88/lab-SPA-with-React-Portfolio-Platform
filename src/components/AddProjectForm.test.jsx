import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import AddProjectForm from './AddProjectForm';

describe('AddProjectForm', () => {
  it('shows validation errors when fields are empty', async () => {
    render(<AddProjectForm onAddProject={() => {}} />);
    
    const addButton = screen.getByText(/Add Project/i);
    fireEvent.click(addButton);
    
    // Match the exact error messages from your component
    expect(await screen.findByText(/Title is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Description is required/i)).toBeInTheDocument();
  });

  it('calls onAddProject with valid data', async () => {
    const mockAddProject = vi.fn();
    render(<AddProjectForm onAddProject={mockAddProject} />);
    
    const titleInput = screen.getByPlaceholderText(/Enter project title/i);
    const descInput = screen.getByPlaceholderText(/Describe your project/i);
    
    await userEvent.type(titleInput, 'My Project');
    await userEvent.type(descInput, 'This is a valid description');
    
    const addButton = screen.getByText(/Add Project/i);
    fireEvent.click(addButton);
    
    expect(mockAddProject).toHaveBeenCalled();
  });
});
