import { render, screen } from '@testing-library/react';
import { Details } from './details';

const DETAILS = {
  name: 'Test name',
  airdate: 'test data',
  premiered: '',
  summary: 'Test description',
  image: {
    medium: 'image-src',
  },
};

describe("Details component", () => {
  it('is expected to render details with empty data', () => {
    render(<Details />);
    expect(screen.getByText(/Empty name/i)).toBeInTheDocument();
    expect(screen.getByText(/No description/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Empty name/i)).toBeInTheDocument();
  });

  it('is expected to render passed data', () => {
    render(<Details details={DETAILS} />);
    expect(screen.getByText(/Test name/i)).toBeInTheDocument();
    expect(screen.getByText(/test data/i)).toBeInTheDocument();
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  });
});
