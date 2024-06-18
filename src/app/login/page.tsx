'use client';

import styles from "./page.module.scss";
import axios from 'axios';
import {setCookie} from 'cookies-next';
import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation';


const handleClick = async (setToken, setLoginError, username, password) => {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    const loginRes = await axios.post(
        "http://localhost:8000/users/token",
        formData,
    ).catch(
        () => {
        }
    );

    if (loginRes !== undefined) {
        setCookie('tokens', loginRes.data?.access_token, {
            sameSite: 'strict',
            secure: true,
            // httpOnly: true,
        });

        setToken(loginRes.data?.access_token);
    } else {
        setLoginError(true);
    }
}

export default function Login() {
    const router = useRouter();
    const [token, setToken] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);

    useEffect(() => {
        if (token !== undefined) {
            router.push("/");
        }
    }, [token]);

    return (
        <main className={styles.login}>
            <div className={styles.form_login}>
                <h1>Welcome!</h1>
                <h2>Sig in to your account</h2>

                {loginError && <p>Your account could not be found</p>}

                <label htmlFor="username">
                    Username
                    <input type="text" name="username" id="username" onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" id="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </label>
                <input type="button" value="Login"
                       onClick={() => handleClick(setToken, setLoginError, username, password,)}/>
            </div>
        </main>
    );
}
