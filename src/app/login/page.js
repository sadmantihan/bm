"use client";
import Image from 'next/image';
import {useState} from "react";
export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginProgress] = useState(false);
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        const {ok} = await fetch ('api/login', {
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application.json'},
            method: 'POST',
        } );
        if (ok) {

        } else {

        }
    }
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Login for Shareholder
                </h1>

                <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="Email" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)} />
        <input type="Password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
        <button type="submit" className="mb-4">Login</button>
        <button disabled={false} className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with Google
        </button>
                </form>
        </section>
    );
}