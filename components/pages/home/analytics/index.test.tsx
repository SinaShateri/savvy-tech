import { render, screen } from '@/test/utils/renderWithProviders';

// Mock the list store and the utility that counts items this week
jest.mock('@/stores/list', () => ({
  __esModule: true,
  default: () => ({ items: [{ id: '1' }, { id: '2' }] }),
}));

jest.mock('@/utils/date/get-items-count-this-week', () => ({
  __esModule: true,
  getItemsCountThisWeek: () => 1,
}));

import HomeAnalytics from './index';

describe('HomeAnalytics', () => {
  it('shows total items and this week count', () => {
    render(<HomeAnalytics />);

    expect(screen.getByText('Total Items')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    expect(screen.getByText('This Week')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
