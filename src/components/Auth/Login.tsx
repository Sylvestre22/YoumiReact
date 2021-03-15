import React, {FormEvent, FunctionComponent as FC, useState} from 'react';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';

interface IError {
    status: boolean,
    text?: string[]
}

const Login:FC = ():JSX.Element =>{
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState<IError>({status: false})
    
    const sendData = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        axios({
            method: 'POST',
            url: '',
            data: {
                username: username,
                password: password
            }
        }).then(response =>{
            console.log(response)
        }).catch(e => setError({status: true, text: ["a"]}))
    }

    return(
        <section className="login-wrapper" id="login">
            <h2 className="h2-title">Connexion</h2>
            <form className="authForm container" onSubmit={sendData}>
                { error.status && 
                    error.text?.map((e, index) =>
                        <p className="authForm-error" key={index}>{e}</p>
                )
                }
                <label>
                    <p>Username *</p>
                    <input type="text" onChange={e => setUserName(e.currentTarget.value)}/>
                    </label>
                <label>
                    <p>Password *</p>
                    <input type="password" onChange={e => setPassword(e.currentTarget.value)}/>
                </label>
                <div>
                    <button type="submit">Connexion</button>
                </div>
            </form>
            <p>Vous n'êtes pas encore inscrit ?</p>
            <HashLink to="/register#">Inscription</HashLink>
        </section>
    )
}

export default Login