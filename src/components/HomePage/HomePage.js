import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchShuttles from './HomePageService';
import constants from '../../utils/constants';
import SpaceShuttleCard from '../Card/SpaceShuttleCard';
import styles from './HomePage.module.css';
// import updateSpace from '../UpdateSpace/UpdateSpace.Service';

const HomePage = () => {
  const history = useHistory();
  const [shuttles, setShuttles] = useState([]);
  const [apiError, setApiError] = useState(false);
  const routeChange = () => {
    const path = '/createSpace';
    history.push(path);
  };
  useEffect(() => {
    fetchShuttles(setShuttles, setApiError);
  }, []);
  const update = (shuttle) => {
    console.log(shuttle);
    history.push({
      pathname: '/updateSpace',
      state: {
        shuttle
      }
    });
  };
  return (
    <>
      <div>
        <div>
          {apiError && <p>{constants.API_ERROR}</p>}
        </div>
        <div className={styles.title}>
          <h1>Space Shuttles</h1>
        </div>
        <div>
          <div className={styles.wrap}>
            <button type="button" data-testid="buttonx" onClick={routeChange} className={styles.button}> Create new SpaceShuttles </button>
          </div>
          <div className={styles.app}>
            {shuttles.map((shuttle) => (
              <div>
                <SpaceShuttleCard shuttle={shuttle} onClick={() => update(shuttle)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
