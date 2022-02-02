import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countryReducer, { fetchData } from './countries/countries';

const reducer = combineReducers({
  countryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
// Fetch Leagues

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
// API KEY : 6280240eef3dc8fcde67ebe4386081eb
// sample query: https://v3.football.api-sports.io/leagues?country=world
export default store;
