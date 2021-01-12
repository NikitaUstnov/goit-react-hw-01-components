import React from 'react';
import PropTypes from 'prop-types';
import transactionHistory from './transactions.json';

const transactionHistoryList = props => {
  return transactionHistory.map(({ id, type, amount, currency }) => (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  ));
};

transactionHistoryList.propTypes = {};

export default transactionHistoryList;
