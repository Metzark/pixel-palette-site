import style from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.section}>
      <h1 className={style.title}>A fun game for the lazy artist</h1>
      <p className={style.description}>
        Create simple "color by number" puzzles and let your friends fill them
        in.
      </p>
      <div className={style.options}>
        <button className={style.button}>Download</button>
        <button className={style.button}>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
