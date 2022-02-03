const INITIAL_STATE = {
  countries: [],
  selectedCountries: [],
  detailedCountry: [],
};
// Constants
const FETCH_DATA = 'covidInfo/FETCH_DATA';
const GET_COUNTRIES = 'covidInfo/GET_COUNTRIES';
const GET_DETAIL = 'covidInfo/GET_DETAIL';

// Actions
export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getDetail = (payload) => ({
  type: GET_DETAIL,
  payload,
});
// Helper Functions
export const getCountriesByContinent = (state, payload) => {
  const newState = Object.values(state).filter((item) => {
    if (item.All.continent === payload) {
      return item.All;
    }
    return '';
  });
  return newState;
};

export const getCountriesDetail = (state, payload) => {
  const newState = Object.values(state).filter((item) => {
    if (item.All.country === payload) {
      return item.All;
    }
    return '';
  });
  return newState;
};

// Reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, countries: action.payload };
    case GET_COUNTRIES:
      return {
        ...state,
        selectedCountries: getCountriesByContinent(state.countries, action.payload),
      };
    case GET_DETAIL:
      return {
        ...state,
        detailedCountry: getCountriesDetail(state.selectedCountries, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
