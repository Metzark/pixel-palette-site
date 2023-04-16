import style from '../styles/CreateAccount.module.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import Load from '../components/Load';
import { useEffect, useState } from 'react';

const CreateAccount = () => {

    // usernametaken, shortpassword, shortusername, loading, created, are possible states
    const [validity , setValidity ] = useState('none');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setUsernameHelp = (e: any) =>{
        setUsername(e.target.value);
        setValidity('none');
    }

    const setPasswordHelp = (e: any) =>{
        setPassword(e.target.value);
        setValidity('none');
    }

    const handleCreateUser = async () =>{
        if(username.length === 0 || password.length === 0) return;

        setValidity('loading');

        if(username.length < 4) {
            setValidity('shortusername');
            return;
        }

        if(password.length < 6) {
            setValidity('shortpassword');
            return;
        }

        const response = await fetch("/api/users", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        response.json().then(result =>{
            const message = result["message"];
            if(message === 'Username already exists') setValidity('usernametaken');
            if(message === 'Account created successfully') setValidity('created');
        })
    }

    return <>
    <Head>
      <meta name="description" content="Fun game for lazy artists" />
      <title>Pixel Palette | Create Account</title>
    </Head>
    <main className={style.main}>
        <Nav />
        <h2 className={style.title}>Create Account</h2>
        <div className={style.container}>
            {validity !== 'loading' ?
                validity !== 'created' ?
                    <>
                        <div className={style.inputContainer}>
                            <label className={style.label}>Username</label>
                            <input className={style.input} id='username' onChange={setUsernameHelp} value={username}/>
                            {validity === 'usernametaken' ? <p className={style.createErr}>Username is taken</p> : ''}
                            {validity === 'shortusername' ? <p className={style.createErr}>Username is too short</p> : ''}
                        </div>
                        <div className={style.inputContainer}>
                            <label className={style.label}>Password</label>
                            <input className={style.input} type='password' id='password' onChange={setPasswordHelp} value={password}/>
                            {validity === 'shortpassword' ? <p className={style.createErr}>Password is too short</p> : ''}
                        </div>
                        <div className={style.btnContainer}>
                            <button className={style.btn} onClick={handleCreateUser}>Create</button>
                        </div>
                    </>
                :   <>
                        <p className={style.success}>Account created successfully!</p>
                        <div className={style.downloadContainer}>
                            <p className={style.downloadMsg}>Download and log in to get started.</p>
                            <button className={style.btn}>Download</button>
                        </div>

                    </>   
             : <Load/>
            }
            
        </div>
    </main>
  </>
}

export default CreateAccount;