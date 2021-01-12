import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import FriendsList from './Friends-list/FriendsList';
import SocialProfile from './social-profile/Social';
import Statistic from './Statistics/StatisticSection';
import TransacrionList from './TransacrionHistory/transactionCard';
ReactDOM.render(
  <React.StrictMode>
    <SocialProfile />
    <FriendsList />
    <Statistic />
    <TransacrionList />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
