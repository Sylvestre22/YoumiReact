import React, {FunctionComponent as FC} from 'react'
import MockupPhoneSingle from '../images/moc-1-1.png'
import RoundedCircle from '../images/round-circle-1-2.png'

const Feature:FC = ():JSX.Element =>{
    return(
        <section className="feature-style-two" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-block">
                            <img src={MockupPhoneSingle} alt="Mockup" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content-block">
                            <div className="block-title ">
                                <img src={RoundedCircle} alt="Rounded Circle" className="wow rotateIn" data-wow-duration="1000ms" />
                                <h2>Rejoignez YOUMI et produisez du contenu <br/> qui vous ressemble <br/> en totale indépendance.</h2>
                            </div>
                            <p>Youmi est plus qu’un réseau social, c’est l’application de tous les passionnés et un outil de travail pour ceux qui souhaitent vivre de leur passion.</p>
                            <ul className="feature-lists">
                                <li><i className="fa fa-check"></i> Chattez facilement avec votre communauté </li>
                                <li><i className="fa fa-check"></i> Partagez et trouvez du contenu de qualité</li>
                                <li><i className="fa fa-check"></i> Protégez efficacement votre travail</li>
                            </ul>
                            <a href="#" className="feature-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature