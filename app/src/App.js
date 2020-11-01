import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewVm from './pages/NewVm';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/new-vm">
          <NewVm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
