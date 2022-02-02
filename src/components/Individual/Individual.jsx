import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsFillPeopleFill, BsClock, BsMap } from 'react-icons/bs';
import { GiDeathSkull, GiLifeInTheBalance } from 'react-icons/gi';
import { BiMap, BiArea, BiHomeSmile } from 'react-icons/bi';
import { FaDisease } from 'react-icons/fa';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

const Individual = () => {
  const country = useSelector((state) => state.countryReducer.detailedCountry);

  return (
    <div className="col-12">
      <div className="card continent-card text-white pb-4 px-2 gap-1">

        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{country[0].All.country}</h5>
          <div className="d-flex flex-column">
            <NavLink to="/countries" className="back-btn-country" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to Countries"><IoChevronBackCircleOutline className="back-icon" /></NavLink>
            <NavLink to="/" className="back-btn-country" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to Home"><BiHomeSmile className="back-icon" /></NavLink>
          </div>
        </div>
        <p className="card-text">
          <BsMap />
          {`  Continent: ${country[0].All.continent}`}
        </p>
        <p className="card-text">
          <BiMap />
          {`  Location: ${country[0].All.location}`}
        </p>
        <p className="card-text">
          <BiArea />
          {`  Area(km²): ${country[0].All.sq_km_area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
        </p>
        <p className="card-text">
          <BsFillPeopleFill />
          {`  Population: ${country[0].All.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
        </p>
        <p className="card-text">
          <FaDisease />
          {`  Cases: ${country[0].All.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
        </p>
        <p className="card-text">
          <GiDeathSkull />
          {`  Deaths: ${country[0].All.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
        </p>
        <p className="card-text">
          <GiLifeInTheBalance />
          {`  Life Expectancy: ${country[0].All.life_expectancy}%`}
        </p>
        <p className="card-text">
          <BsClock />
          {`  Last Update: ${country[0].All.updated}`}
        </p>
      </div>
    </div>

  );
};

export default Individual;
