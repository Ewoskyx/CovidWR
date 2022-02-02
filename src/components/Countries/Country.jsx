import React from 'react';
import PropTypes from 'prop-types';
import './Country.css';
import { NavLink } from 'react-router-dom';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';

const Country = ({
  name, handleClick, code, population, id,
}) => (

  <div className="col-12 col-md-6 country-card">
    <div className="card-body country-body gap-2">
      <div className="col-12 country-name">
        <h5 className="col-8 code-title p-1">
          <GiWorld />
          {`  ${name}`}
        </h5>
        <h5 className="code-bagde col-4">{code}</h5>
      </div>
      <p className="card-text country-population">
        <BsFillPeopleFill />
        {`  Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
      </p>
      <NavLink to="/country" id={id} onClick={handleClick} className="card-link">
        Detailed Report...
      </NavLink>
    </div>
  </div>

);

export default Country;

Country.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  code: PropTypes.string,
  population: PropTypes.string,
  id: PropTypes.string,
};

Country.defaultProps = {
  code: '',
  population: '',
  id: '',
  name: '',
  handleClick: () => {},
};
