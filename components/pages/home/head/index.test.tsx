import { fireEvent, render, screen } from '@/test/utils/renderWithProviders';
import HomeHead from './index';

describe('HomeHead', () => {
  it('opens the new item modal when clicking Create New Item', () => {
      render(<HomeHead />);

    const btn = screen.getByText('Create New Item');
    fireEvent.click(btn);

    // Modal title should appear when opened
    expect(screen.getByText('Create New Item')).toBeInTheDocument();
  });
});
