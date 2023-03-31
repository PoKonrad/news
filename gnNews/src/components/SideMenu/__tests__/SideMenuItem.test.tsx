import { renderWithProviders } from '../../../utils/test-utils';
import SideMenuItem from '../SideMenuItem';
import { fireEvent, screen } from '@testing-library/react';

const country = {
  code: 'test',
  name: 'test country'
};

describe('SideMenuItem', () => {
  it('should mark ListItemButton as Selected', () => {
    renderWithProviders(<SideMenuItem country={country} />);
    const listItemButton = screen.getByTestId('list-item-button');

    expect(listItemButton).not.toHaveClass('Mui-selected');
    fireEvent.click(listItemButton);
    expect(listItemButton).toHaveClass('Mui-selected');
  });
});
