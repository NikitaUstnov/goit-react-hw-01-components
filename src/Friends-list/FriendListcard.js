import React from 'react';
import PropTypes from 'prop-types';
import friensflist from './friends.json';
import styles from "./friends.module.css";

const FriendList = () => {
    return friensflist.map(({avatar, name, isOnLine, id}) =>
       <li className="item">
            <span className="status">{isOnLine}</span>
            <img className="avatar" src={avatar} alt={id} width="48" />
            <p className="name">{name}</p>
        </li>
        
    );
};

FriendList.propTypes = {
    
};

export default FriendList;