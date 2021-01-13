import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListitem/FriendListItem.jsx';
import styles from './friends.module.css';

function FriendList({ friends }) {
  return <ul className={styles.friendlist}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
