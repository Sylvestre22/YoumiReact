import React, {FunctionComponent as FC, useEffect, useState} from 'react';
import { HashLink } from 'react-router-hash-link';

const ScrollToTop:FC = ():JSX.Element => {
    const [isShow, setIsShow] = useState<boolean>(true)

    useEffect(():void => {
      window.scrollY < 100 ? setIsShow(false) : setIsShow(true)
    }, [])
    useEffect(():void =>
    window.addEventListener('scroll', ()=>{
      window.scrollY < 100 ? setIsShow(false) : setIsShow(true)
    }))

    return(
      <HashLink to="/#banner" style={isShow ? {opacity: 1} : {opacity: 0}} className={"scroll-to-target scroll-to-top d-inline"}><i className="fa fa-long-arrow-up"></i></HashLink>
    )
}

export default ScrollToTop