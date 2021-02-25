import React, {FunctionComponent as FC, useState, useEffect} from 'react';

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
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo-1-1.png" alt="LOGO" />
                        </a>
                        <button className="menu-toggler" data-target=".header-one .main-navigation">
                            <span className="fa fa-bars" onClick={()=> setIsOpen((!isOpen))}></span>
                        </button>
                    </div>
                    <div className={isOpen ? 'main-navigation showen' : 'main-navigation'} style={isOpen ? {display: 'block'} : {display: 'none'}}>
                        <ul className="one-page-scroll-menu navigation-box">
                            <li className="scrollToLink">
                                <a href="#banner">Home</a>
                            </li>
                            <li className="scrollToLink"><a href="#service">Features</a></li>
                            <li className="scrollToLink"><a href="#features">App Screens</a></li>
                            <li className="scrollToLink"><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="right-side-box">
                        <a href="##" className="header-btn">Login</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav