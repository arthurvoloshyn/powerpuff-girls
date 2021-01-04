import { render, screen } from '@testing-library/react';
import { HomePage } from './home-page';

describe('HomePage component', () => {
  it('is expected to render title', () => {
    render(<HomePage />);
    expect(screen.getByText(/Powerpuff Girls Home page/i)).toBeInTheDocument();
  });
});
