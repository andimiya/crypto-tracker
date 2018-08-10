import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { GET_BINANCE_FROM_DB } from '../../constants';
import { getDatabaseUserInfo } from '../../redux/auth';
import DayTradeTable from '../../components/DayTradeTable';

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
          <DayTradeTable
            allData={this.state.binance_data_from_db}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  getDatabaseUserInfo,
})(DayTradeContainer);
