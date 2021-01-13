import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends-list-item.module.css';

const FriendList = ({ name, avatar, isOnline, id }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}>&#149;</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Пользоватеь"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
