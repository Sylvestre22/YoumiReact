import React, {FunctionComponent as FC, useState} from 'react';
import WorldMap from '../images/map-1-1.png'
import RoundedCircle from '../images/round-circle-1-6.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

interface ITestimony {
    text: string,
    author: string
}

interface ITestimonys extends Array<ITestimony>{}

const Testimony:FC = ():JSX.Element=>{
    const [testimony] = useState<ITestimonys>([
        {text: 'Avec la plateforme YOUMI, je peux faire des vidéos et photos dédicacées pour mes abonnés très facilement et rapidement peu importe l’endroit où je me trouve.', author: 'Delila Rayam'},
        {text: 'Je donne des cours de danse hip-hop en ligne, depuis mon inscription sur YOUMI en tant que professeur, j’ai vu mon nombr /e d’élèves augmenter de manière significative et par la même occasion, le montant de mes revenus.', author: 'Terrilyn Werme'},
        {text: 'A cause de la crise sanitaire, mon activité de coach sportif a ralenti mais désormais grâce à YOUMI et la diffusion de mes cours personnalisés en ligne, je génère un nouveau complément de revenus.', author: 'Kyle Demayo'}
    ])

    const slider = testimony.map((slide, index) => 
        <div key={index} className="slide-item">
            <div className="single-testi-one">
                <p>{slide.text}</p>
                <h3>{slide.author}</h3>
            </div>
        </div>
    )

    return(
        <section className="testimonials-style-one">
            <img src={WorldMap} alt="WorldMap" className="map-img" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex">
                        <div className="my-auto">
                            <img src="" alt="tesi1" className="testi-img" />
                            <div id="testimonials-slider-pager">
                                <div className="testimonials-slider-pager-one">
                                    <a href="/" className="pager-item active" data-slide-index="0"><img src="images/testi-1-1.jpg" alt="testi-1-1" /></a>
                                    <a href="/" className="pager-item" data-slide-index="1"><img src="images/testi-1-2.jpg" alt="testi-1-2" /></a>
                                    <a href="/" className="pager-item" data-slide-index="2"><img src="images/testi-1-3.jpg" alt="testi-1-3" /></a>
                                    <a href="/" className="pager-item" data-slide-index="3"><img src="images/testi-1-4.jpg" alt="testi-1-4" /></a>
                                    <a href="/" className="pager-item" data-slide-index="4"><img src="images/testi-1-5.jpg" alt="testi-1-5" /></a>
                                    <a href="/" className="pager-item" data-slide-index="5"><img src="images/testi-1-6.jpg" alt="testi-1-6" /></a>
                                </div>
                                <div className="testimonials-slider-pager-two">
                                    <a href="/" className="pager-item active" data-slide-index="0"><img src="images/testi-1-1.jpg" alt="testi-1-1(2)" /></a>
                                    <a href="/" className="pager-item" data-slide-index="1"><img src="images/testi-1-2.jpg" alt="testi-1-2(2)" /></a>
                                    <a href="/" className="pager-item" data-slide-index="2"><img src="images/testi-1-3.jpg" alt="testi-1-3(2)" /></a>
                                    <a href="/" className="pager-item" data-slide-index="3"><img src="images/testi-1-4.jpg" alt="testi-1-4(2)" /></a>
                                    <a href="/" className="pager-item" data-slide-index="4"><img src="images/testi-1-5.jpg" alt="testi-1-5(2)" /></a>
                                    <a href="/" className="pager-item" data-slide-index="5"><img src="images/testi-1-6.jpg" alt="testi-1-6(2)" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="block-title ">
                            <img src={RoundedCircle} alt="Rounded Circle" className="wow rotateIn" data-wow-duration="1000ms" />
                            <h2>Une communauté et des créateurs de contenus dans le monde entier.</h2>
                        </div>
                        <div className="bx-wrapper mw-100">
                            <div className="bx-wiewport w-100">
                                <ul className="slider testimonials-slider">
                                    <OwlCarousel loop nav autoplay autoplayHoverPause smartSpeed={700} autoplayTimeout={5000} items={1} controls navText={['<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>']}>
                                        {slider}
                                    </OwlCarousel>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimony