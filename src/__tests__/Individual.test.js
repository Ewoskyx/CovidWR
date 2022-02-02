import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fetchData, getCountries, getDetail } from '../redux/countries/countries';
import Individual from '../components/Individual/Individual';
import store from '../redux/configStore';

it('renders detailed country according to store', () => {
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
  store.dispatch(getDetail('Turkey'));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Individual />
      </BrowserRouter>
    </Provider>,
  );
  const elements = screen.getByText(/Middle East/i);
  expect(elements).toBeInTheDocument();
});
