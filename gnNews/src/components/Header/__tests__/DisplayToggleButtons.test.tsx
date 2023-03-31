import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import DisplayToggleButtons from '../DisplayToggleButtons';

describe('DisplayToggleButtons', () => {
  it('renders two buttons', () => {
    renderWithProviders(<DisplayToggleButtons />);
    expect(screen.getAllByTestId('toggle-button')).toHaveLength(2);
  });

  it('renders the buttons with the correct text', () => {
    renderWithProviders(<DisplayToggleButtons />);
    expect(screen.getByText('list')).toBeInTheDocument();
    expect(screen.getByText('grid')).toBeInTheDocument();
  });

  it('only one button can be selected at a time', () => {
    renderWithProviders(<DisplayToggleButtons />);
    const buttons = screen.getAllByTestId('toggle-button');
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveClass('Mui-selected');
    expect(buttons[1]).not.toHaveClass('Mui-selected');
    fireEvent.click(buttons[1]);
    expect(buttons[1]).toHaveClass('Mui-selected');
    expect(buttons[0]).not.toHaveClass('Mui-selected');
  });
});
