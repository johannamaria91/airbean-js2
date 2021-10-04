import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Profile from './components/Profile';
import Status from './components/Status';
import Cart from './components/Cart';
import Landing from './components/Landing';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
        <Route path='/status' component={Status} />
        <Route path='/cart' component={Cart} />
        
      </Switch>
    </div>
  );
}

export default App;
