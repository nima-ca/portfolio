import { Roboto_Mono } from "@next/font/google";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Typography from "../src/Typography";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Typography fontFamily={robotoMono.style.fontFamily} fontSize="1.6rem" />
      <Component {...pageProps} />
    </>
  );
}
