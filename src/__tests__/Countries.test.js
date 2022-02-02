import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fetchData, getCountries } from '../redux/countries/countries';
import Countries from '../components/Countries/Countries';
import store from '../redux/configStore';

it('renders Countries by Continent according to store-action', () => {
  const data = {
    Turkey: {
      All: {
        abbreviation: 'TR',
        capital_city: 'Ankara',
        confirmed: 11722483,
        continent: 'Asia',
        country: 'Turkey',
        deaths: 87614,
        elevation_in_meters: '1,132',
        iso: 792,
        lat: '38.9637',
        life_expectancy: 71,
        location: 'Middle East',
        long: '35.2433',
        population: 80745020,
        recovered: 0,
        sq_km_area: 774815,
        updated: '2022-02-02 04:21:09',
      },
    },
  };
  store.dispatch(fetchData(data));
  store.dispatch(getCountries('Asia'));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Countries />
      </BrowserRouter>
    </Provider>,
  );
  const elements = screen.getByText(/Turkey/i);
  expect(elements).toBeInTheDocument();
});
