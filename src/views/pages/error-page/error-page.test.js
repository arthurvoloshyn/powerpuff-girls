import { render, screen } from '@testing-library/react';
import { ErrorPage } from './error-page';

describe('ErrorPage component', () => {
  it('is expected to render title and sub-title', () => {
    render(<ErrorPage />);
    expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();
  });
});
