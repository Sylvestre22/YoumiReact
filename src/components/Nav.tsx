import React, {FunctionComponent as FC, useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';

const Nav:FC = ():JSX.Element =>{
    const [isOpen, setIsOpen] = useState(false),
    [navIsFixed, setNavIsFixed] = useState(false)

    const nIsFixed = ():void => window.scrollY > 100 ? setNavIsFixed(true) : setNavIsFixed(false)

    useEffect(():void => {
        window.addEventListener('scroll', nIsFixed)
    }, [navIsFixed])
    
    return(
        <header className="site-header header-one">
            <nav className={(navIsFixed ? 'stricky-fixed slideInDown ' : 'slideIn ') + "navbar navbar-expand-lg navbar-light header-navigation stricky animated"}>
                <div className="container clearfix">
                    <div className="logo-box clearfix">
                        <HashLink to="/#banner" className="navbar-brand" href="index.html">
                            <img src="images/logo-1-1.png" alt="LOGO" />
                        </HashLink>
                        <button className="menu-toggler" data-target=".header-one .main-navigation">
                            <span className="fa fa-bars" onClick={()=> setIsOpen((!isOpen))}></span>
                        </button>
                    </div>
                    <div className={isOpen ? 'main-navigation showen' : 'main-navigation'} style={isOpen ? {display: 'block'} : {display: 'none'}}>
                            <Scrollspy className="one-page-scroll-menu navigation-box" items={['banner', 'service', 'features', 'pricing']} currentClassName="current" offset={-1}>
                                        <li className="scrollToLink"><HashLink to="/#banner">Home</HashLink></li>
                                        <li className="scrollToLink"><HashLink to="/#service">Features</HashLink></li>
                                        <li className="scrollToLink"><HashLink to="/#features">App Screens</HashLink></li>
                                        <li className="scrollToLink"><HashLink to="/#pricing">Pricing</HashLink></li>
                            </Scrollspy>
                    </div>
                    <div className="right-side-box">
                        <HashLink to="/login#" className="header-btn">Login</HashLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav