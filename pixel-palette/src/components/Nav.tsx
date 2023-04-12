import Link from "next/link";
import style from "../styles/Nav.module.css";

const Nav = () => {
  return <nav className={style.nav}>
    <Link className={style.home} href={'/'}><p className={style.title}>Pixel <span className={style.titleAlt}>Palette</span></p></Link>
    <div className={style.btnsDiv}>
      <button title='No download available' className={style.button}>Download</button>
      <Link className={style.button} href={'/about'}>About</Link>
      <Link className={style.createAccount} href={'/create-account'}>Create Account</Link>
    </div>
  </nav>;
};

export default Nav;