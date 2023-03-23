import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Header from '../Header/Header';

describe('Header', () => {
  it('renders', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('gnNews')).toBeInTheDocument();
  });
  it('only lets one mode be selected at a time', () => {
    renderWithProviders(<Header />);
    const toggleButton = screen.getAllByTestId('toggleButton');

    fireEvent.click(toggleButton[1]);
    expect(toggleButton[1]).toHaveClass('Mui-selected');
    expect(toggleButton[0]).not.toHaveClass('Mui-selected');
  });
});
