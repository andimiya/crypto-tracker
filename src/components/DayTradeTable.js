import React from 'react';
import moment from 'moment';

const DayTradeTable = props => {
  return (
    <div className="table-container">
      <table className="table-striped table-responsive">
        <thead>
          <tr>
            <th className="align-middle">Date</th>
            <th className="align-middle">High</th>
            <th className="align-middle">Low</th>
            <th className="align-middle">Close</th>
            <th className="align-middle">Mid</th>
            <th className="align-middle">5DA-H</th>
            <th className="align-middle">3DA-L</th>
            <th className="align-middle">5DA-M</th>
            <th className="align-middle">High Trend</th>
            <th className="align-middle">Pred. SELL</th>
            <th className="align-middle">Pred. BUY</th>
            <th className="align-middle">High/ N.Close</th>
            <th className="align-middle">Pred. BUY</th>
            <th className="align-middle">Sell %</th>
            <th className="align-middle">Buy %</th>
          </tr>
        </thead>
        <tbody>
          {props.allData.map(transactions => {
            return (
              <tr key={transactions.transaction_id}>
                <td key={transactions.updated_at}>
                  {moment
                    .utc(transactions.updated_at)
                    .format('X')}
                </td>
                <td>{transactions.name}</td>
                <td>{transactions.usd_invested}</td>
                <td>{transactions.exchange_rate}</td>
                <td>{transactions.coin_purchased}</td>
                <td>
                  {moment(transactions.purchased_at).format(
                    'MMM DD, YYYY H:mm'
                  )}
                </td>
                <td>
                  <a onClick={props.onClick}>
                    <img
                      className="delete-button"
                      id={transactions.transaction_id}
                      src={deleteIcon}
                      alt="Delete Transaction"
                    />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DayTradeTable;
