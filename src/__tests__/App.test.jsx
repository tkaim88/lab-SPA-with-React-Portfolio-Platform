import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Portfolio App', () => {
  it('renders the header', () => {
    render(<App />);
    expect(screen.getByText(/Personal Project Showcase/i)).toBeInTheDocument();
  });

  it('displays initial projects', () => {
    render(<App />);
    expect(screen.getByText('E-Commerce Website')).toBeInTheDocument();
    expect(screen.getByText('Weather App')).toBeInTheDocument();
  });

  it('adds a new project', async () => {
    render(<App />);
    
    const titleInput = screen.getByPlaceholderText(/Enter project title/i);
    const descInput = screen.getByPlaceholderText(/Describe your project/i);
    const addButton = screen.getByText(/Add Project/i);
    
    await userEvent.type(titleInput, 'Test Project');
    await userEvent.type(descInput, 'This is a test description');
    fireEvent.click(addButton);
    
    expect(await screen.findByText('Test Project')).toBeInTheDocument();
  });

  it('filters projects by search', async () => {
    render(<App />);
    
    const searchInput = screen.getByPlaceholderText(/Search by title or description/i);
    await userEvent.type(searchInput, 'Weather');
    
    expect(screen.getByText('Weather App')).toBeInTheDocument();
    expect(screen.queryByText('E-Commerce Website')).not.toBeInTheDocument();
  });
});
