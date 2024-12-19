import type { AppProps } from "next/app";
import "@/styles/plugins/richjava_about-shad-cn/globals.css";
import "@/styles/plugins/richjava_social-proof-shad-cn/globals.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}