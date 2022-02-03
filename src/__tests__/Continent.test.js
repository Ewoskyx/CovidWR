import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Continent from '../components/Home/Continent';
import store from '../redux/configStore';

const renderer = require('react-test-renderer');

it('Renders the Continent component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Continent />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders home component', () => {
  render(<Provider store={store}><BrowserRouter><Continent /></BrowserRouter></Provider>);
  const element = screen.getByText(/Available Countries/i);
  expect(element).toBeInTheDocument();
});
