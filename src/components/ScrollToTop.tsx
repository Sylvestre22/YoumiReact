import React, {FunctionComponent as FC, useEffect, useState} from 'react'

const ScrollToTop:FC = ():JSX.Element => {
    const [isShow, setIsShow] = useState(true)

    useEffect(() => window.addEventListener('scroll', ()=>{
        window.scrollY < 100 ? setIsShow(false) : setIsShow(true)
    }))

    return(
      <a href="#" style={isShow ? {opacity: 1} : {opacity: 0}} className={"scroll-to-target scroll-to-top d-inline"}><i className="fa fa-long-arrow-up"></i></a>
    )
}

export default ScrollToTop