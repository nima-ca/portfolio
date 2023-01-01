import { Roboto_Mono } from "@next/font/google";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../src/components/layout/Layout";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
