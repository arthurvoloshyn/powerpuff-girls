import { render, screen } from '@testing-library/react';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Header } from './header';

describe("Header component", () => {
  it('is expected to render navigation links', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Powerpuff Girls/i)).toBeInTheDocument();
  });
});
