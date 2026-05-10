import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('calls onSearchChange when typing', async () => {
    const mockSearch = vi.fn();
    render(<SearchBar searchTerm="" onSearchChange={mockSearch} />);
    
    const searchInput = screen.getByPlaceholderText(/Search by title or description/i);
    await userEvent.type(searchInput, 'test');
    
    expect(mockSearch).toHaveBeenCalled();
  });

  it('shows clear button when searchTerm exists', () => {
    render(<SearchBar searchTerm="test" onSearchChange={() => {}} />);
    expect(screen.getByText('✕')).toBeInTheDocument();
  });
});
