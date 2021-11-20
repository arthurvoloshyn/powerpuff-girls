import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

describe('Footer component', () => {
  it('is expected to render the title', () => {
    render(<Footer />);
    expect(screen.getByText(/Created with love/i)).toBeInTheDocument();
  });
});
