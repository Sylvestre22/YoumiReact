import React, {FunctionComponent as FC} from 'react';

const Stat:FC = ():JSX.Element => {
    return(
        <section className="fun-fact-style-one">
            <div className="container">
                <h3 className="title-line">Numbers Speaks Everything</h3>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-funfact-one text-center">
                            <h3 className="counter">4789</h3>
                            <p>Downloads</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-funfact-one text-center">
                            <h3 className="counter">6400</h3>
                            <p>Likes</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-funfact-one text-center">
                            <h3 className="counter">900</h3>
                            <p>5 Star Rating</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-funfact-one text-center">
                            <h3 className="counter">173</h3>
                            <p>Pays</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stat