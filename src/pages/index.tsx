import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { HomeContainer, Product } from "@/styles/pages/home";
import { priceFormatter } from "@/utils/formatter";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import ProductsTemplate from "@/template/ProductsTemplate";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    description?: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      slides: {
        perView: 3,
        spacing: 48,
      },
    },
    [
      //  add plugins here
    ]
  );

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <ProductsTemplate>
        <HomeContainer ref={sliderRef} className="keen-slider">
          {products.map((product) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Product className="keen-slider__slide">
                  <Image
                    src={product.imageUrl}
                    width={520}
                    height={480}
                    alt=""
                  />
                  <footer>
                    <p>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </p>

                    <div>
                      <Handbag size={32} />
                    </div>
                  </footer>
                </Product>
              </Link>
            );
          })}
        </HomeContainer>
      </ProductsTemplate>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price:
        price.unit_amount && priceFormatter.format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
