import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import World from '../components/Home/World';
import store from '../redux/configStore';

const renderer = require('react-test-renderer');

it('Matches the snapshot of World component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <World />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders World component', () => {
  render(<Provider store={store}><BrowserRouter><World /></BrowserRouter></Provider>);
  const element = screen.getByText(/Available Countries/i);
  expect(element).toBeInTheDocument();
});
