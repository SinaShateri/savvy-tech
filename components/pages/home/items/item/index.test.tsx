import { fireEvent, render, screen } from '@/test/utils/renderWithProviders';

const setItemIdToEdit = jest.fn();
const setItemIdToDelete = jest.fn();

jest.mock('@/stores/list', () => ({
  __esModule: true,
  default: () => ({ setItemIdToEdit, setItemIdToDelete }),
}));

import HomeItemsItem from './index';

describe('HomeItemsItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls setItemIdToEdit when Edit clicked and setItemIdToDelete when Delete clicked', () => {
    const item = {
      id: 'abc-123',
      title: 'Test Item',
      subtitle: 'Sub',
      createdAt: new Date().toISOString(),
    };

    render(<HomeItemsItem item={item} />);

    const edit = screen.getByText('Edit');
    const del = screen.getByText('Delete');

    fireEvent.click(edit);
    expect(setItemIdToEdit).toHaveBeenCalledWith('abc-123');

    fireEvent.click(del);
    expect(setItemIdToDelete).toHaveBeenCalledWith('abc-123');
  });
});
