import React from 'react';
import PropTypes from 'prop-types';
import FriendsListCard from './FriendListcard.js'
import styles from './friends.module.css'

const FriendsList = props => {
    return (
        <ul className='fliendslist'>
            <FriendsListCard />
       </ul>
    );
};

FriendsList.propTypes = {
    
};

export default FriendsList;