import React, {FunctionComponent as FC} from 'react'
import RoundedCircle from '../images/round-circle-1-1.png'

const Service:FC = ():JSX.Element =>{
    return(
        <section className="services-style-one" id="service">
            <div className="container">
                <div className="block-title text-center">
                    <img src={RoundedCircle} alt="rounded circle" className="wow rotateIn" data-wow-duration="1000ms" />
                    <h2>Bénéficiez de nombreux avantages</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-service-one">
                            <div className="hover-block"></div>
                            <i className="opins-icon-smartphone"></i>
                            <h3>Créez sans limite</h3>
                            <p>Votre créativité est votre force. Construisez une communauté qui vous soutient pour votre travail et votre personnalité. </p>
                            <div className="line-block"></div>
                            <a href="##" className="more-link">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-service-one">
                            <div className="hover-block"></div>
                            <i className="opins-icon-smartphone-1"></i>
                            <h3>Vivez de votre contenu</h3>
                            <p>Avec YOUMI vous pouvez générer des revenus grâce aux abonnements souscrits par votre communauté.</p>
                            <div className="line-block"></div>
                            <a href="##" className="more-link">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-service-one">
                            <div className="hover-block"></div>
                            <i className="opins-icon-smartphone-2"></i>
                            <h3>Evitez le cyber-harcèlement</h3>
                            <p>La plateforme lutte contre le cyber-harcèlement, vos données sont sécurisées et seuls vos abonnés peuvent vous contacter.</p>
                            <div className="line-block"></div>
                            <a href="##" className="more-link">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service