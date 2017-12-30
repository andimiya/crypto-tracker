import React from 'react';
import { ajax } from 'jquery';
import { GET_TRANSACTIONS, CURRENCIES } from '../../constants';
import InvestmentForm from '../../components/InvestmentForm';
import TransactionTable from '../../components/TransactionTable';

const USER_ID = 1;

class TransactionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getTransactions = this.getTransactions.bind(this);
    this.getAllCurrencies = this.getAllCurrencies.bind(this);

    this.state = {
      allData: [],
      exchangeRates: [],
      currencies: [],
      error: ''
    };
  }

  componentDidMount(){
    this.getTransactions();
    this.getAllCurrencies();
  }

  getAllCurrencies(){
    ajax(CURRENCIES).then(currencies => {
      this.setState({
        currencies: currencies.data
      });
    });
  }

  getTransactions(){
    ajax(`${GET_TRANSACTIONS}?user_id=${USER_ID}`).then(data => {
      this.setState({ allData: data.data })
    })
  }

  render(props) {
    return (
      <div>
        <div className="transaction-container">
          <div className="investment-line-container">
            <TransactionTable allData={this.state.allData}/>
          </div>
        </div>
        <div>
          <InvestmentForm
            currencies={this.state.currencies}
            getTransactions={this.getTransactions()}
          />
        </div>
      </div>
    )
  };
};

export default TransactionContainer;
