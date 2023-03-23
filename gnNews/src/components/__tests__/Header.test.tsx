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
    const grid = screen.getByTestId('gridToggle');
    const list = screen.getByTestId('listToggle');
    fireEvent.click(grid);
    expect(grid).toHaveClass('Mui-selected');
    expect(list).not.toHaveClass('Mui-selected');
  });
});
