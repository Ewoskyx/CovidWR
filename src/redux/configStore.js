import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import countryReducer, { fetchData } from './countries/countries';

const reducer = combineReducers({
  countryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
// Fetch Countries

const getData = async () => {
  await axios('https://covid-api.mmediagroup.fr/v1/cases', {
    method: 'GET',
  })
    .then((data) => {
      store.dispatch(fetchData(data.data));
    });
};
getData();
export default store;
