import { render, screen } from '@testing-library/react';
import { Error } from './error';

describe('ErrorPage component', () => {
  describe('is expected to render title and subtitle', () => {
    beforeEach(() => {
      render(<Error />);
    });

    it('Error Page title', () => {
      expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
    });

    it('Error Page subtitle', () => {
      expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();
    });
  });
});
