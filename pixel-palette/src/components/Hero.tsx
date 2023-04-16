import Link from "next/link";
import style from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.section}>
      <h1 className={style.title}>A fun game for the lazy artist</h1>
      <p className={style.description}>
        Create simple &quot;color by number&quot; puzzles and let your friends fill them
        in.
      </p>
      <div className={style.options}>
        <button title={"No download available"} className={style.button}>Download</button>
        <Link className={style.button} href={"/about"}>Learn More</Link>
      </div>
    </div>
  );
};

export default Hero;
