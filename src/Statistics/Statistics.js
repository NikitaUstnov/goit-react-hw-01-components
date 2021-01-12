import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';

const Statistics = () => {
  return statisticalData.map(({ id, label, percentage }) => (
    <li className="item">
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </li>
  ));
};

// function Statistics(props) {
//   const statisticalData = props.arr;
//   const listItems = arr.map((arr) =>
//     <li>{arr}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

Statistics.propTypes = {};

export default Statistics;
