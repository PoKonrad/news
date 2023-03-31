import { renderWithProviders } from '../../../utils/test-utils';
import { NewsGrid } from '../NewsGrid';
import { screen } from '@testing-library/react';
import { server } from '../../../mocks/server';
import { store } from '../../../app/store';

describe('NewsGrid', () => {
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
    renderWithProviders(<NewsGrid />, {
      store: store
    });

    expect(await screen.findByText(/12345/i)).toBeInTheDocument();
  });

  it('renders the correct number of articles', async () => {
    renderWithProviders(<NewsGrid />, {
      store: store
    });

    expect(await screen.findAllByRole('img')).toHaveLength(3);
  });
});
