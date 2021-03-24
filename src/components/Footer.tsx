import React, {FunctionComponent as FC, Fragment} from 'react'
import Logo from '../images/logo/YoumiLogo.png'

const Footer:FC = ():JSX.Element => {
    return(
        <Fragment>
            <footer className="site-footer">
                <span className="bubble-1"></span>
                <span className="bubble-2"></span>
                <span className="bubble-3"></span>
                <span className="bubble-4"></span>
                <span className="bubble-5"></span>
                <span className="bubble-6"></span>
                <div className="container">
                    <div className="inner-container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <a href="index.html"><img className="logo" src={Logo} alt="LOGO" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>Address</h3>
                                    </div>
                                    <ul className="contact-list">
                                        <li>888 999 0000</li>
                                        <li>needhelp@opins.com</li>
                                        <li>855 road, Broklyn street <br /> new york 600</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>Explore</h3>
                                    </div>
                                    <ul className="links-list">
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Our Team</a></li>
                                        <li><a href="/">Features</a></li>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">How It Works</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>Links</h3>
                                    </div>
                                    <ul className="links-list">
                                        <li><a href="/">Help</a></li>
                                        <li><a href="/">Support</a></li>
                                        <li><a href="/">Clients</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>Follow</h3>
                                    </div>
                                    <div className="social-block">
                                        <a href="/"><i className="fa fa-twitter"></i></a>
                                        <a href="/"><i className="fa fa-facebook-f"></i></a>
                                        <a href="/"><i className="fa fa-instagram"></i></a>
                                        <a href="/"><i className="fa fa-dribbble"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom-footer text-center">
                <div className="container">
                    <p>Lyknowledge</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer