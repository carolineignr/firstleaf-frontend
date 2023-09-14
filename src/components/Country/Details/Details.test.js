import { screen } from '@testing-library/react';
import Details from './Details';
import { renderWithRedux } from '../../../utils/test-utils';

describe("Details component", () => {
  const country = {};

  beforeEach(() => {
    country.name = {
      common: 'Fake country name'
    };
    country.capital = 'Fake capital name';
    country.continents = ['Fake continent'];
    country.flags = {
      png: '',
      alt: ''
    };
    country.latlng = [0, 0];
    country.independent = true;
    country.unMember = true;
    country.landlocked = true;
    country.population = 10;
    country.area = 10;
    country.timezones = ['UTC'];
    country.currencies = ['']
  })

  it('should render successfully', async () => {
    renderWithRedux(<Details country={country} />);

    const element = await screen.findByText(/Fake country name/i);

    expect(element).toBeInTheDocument();
  })
})