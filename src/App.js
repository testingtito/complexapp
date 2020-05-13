import React from 'react';
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomeGuest />
        </Route>
        <Route path='/about-us' exact>
          <About />
        </Route>
        <Route path='/terms' exact>
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;



