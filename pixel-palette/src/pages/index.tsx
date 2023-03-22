import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Fun game for lazy artists" />
        <title>Pixel Palette</title>
      </Head>
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
