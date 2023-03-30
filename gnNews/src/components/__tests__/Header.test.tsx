import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Header from '../Header/Header';

describe('Header', () => {
  it('renders', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('gnNews')).toBeInTheDocument();
  });

  it('opens language popup', () => {
    renderWithProviders(<Header />);
    const settingsButton = screen.getByTestId('settings-button');
    fireEvent.click(settingsButton);
    expect(screen.getByText('Info')).toBeInTheDocument();
  });
});
