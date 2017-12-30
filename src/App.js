import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomepageContainer from './containers/HomepageContainer';
import TransactionContainer from './containers/TransactionContainer';
import LoginContainer from './containers/LoginContainer';
import Footer from './components/Footer';

const App = () =>
  <div id="app-container">
    <BrowserRouter>
      <div className="app">
        <NavBar />
          <Route exact path="/" component={HomepageContainer} />
          <Route exact path="/transactions" component={TransactionContainer} />
          <Route exact path="/login" component={LoginContainer} />
        <Footer />
      </div>
    </BrowserRouter>
  </div>;

export default App;
