import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Country from '../components/Countries/Country';
import store from '../redux/configStore';

const renderer = require('react-test-renderer');

it('Matches the snapshot of Country component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Country />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Country component', () => {
  render(<Provider store={store}><BrowserRouter><Country /></BrowserRouter></Provider>);
  const element = screen.getByText(/Detailed Report.../i);
  expect(element).toBeInTheDocument();
});
