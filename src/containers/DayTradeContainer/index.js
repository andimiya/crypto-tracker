import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import moment from 'moment';
import { GET_BINANCE_FROM_DB } from '../../constants';
import { getDatabaseUserInfo } from '../../redux/auth';

function mapStateToProps(state) {
  return {
    databaseUserInfo: state.auth.userInformation,
  };
}

class DayTradeContainer extends Component {
  constructor(props) {
    super(props);

    this.getBinanceData = this.getBinanceData.bind(this);

    this.state = {
      binance_data_from_db: [],
      error: '',
    };
  }

  componentDidMount() {
    this.getBinanceData();
  }

  getBinanceData() {
    $.get(GET_BINANCE_FROM_DB, (data) => {
      this.setState({ binance_data_from_db: data.data });
    })
  }

  render() {
    return (
      <div className="transaction-container outer" >
        <div className="transaction-table-container">
          <h1>Binance Table</h1>
          {this.state.binance_data_from_db.map((binanceData, i) => {
            return (
              <div key={i}>
                <div>Open Time:{moment.unix(binanceData.open_time / 1000).format("MMM DD, YY HH:mm:ss Z")}</div>
                <div>Open Time:{binanceData.open_time}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  getDatabaseUserInfo,
})(DayTradeContainer);
