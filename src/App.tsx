import React, {useState, useEffect, FunctionComponent as FC} from 'react';
import './App.css';

import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stat from './components/Stat';
import Service from './components/Service';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import Testimony from './components/Testimony';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import './css/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App:FC = ():JSX.Element=> {
  const [isLoad, setIsLoad] = useState(true)

  useEffect(():void=>{
    setTimeout(():void => setIsLoad(false), 200)
  }, [isLoad])

  return (
    <div className="App page-wrapper">
      <Router>
        {isLoad ? <Loader /> : ''}
        <Nav />
        
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Stat />
            <Service />
            <Feature />
            <Pricing />
            <Testimony />
            <Faq />
          </Route>
          
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>

        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
