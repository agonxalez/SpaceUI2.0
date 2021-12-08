import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import createSpacePost from './CreateSpaceService';
import styles from './CreateSpace.module.css';
import constants from '../../utils/constants';

const CreateSpace = () => {
  const history = useHistory();
  const [apiError, setApiError] = useState(false);
  const [spaceData, setSpaceData] = useState({
    id: '',
    amount: '',
    description: '',
    release: '',
    name: '',
    active: 'true'
  });
  const submit = async (e) => {
    e.preventDefault();
    await createSpacePost(spaceData, setApiError);
    const path = '/';
    history.push(path);
  };
  const onChange = (e) => {
    setSpaceData({ ...spaceData, [e.target.id]: e.target.value });
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
                className="form-control"
                data-testid="name"
                label="name"
                id="name"
                onChange={onChange}
                placeholder="Another input"
                value={spaceData.name}
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
                value={spaceData.active}
              />
            </label>
          </div>
          <div className={styles.userbox}>
            <label htmlFor="description">
              Description
              <input
                aria-label="description"
                type="text"
                className="form-control"
                label="description"
                data-testid="description"
                id="description"
                onChange={onChange}
                placeholder="Another input"
                value={spaceData.description}
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
                value={spaceData.amount}
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
                value={spaceData.release}
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
export default CreateSpace;
