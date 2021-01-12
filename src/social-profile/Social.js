import React from 'react';
import PropTypes from 'prop-types';
import user from './user.json';
import styles from './Social.module.css';

const Social = props => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={user.avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className="name">{user.name}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Social.defaultProps = {};
Social.propTypes = {};

export default Social;
