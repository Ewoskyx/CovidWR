import React from 'react';
import PropTypes from 'prop-types';
import './Continent.css';
import { BsFillPeopleFill, BsClock } from 'react-icons/bs';
import { GiWorld, GiDeathSkull } from 'react-icons/gi';

const World = ({
  continent, title, countryCount, totalCountries, totalDeaths, updateDate,
}) => (
  <div className="col-12 col-md-10 continent-main">
    <div className="card continent-card text-white">
      <img className="card-img" src={continent} alt="Card" />
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <GiWorld />
          {`  Available Countries: ${totalCountries}`}
        </p>
        <p className="card-text">
          <BsFillPeopleFill />
          {`  Confirmed Cases: ${countryCount}`}
        </p>
        <p className="card-text">
          <GiDeathSkull />
          {`  Total Deaths: ${totalDeaths}`}
        </p>
        <p className="card-text">
          <BsClock />
          {`  Last Update ${updateDate}`}
        </p>
      </div>
    </div>
  </div>
);

export default World;

World.propTypes = {
  continent: PropTypes.string,
  title: PropTypes.string,
  countryCount: PropTypes.string,
  totalCountries: PropTypes.number,
  totalDeaths: PropTypes.string,
  updateDate: PropTypes.string,
};

World.defaultProps = {
  continent: '',
  title: '',
  countryCount: '',
  totalCountries: 0,
  totalDeaths: '',
  updateDate: '',
};
