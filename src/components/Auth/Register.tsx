import React, {FunctionComponent as FC} from 'react';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';

const Register:FC = ():JSX.Element =>{
    return(
        <section className="register-wrapper">
            <h2>Inscription</h2>
            <form className="d-flex flex-column my-5">
                <label>
                    <p>Name</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Username</p>
                    <input type="text"/>
                    </label>
                <label>
                    <p>Password</p>
                    <input type="password"/>
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <p>Vous êtes déjà membre ?</p>
            <HashLink to="/login#">Connexion</HashLink>
        </section>
    )
}

export default Register