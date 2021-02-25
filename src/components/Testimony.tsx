import React, {FunctionComponent as FC, useState, useEffect} from 'react';
import WorldMap from '../images/map-1-1.png'
import RoundedCircle from '../images/round-circle-1-6.png'

interface ITestimony {
    text: string,
    author: string
}

interface ITestimonys extends Array<ITestimony>{}

const Testimony:FC = ():JSX.Element=>{
    const [testimony, setTestimony] = useState<ITestimonys>([
        {text: 'Avec la plateforme YOUMI, je peux faire des vidéos et photos dédicacées pour mes abonnés très facilement et rapidement peu importe l’endroit où je me trouve.', author: 'Delila Rayam'},
        {text: 'Je donne des cours de danse hip-hop en ligne, depuis mon inscription sur YOUMI en tant que professeur, j’ai vu mon nombr /e d’élèves augmenter de manière significative et par la même occasion, le montant de mes revenus.', author: 'Terrilyn Werme'},
        {text: 'A cause de la crise sanitaire, mon activité de coach sportif a ralenti mais désormais grâce à YOUMI et la diffusion de mes cours personnalisés en ligne, je génère un nouveau complément de revenus.', author: 'Kyle Demayo'}
    ])

    const [current, setCurrent] = useState(0),
    length = testimony.length

    const slider = testimony.map((slide, index) => 
        <li key={index} className={"slide-item" + (index === current ? ' slide active' : ' slide')}>
            <div className="single-testi-one">
                <p>{slide.text}</p>
                <h3>{slide.author}</h3>
            </div>
        </li>
    )

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1),
    prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

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
                                    <a href="#" className="pager-item active" data-slide-index="0"><img src="images/testi-1-1.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="1"><img src="images/testi-1-2.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="2"><img src="images/testi-1-3.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="3"><img src="images/testi-1-4.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="4"><img src="images/testi-1-5.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="5"><img src="images/testi-1-6.jpg" alt="Awesome Image" /></a>
                                </div>
                                <div className="testimonials-slider-pager-two">
                                    <a href="#" className="pager-item active" data-slide-index="0"><img src="images/testi-1-1.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="1"><img src="images/testi-1-2.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="2"><img src="images/testi-1-3.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="3"><img src="images/testi-1-4.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="4"><img src="images/testi-1-5.jpg" alt="Awesome Image" /></a>
                                    <a href="#" className="pager-item" data-slide-index="5"><img src="images/testi-1-6.jpg" alt="Awesome Image" /></a>
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
                                    {slider}
                                </ul>
                                <button onClick={prevSlide}>prev</button><button onClick={nextSlide}>next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimony