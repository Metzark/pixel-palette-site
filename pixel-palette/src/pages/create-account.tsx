import style from '../styles/CreateAccount.module.css';
import Head from 'next/head';
import Nav from '../components/Nav';

const CreateAccount = () => {
    return <>
    <Head>
      <meta name="description" content="Fun game for lazy artists" />
      <title>Pixel Palette | Create Account</title>
    </Head>
    <main className={style.main}>
        <Nav />
        <h2 className={style.title}>Create Account</h2>
        <div className={style.container}>
            <div className={style.inputContainer}>
                <label className={style.label}>Username</label>
                <input className={style.input} id='username'/>
            </div>
            <div className={style.inputContainer}>
                <label className={style.label}>Password</label>
                <input className={style.input} type='password' id='password'/>
            </div>
            <div className={style.btnContainer}>
                <button className={style.btn}>Create</button>
            </div>
        </div>
    </main>
  </>
}

export default CreateAccount;