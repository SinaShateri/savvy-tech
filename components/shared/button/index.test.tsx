import { fireEvent, render, screen } from '@/test/utils/renderWithProviders';
import Button from './index';

describe('Button', () => {
  it('renders children and responds to click', () => {
    const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();

    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state and disables button', () => {
    const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} loading>
          Submit
        </Button>
      );

    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    // children should not be visible while loading
    expect(screen.queryByText('Submit')).toBeNull();
  });
});
