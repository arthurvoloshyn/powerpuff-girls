import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Header } from './header';

describe('Header component', () => {
  describe('is expected to render navigation links', () => {
    beforeEach(() => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Header />
        </Router>,
      );
    });

    it('Home navigation link', () => {
      expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });

    it('Powerpuff Girls navigation link', () => {
      expect(screen.getByText(/Powerpuff Girls/i)).toBeInTheDocument();
    });
  });
});
