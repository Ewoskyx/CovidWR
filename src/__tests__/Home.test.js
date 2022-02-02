import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fetchData } from '../redux/countries/countries';
import Home from '../components/Home/Home';
import store from '../redux/configStore';

it('renders World Continents according to API data comes from store', () => {
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
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  const elements = screen.getAllByText(/Confirmed Cases: 11,722,483/i);
  const element = elements[1];
  expect(element).toBeInTheDocument();
});
