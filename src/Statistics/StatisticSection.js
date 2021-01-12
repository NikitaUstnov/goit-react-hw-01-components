import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';
import StatApp from './Statistics';
import styles from './statistic.module.css';

const StatisticSection = title => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        <StatApp />
      </ul>
    </section>
  );
};

StatisticSection.propTypes = {};

export default StatisticSection;
