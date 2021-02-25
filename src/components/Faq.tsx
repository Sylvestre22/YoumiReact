import React, {FunctionComponent as FC, useState} from 'react'
import RoundedCirlce from '../images/round-circle-1-7.png'

interface IFaq{
    question: string,
    answer: string,
    status?: boolean
}

interface IFaqs extends Array<IFaq>{}

const Faq:FC = ():JSX.Element =>{
    const [faq, setFaq] = useState<IFaqs>([
        {question: 'How to connect with the support to improve app experience', answer: 'There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisquealiquam.'},
        {question: 'How to connect with the support to improve app experience', answer: 'There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisquealiquam.'}
    ])

    const faqBlock = faq.map((f, index) => {
        return(
        <div key={index} className={"accrodion" + (f.status === true ? ' active' : '')}>
                        <div className="accrodion-title" onClick={() => {
                            faq.filter(f => f.status = false)
                            const newFaq = [...faq],
                            newStatus = {...newFaq[index]}
                            newStatus.status === true ? newStatus.status = false : newStatus.status = true
                            newFaq[index] = newStatus
                            setFaq(newFaq)
                        }}>
                            <h4>{f.question}</h4>
                        </div>
                        <div className="accrodion-content">
                        <div className="inner">
                            {f.status ? <p>{f.answer}</p> : ''}
                </div>
            </div>
        </div>
        )
    })

    return(
        <section className="faq-style-one">
            <div className="container">
                <div className="block-title text-center">
                    <img src={RoundedCirlce} alt="circle" className="wow rotateIn" data-wow-duration="1000ms" />
                    <h2>Want to ask something <br/> from us?</h2>
                </div>
                <div className="accrodion-grp" data-grp-name="faq-accrodion">
                    {faqBlock}
                </div>
            </div>
        </section>
    )
}

export default Faq