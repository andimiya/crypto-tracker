import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class PaymentForm extends Component {

  constructor(props) {
    super(props);
  }

  onToken = (token) => {
    var body = JSON.stringify(token);
    fetch(`/api/charge`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body
    })
    .then((success) => {
      if(success){
        console.log('success');
      }
    })
    .catch(err => {
      console.log(err, '');
    })
  }

  render() {
    if (!this.props.shark) {
      return null;
    }
    return (
      <div id="checkout-container">
        <StripeCheckout
          name="Buoy Call"
          description="Saving the Ocean"
          ComponentClass="div"
          amount={500}
          currency="USD"
          stripeKey={config.STRIPE.PUBLISHABLE_KEY}
          locale="en"
          alipay
          bitcoin
          token={this.onToken}
          >
        </StripeCheckout>
      </div>
    )
  }
}

export default PaymentForm;
