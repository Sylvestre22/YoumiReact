import React, { FormEvent, FunctionComponent as FC, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

interface IRegister {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const Register: FC = (): JSX.Element => {
    const [data, setData] = useState<IRegister>({ name: '', email: '', password: '', confirmPassword: '' })

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(data)
    }

    const change = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setData({ ...data, [name]: value })
    }

    return (
        <section className="register-wrapper">
            <h2 className="h2-title mt-0">Inscription</h2>
            <form onSubmit={submit} className="authForm container">
                <label>
                    <p>Name *</p>
                    <input name="name" onChange={change} type="text" />
                </label>
                <label>
                    <p>Email *</p>
                    <input name="email" onChange={change} value={data.email} type="text" />
                </label>
                <label>
                    <p>Password *</p>
                    <input name="password" onChange={change} value={data.password} type="password" />
                </label>
                <label>
                    <p>Confirm Password *</p>
                    <input name="confirmPassword" onChange={change} value={data.confirmPassword} type="password" />
                </label>
                <div>
                    <button type="submit">Inscription</button>
                </div>
            </form>
            <p>Vous êtes déjà membre ?</p>
            <HashLink to="/login#">Connexion</HashLink>
        </section>
    )
}

export default Register