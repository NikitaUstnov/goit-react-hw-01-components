import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <div>{title && <h2>{title}</h2>}</div>
      <div>
        {stats.map(stat => (
          <ul key={stat.id}>
            <li>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
