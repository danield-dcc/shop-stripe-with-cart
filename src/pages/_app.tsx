import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { globalStyles } from "@/styles/globals";
import { Container, Header } from "@/styles/pages/app";
import logoImg from "@/assets/Logo.svg";
import Image from "next/image";


const roboto = Roboto({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "700"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
          <Image src={logoImg} alt="" />
        </Header>
        <Component {...pageProps} />
    </Container>
  );
}