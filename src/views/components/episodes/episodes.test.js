import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Episodes } from './episodes';

const EPISODES = [
  {
    id: 1,
    name: 'name1',
    season: 1,
    number: 1,
  },
  {
    id: 2,
    name: 'name2',
    season: 2,
    number: 2,
  },
];

describe('Episodes component', () => {
  it('is expected to render empty string', () => {
    render(<Episodes />);
    expect(screen.getByText(/Sorry, There are no episodes/i)).toBeInTheDocument();
  });

  describe('with data', () => {
    beforeEach(() => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Episodes episodes={EPISODES} />
        </Router>,
      );
    });

    it('is expected to render 2 episodes', () => {
      expect(screen.getAllByTestId('episode')).toHaveLength(2);
    });

    it('is expected to rebder links with correct path', () => {
      expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/1/episode/1/1');
      expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/2/episode/2/2');
    });
  });
});
