import React, {FunctionComponent as FC} from 'react'
import MockupPhone from '../images/banner-moc-1-1.png'

const Hero:FC =  ():JSX.Element => {
    return(
        <section className="banner-style-one" id="banner">
            <span className="bubble-1"></span>
            <span className="bubble-2"></span>
            <span className="bubble-3"></span>
            <span className="bubble-4"></span>
            <span className="bubble-5"></span>
            <span className="bubble-6"></span>
            <img src={MockupPhone} className="banner-mock" alt="Mockup Phone" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="content-block">
                            <h3>Découvrez Youmi <br/> en avant <br/> première.</h3>
                            <p>Création campagne emailing</p>
                            <div className="button-block">
                                <a href="##" className="banner-btn">
                                    <i className="fa fa-play"></i> Get in<span>Google Play</span>
                                </a>
                                <a href="##" className="banner-btn">
                                    <i className="fa fa-apple"></i> Get in<span>Play Store</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero