import { renderWithProviders } from '../../../utils/test-utils';
import SideMenu from '../SideMenu';
import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { sidePanelSlice } from '../../../features/sidePanelSlice';

beforeAll(() => {
  store.dispatch(sidePanelSlice.actions.toggleSidePanel());
});

const countries = [
  {
    code: 'test',
    name: 'test country'
  },
  {
    code: 'test2',
    name: 'test country2'
  }
];

jest.mock('../../../assets/countries.json', () => countries, { virtual: true });

describe('side-menu', () => {
  it('should render SideMenu component', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/country/poland']}>
        <SideMenu />
      </MemoryRouter>,
      {
        store: store
      }
    );
    const sideMenu = screen.getByTestId('side-menu');
    expect(sideMenu).toBeInTheDocument();
  });

  it('should render SideMenuItem components with correct number of items', () => {
    renderWithProviders(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>,
      {
        store: store
      }
    );
    const sideMenuItem = screen.getAllByTestId('side-menu-item');
    expect(sideMenuItem).toHaveLength(2);
  });

  it('should render SideMenuItem components with correct items', () => {
    renderWithProviders(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>,
      {
        store: store
      }
    );
    const sideMenuItem = screen.getAllByTestId('side-menu-item');
    expect(sideMenuItem[0]).toHaveTextContent('test country');
    expect(sideMenuItem[1]).toHaveTextContent('test country2');
  });

  it('should update input value when user types in the input', () => {
    renderWithProviders(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>,
      {
        store: store
      }
    );
    const input = screen.getByTestId('filter-input').querySelector('input');
    fireEvent.change(input!, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  it('should filter SideMenuItem components correctly', () => {
    renderWithProviders(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>,
      {
        store: store
      }
    );
    const input = screen.getByTestId('filter-input').querySelector('input');
    fireEvent.change(input!, { target: { value: 'test' } });
    const sideMenuItem = screen.getAllByTestId('side-menu-item');
    expect(sideMenuItem).toHaveLength(2);
  });
});
