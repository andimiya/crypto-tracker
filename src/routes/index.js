import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MktgPageContainer from '../containers/MktgPageContainer';
import SummaryContainer from '../containers/SummaryContainer';
import TransactionContainer from '../containers/TransactionContainer';
import LoginContainer from '../containers/LoginContainer';
import CreateAccountContainer from '../containers/CreateAccountContainer';
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
import ResetPasswordContainer from '../containers/ResetPasswordContainer';
import NewInvestmentsContainer from '../containers/NewInvestmentsContainer';
import UserAccountContainer from '../containers/UserAccountContainer';
import DayTradeContainer from '../containers/DayTradeContainer';
import UserConfirmedContainer from '../containers/UserConfirmedContainer';
import Footer from '../components/Footer';
import CheckAuth from '../components/checkAuth';

const AuthRoutes = ({ component: Component, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props => (
      <CheckAuth {...props}>
        <Component />
      </CheckAuth>
    )}
  />
);

const Routes = props => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route
          exact
          path="/forgot-password"
          component={ForgotPasswordContainer}
        />
        <Route
          exact
          path="/create-account"
          component={CreateAccountContainer}
        />
        <Route
          exact
          path="/reset-password"
          component={ResetPasswordContainer}
        />
        <Route exact path="/" component={MktgPageContainer} />
        <Route path="/day-trade" component={DayTradeContainer} />
      </Switch>
      <AuthRoutes path="/summary" component={SummaryContainer} />
      <AuthRoutes path="/transactions" component={TransactionContainer} />
      {/* <AuthRoutes path="/day-trade" component={DayTradeContainer} /> */}
      <AuthRoutes path="/new-investments" component={NewInvestmentsContainer} />
      <AuthRoutes path="/confirm" component={UserConfirmedContainer} />
      <Footer />
    </div>
  );
};

export default Routes;
