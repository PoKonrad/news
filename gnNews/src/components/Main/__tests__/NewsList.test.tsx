import { renderWithProviders } from '../../../utils/test-utils';
import NewsList from '../NewsList';
import { screen } from '@testing-library/react';
import { server } from '../../../mocks/server';
import { store } from '../../../app/store';

describe('NewsList', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('renders correctly', async () => {
    renderWithProviders(<NewsList />, {
      store: store
    });

    expect(await screen.findByText(/12345/i)).toBeInTheDocument();
  });

  it('renders the correct number of articles', async () => {
    renderWithProviders(<NewsList />, {
      store: store
    });

    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });
});
