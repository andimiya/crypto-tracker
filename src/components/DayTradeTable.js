import React from 'react';
import moment from 'moment-timezone';

const DayTradeTable = props => {
  return (
    <div className="table-container">
      <table className="table-striped table-responsive">
        <thead>
          <tr>
            <th className="align-middle">Open Time</th>
            <th className="align-middle">High</th>
            <th className="align-middle">Low</th>
            <th className="align-middle">Close</th>
            <th className="align-middle">Mid</th>
            <th className="align-middle">Pred. SELL</th>
            <th className="align-middle">Pred. BUY</th>
            <th className="align-middle">High/ N.Close</th>
            <th className="align-middle">Pred. BUY</th>
            <th className="align-middle">Sell %</th>
            <th className="align-middle">Buy %</th>
            <th className="align-middle">Daily H/L</th>
            <th className="align-middle">Close Spread</th>
            <th className="align-middle">High/ N.Close</th>
          </tr>
        </thead>
        <tbody>
          {props.allData.map((binanceData, i) => {
            return (
              <tr key={i}>
                <td key={binanceData.open_time}>{moment
                  .unix(binanceData.open_time / 1000)
                  .format("MMM DD, YYYY")}</td>
                <td key={binanceData.high}>{binanceData.high.toFixed(2)}</td>
                <td key={binanceData.low}>{binanceData.low.toFixed(2)}</td>
                <td key={binanceData.close}>{binanceData.close.toFixed(2)}</td>
                <td>{((binanceData.high + binanceData.low) / 2).toFixed()}</td>
                <td>
                  Pred Sell
                </td>
                <td>
                  Pred Buy
                </td>
                <td>
                  {(!props.allData[i - 1] ? "" : (((binanceData.high / props.allData[i - 1].close) - 1) * 100).toFixed(2)
                  )}%
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
