import style from '../styles/About.module.css';
import Head from 'next/head';
import Nav from '../components/Nav';

const About = () => {
    return <>
    <Head>
      <meta name="description" content="Fun game for lazy artists" />
      <title>Pixel Palette</title>
    </Head>
    <main className={style.main}>
      <Nav />
      <h2 className={style.title}>About</h2>
      <div className={style.grid}>
        <div className={style.row}>
            <h3 className={style.subtitle}>Create</h3>
            <p className={style.text}>Create simple, 20x20 pixel images with up to 10 colors</p>
        </div>
        <div className={style.row}>
            <h3 className={style.subtitle}>Play</h3>
            <p className={style.text}>Fill in pixel art images by matching corresponding colors</p>
        </div>
        <div className={style.row}>
            <h3 className={style.subtitle}>Share</h3>
            <p className={style.text}>Upload your art creations and view other creations from around the world</p>
        </div>
      </div>
    </main>
  </>
}

export default About;