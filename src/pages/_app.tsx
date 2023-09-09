import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { globalStyles } from "@/styles/globals";
import { ProductProvider } from "@/contexts/ProductContext";

const roboto = Roboto({
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </ProductProvider>
  );
}
