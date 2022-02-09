import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import './Home.css';
import { getCountries } from '../../redux/countries/countries';
import Continent from './Continent';
import World from './World';
import Worldmap from '../World/Worldmap';
import {
  europe, asia, africa, namerica, samerica, oceania, cov19, world,
} from '../../images/index';

const Home = () => {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(getCountries(e.target.id));
  };

  const clickForCountries = (e) => {
    if (e.target.id) {
      console.log(e.target.id);
    } else {
      console.log(e.target.className.baseVal);
    }
  };
  const continents = useSelector((state) => state.countryReducer.countries);
  const values = Object.values(continents);
  const stats = (cont, continent, id) => {
    let sum = 0;
    let totalCountries = 0;
    let totalDeaths = 0;
    let lastUpdate = '';
    for (let i = 0; i < values.length; i += 1) {
      if (values[i].All.continent === cont) {
        sum += values[i].All.confirmed;
        totalCountries += 1;
        totalDeaths += values[i].All.deaths;
        lastUpdate = values[0].All.updated;
      } if (cont === 'World') {
        for (let j = 0; j < values.length; j += 1) {
          sum += values[j].All.confirmed;
          totalCountries = 180;
          totalDeaths += values[j].All.deaths;
          lastUpdate = values[0].All.updated;
        }
        return (
          <World
            id={id}
            continent={continent}
            title={cont}
            countryCount={sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            totalCountries={totalCountries}
            totalDeaths={totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            updateDate={lastUpdate}
          />
        );
      }
    }
    return (
      <Continent
        id={cont}
        continent={continent}
        title={cont}
        countryCount={sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        totalCountries={totalCountries}
        totalDeaths={totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        updateDate={lastUpdate}
        clickHandler={clickHandler}
      />
    );
  };

  return (
    <motion.div initial={{ opacity: 0, x: '-100vw' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '-100vw' }} transition={{ duration: 0.3 }}>
      <div className="container-fluid home-main pb-5">
        <div className="col-12 d-flex justify-content-center gap-5 py-3">
          <h1 className="h3">Covid-19 World Report</h1>
          <img className="logo" src={cov19} alt="logo" />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-2 home-body overflow-hidden">
          <Worldmap clickaction={clickForCountries} />
          {stats('World', world, 'World')}
          {stats('Europe', europe)}
          {stats('Asia', asia)}
          {stats('Africa', africa)}
          {stats('North America', namerica)}
          {stats('South America', samerica)}
          {stats('Oceania', oceania)}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
