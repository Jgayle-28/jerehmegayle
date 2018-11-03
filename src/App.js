import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//////// COMPONENTS ////////////
import UserNav from './components/layout/UserNav';

import Home from './components/layout/Home';
import About from './components/layout/About';
import Portfolio from './components/layout/Portfolio';
import Contact from './components/layout/Contact';

import Checkmate from './components/portfolio/Checkmate';
import JgDezigns from './components/portfolio/JgDezigns';
import Momentum from './components/portfolio/Momentum';
import Mandys from './components/portfolio/Mandys';
import Storeright from './components/portfolio/Storeright';

//////// MAIN COMPILED SCSS ////////////
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <UserNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

            {/* PORTFOLIO  PROJECT ROUTES */}
            <Route exact path="/checkmate" component={Checkmate} />
            <Route exact path="/jgDezigns" component={JgDezigns} />
            <Route exact path="/momentum" component={Momentum} />
            <Route exact path="/mandys" component={Mandys} />
            <Route exact path="/storeRight" component={Storeright} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
