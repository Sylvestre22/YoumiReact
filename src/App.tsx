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

import './css/style.css';

const App:FC = ():JSX.Element=> {
  const [isLoad, setIsLoad] = useState(true)

  useEffect(():void=>{
    setTimeout(():void => setIsLoad(false), 200)
  }, [isLoad])

  return (
    <div className="App page-wrapper">
      {isLoad ? <Loader /> : ''}
      <Nav />
      <Hero />
      <Stat />
      <Service />
      <Feature />
      <Pricing />
      <Testimony />
      <Faq />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
