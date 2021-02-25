import React, {FunctionComponent as FC, useState} from 'react'
import RoundedCircle from '../images/round-circle-1-4.png'

const Pricing:FC = ():JSX.Element =>{
    const [period, setPeriod] = useState<string>('monthly')

    const changePeriod = (e: React.MouseEvent<HTMLAnchorElement>):void => {
        switch(e.currentTarget.innerText){
            case 'Monthly':
                setPeriod('monthly')
                break;
            case 'Yearly':
                setPeriod('yearly')
                break;
        }
    }

    return(
        <section className="pricing-style-one" id="pricing">
            <div className="container">
                <div className="block-title text-center">
                    <img src={RoundedCircle} alt="rounded circle" className="wow rotateIn" data-wow-duration="1000ms" />
                    <h2>Choisissez librement les tarifs de vos abonnements.</h2>
                </div>
                <ul className="nav nav-tabs tab-title" role="tablist">
                    <li className="nav-item">
                        <a className={"nav-link " + (period == 'monthly' ? 'active' : '')} href="#monthly" role="tab" data-toggle="tab" onClick={changePeriod}>Monthly</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link " + (period == 'yearly' ? 'active' : '')} href="#yearly" role="tab" data-toggle="tab" onClick={changePeriod}>Yearly</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className={"tab-pane animated fadeInUp " + (period == 'monthly' ? 'active' : '')}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-pricing-one basic-pack">
                                    <div className="top-block">
                                        <span className="price">$20.00</span>
                                        <span className="pack-name">basic pack</span>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Extra features</li>
                                        <li>Lifetime free support</li>
                                        <li>Upgrate options</li>
                                        <li>Full access</li>
                                    </ul>
                                    <div className="bottom-block">
                                        <a href="#" className="price-btn">Purchase</a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-pricing-one pro-pack">
                                    <div className="top-block">
                                        <span className="price ">$30.00</span>
                                        <span className="pack-name">Professional pack</span>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Extra features</li>
                                        <li>Lifetime free support</li>
                                        <li>Upgrate options</li>
                                        <li>Full access</li>
                                    </ul>
                                    <div className="bottom-block">
                                        <a href="#" className="price-btn">Purchase</a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-pricing-one biz-pack">
                                    <div className="top-block">
                                        <span className="price">$40.00</span>
                                        <span className="pack-name">Business pack</span>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Extra features</li>
                                        <li>Lifetime free support</li>
                                        <li>Upgrate options</li>
                                        <li>Full access</li>
                                    </ul>
                                    <div className="bottom-block">
                                        <a href="#" className="price-btn">Purchase</a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" className={"tab-pane animated fadeInUp " + (period == 'yearly' ? 'active' : '')}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-pricing-one basic-pack">
                                    <div className="top-block">
                                        <span className="price">$75.00</span>
                                        <span className="pack-name">basic pack</span>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Extra features</li>
                                        <li>Lifetime free support</li>
                                        <li>Upgrate options</li>
                                        <li>Full access</li>
                                    </ul>
                                    <div className="bottom-block">
                                        <a href="#" className="price-btn">Purchase</a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-pricing-one pro-pack">
                                    <div className="top-block">
                                        <span className="price ">$100.00</span>
                                        <span className="pack-name">Professional pack</span>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Extra features</li>
                                        <li>Lifetime free support</li>
                                        <li>Upgrate options</li>
                                        <li>Full access</li>
                                    </ul>
                                    <div className="bottom-block">
                                        <a href="#" className="price-btn">Purchase</a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-pricing-one biz-pack">
                                    <div className="top-block">
                                        <span className="price">$200.00</span>
                                        <span className="pack-name">Business pack</span>
                                        <div className="line"></div>
                                    </div>
                                    <ul className="feature-lists">
                                        <li>Extra features</li>
                                        <li>Lifetime free support</li>
                                        <li>Upgrate options</li>
                                        <li>Full access</li>
                                    </ul>
                                    <div className="bottom-block">
                                        <a href="#" className="price-btn">Purchase</a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing