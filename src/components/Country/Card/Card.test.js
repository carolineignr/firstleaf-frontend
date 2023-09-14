import { screen } from '@testing-library/react';
import Card from './Card';
import { renderWithRedux } from '../../../utils/test-utils';

describe("Card component", () => {
  const country = {};

  beforeEach(() => {
    country.name = {
      official: 'Fake name'
    };
    country.capital = 'Fake capital';
    country.population = '10';
    country.flags = {
      png: '',
      alt: ''
    }
  })

  it('should render successfully', async () => {
    renderWithRedux(<Card country={country} />);
    const element = await screen.findByText(/Fake name/i);
    expect(element).toBeInTheDocument();
  })

})