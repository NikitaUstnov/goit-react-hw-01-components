import React from 'react';
import PropTypes from 'prop-types';
import Transactionlist from './TransactionHistory';
import styles from './transaction.module.css';
const transactionCard = props => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <Transactionlist />
    </table>
  );
};

transactionCard.propTypes = {};

export default transactionCard;
