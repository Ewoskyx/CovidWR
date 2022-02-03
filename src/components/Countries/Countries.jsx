import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import { getDetail } from '../../redux/countries/countries';
import Country from './Country';
import './Countries.css';

const Countries = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countryReducer.selectedCountries);
  const values = Object.values(countries);

  const handleClick = (e) => {
    const countryId = e.target.id;
    dispatch(getDetail(countryId));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="container-fluid countries-main pb-5 pt-3">
        <div className="d-flex flex-wrap justify-content-center gap-2 countries-body">
          <div className=" col-6 d-flex justify-content-between align-items-center">
            <h3 className="h3">
              {values[0].All.continent}
            </h3>
            <NavLink to="/" className="back-btn"><IoChevronBackCircleOutline className="back-icon" data-bs-toggle="tooltip" data-bs-placement="left" title="Back to Home" /></NavLink>
          </div>
          {values.map((value) => {
            if (value.All.country) {
              return (
                <Country
                  id={value.All.country}
                  key={uuidv4()}
                  code={value.All.abbreviation}
                  name={value.All.country}
                  population={value.All.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  handleClick={handleClick}
                />
              );
            }
            return '';
          })}
        </div>

      </section>
    </motion.div>
  );
};
export default Countries;
