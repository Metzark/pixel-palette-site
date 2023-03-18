import style from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.section}>
      <h1 className={style.title}>Pixel Palette</h1>
      <p className={style.description}>A fun game for the lazy artist</p>
      <div className={style.options}>
        <button className={style.button}>Download</button>
        <button className={style.button}>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
