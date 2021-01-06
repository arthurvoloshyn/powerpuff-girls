import { render, screen } from '@testing-library/react';

import { Details } from './details';

const DETAILS = {
  name: 'Test name',
  airdate: 'Test data',
  premiered: '',
  summary: 'Test description',
  image: {
    medium: 'image-src',
  },
};

describe('Details component', () => {
  describe('is expected to render details with empty data', () => {
    beforeEach(() => {
      render(<Details />);
    });

    it('details name', () => {
      expect(screen.getByText(/Empty name/i)).toBeInTheDocument();
    });

    it('details description', () => {
      expect(screen.getByText(/No description/i)).toBeInTheDocument();
    });

    it('details image alternate text', () => {
      expect(screen.getByAltText(/Empty name/i)).toBeInTheDocument();
    });
  });

  describe('is expected to render transmitted data', () => {
    beforeEach(() => {
      render(<Details details={DETAILS} />);
    });

    it('details name', () => {
      expect(screen.getByText(/Test name/i)).toBeInTheDocument();
    });

    it('details air date', () => {
      expect(screen.getByText(/Test data/i)).toBeInTheDocument();
    });

    it('details description', () => {
      expect(screen.getByText(/Test description/i)).toBeInTheDocument();
    });
  });
});
