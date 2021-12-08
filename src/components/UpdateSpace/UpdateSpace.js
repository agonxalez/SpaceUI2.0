import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import constants from '../../utils/constants';
import styles from './UpdateSpace.module.css';
import updateSpace from './UpdateSpace.Service';

const UpdateSpace = () => {
  const location = useLocation();
  const shuttles = location.state.shuttle;
  const history = useHistory();
  const [shuttleData, setShuttleData] = useState({
    id: shuttles.id,
    name: shuttles.name,
    active: shuttles.active,
    description: shuttles.description,
    release: shuttles.release,
    amount: shuttles.amount
  });
  const [apiError, setApiError] = useState(false);
  const onChange = (e) => {
    shuttleData.id = shuttles.id;

    setShuttleData({ ...shuttleData, [e.target.id]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    updateSpace(shuttleData, setApiError);
    const path = '/';
    history.push(path);
  };
  return (
    <div className={styles.loginbox}>
      <div>
        {apiError && <p className={styles.errMsg} data-testid="errMsg">{constants.API_ERROR}</p>}
        <form>
          <div className={styles.userbox}>
            <label htmlFor="name">
              Name
              <input
                aria-label="name"
                type="text"
                label="name"
                data-testid="name"
                className="form-control"
                id="name"
                onChange={onChange}
                placeholder="Another input"
                value={shuttleData.name || ''}
              />
            </label>
          </div>
          <div className={styles.userbox}>
            <label htmlFor="active">
              Active
              <input
                aria-label="active"
                type="text"
                label="active"
                data-testid="active"
                className="form-control"
                id="active"
                onChange={onChange}
                placeholder="Another input"
                value={shuttleData.active || ''}
              />
            </label>
          </div>
          <div className={styles.userbox}>
            <label htmlFor="description">
              Description
              <input
                aria-label="description"
                type="text"
                label="description"
                data-testid="description"
                className="form-control"
                id="description"
                onChange={onChange}
                placeholder="Another input"
                value={shuttleData.description || ''}
              />
            </label>
          </div>
          <div className={styles.userbox}>
            <label htmlFor="amount">
              Amount
              <input
                type="text"
                aria-label="amount"
                className="form-control"
                label="amount"
                data-testid="amount"
                id="amount"
                onChange={onChange}
                placeholder="Another input"
                value={shuttleData.amount || ''}
              />
            </label>
          </div>
          <div className={styles.userbox}>
            <label htmlFor="release">
              Release
              <input
                type="text"
                aria-label="release"
                className="form-control"
                label="release"
                data-testid="release"
                id="release"
                onChange={onChange}
                placeholder="Another input"
                value={shuttleData.release || ''}
              />
            </label>
          </div>
          <div className={styles.wrap}>
            <button className={styles.button} type="submit" data-testid="buttonx" onClick={submit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateSpace;
