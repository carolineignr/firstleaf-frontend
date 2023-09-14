import { render, screen } from '@testing-library/react'
import Header from './Header';

test("Renders Header component successfully", () => {
  render(<Header />);

  const element = screen.getAllByText(/Countries of the world/i)[0];

  expect(element).toBeInTheDocument();
})