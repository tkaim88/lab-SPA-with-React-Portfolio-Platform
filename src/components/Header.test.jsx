// src/components/Header.test.jsx
// Unit tests for Header component

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  // Test 1: Check if header renders correctly
  test('renders the header title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Personal Project Showcase/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test 2: Check if subtitle renders
  test('renders the subtitle', () => {
    render(<Header />);
    const subtitleElement = screen.getByText(/Discover my creative work/i);
    expect(subtitleElement).toBeInTheDocument();
  });
});