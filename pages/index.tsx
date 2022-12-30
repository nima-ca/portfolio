import Head from "next/head";
import Image from "next/image";
import { Roboto_Mono } from "@next/font/google";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nima Nekouei Nia</title>
        <meta
          name="description"
          content="This is a Portfolio website created by nima himself!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>hi im nima</p>
    </>
  );
}
