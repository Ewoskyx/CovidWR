import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Continent.css';

const Continent = ({
  continent, title, countryCount, totalCountries, totalDeaths, updateDate, id, clickHandler,
}) => (

  <div className="col-12 col-md-5 continent-main">
    <NavLink to="/countries" onClick={clickHandler} className="link" id={id} />
    <div className="card continent-card text-white">
      <img className="card-img" src={continent} alt={`${title} card`} />
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`Available Countries: ${totalCountries}`}</p>
        <p className="card-text">{`Confirmed Cases: ${countryCount}`}</p>
        <p className="card-text">{`Total Deaths: ${totalDeaths}`}</p>
        <p className="card-text">{`Last Update ${updateDate}`}</p>
      </div>
    </div>
  </div>

);

export default Continent;

Continent.propTypes = {
  continent: PropTypes.string,
  title: PropTypes.string,
  countryCount: PropTypes.string,
  totalCountries: PropTypes.number,
  totalDeaths: PropTypes.string,
  updateDate: PropTypes.string,
  id: PropTypes.string,
  clickHandler: PropTypes.func,
};

Continent.defaultProps = {
  continent: '',
  title: '',
  countryCount: '',
  totalCountries: 0,
  totalDeaths: '',
  updateDate: '',
  id: '',
  clickHandler: () => {},
};
