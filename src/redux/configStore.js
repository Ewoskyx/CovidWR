import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countryReducer, { fetchData } from './countries/countries';

const reducer = combineReducers({
  countryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
// Fetch Countries

const getData = async () => {
  await axios('https://covid-api.mmediagroup.fr/v1/cases', {
    method: 'GET',
  })
    .then((data) => {
      store.dispatch(fetchData(data.data));
    })
    .catch((err) => console.log(err));
};
getData();
export default store;
