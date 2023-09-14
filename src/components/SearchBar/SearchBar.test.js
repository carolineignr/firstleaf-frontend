import { screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { renderWithRedux } from '../../utils/test-utils';

test("SearchBar component should render successfully", async () => {
  renderWithRedux(<SearchBar />);

  const element = await screen.findByPlaceholderText(/Search by country name/i);

  expect(element).toBeInTheDocument();
})