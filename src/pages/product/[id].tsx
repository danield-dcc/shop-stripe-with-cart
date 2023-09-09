import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";

import { priceFormatter } from "@/utils/formatter";

import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import { useProductContext } from "@/contexts/ProductContext";
import ProductsTemplate from "@/template/ProductsTemplate";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);
  const { isFallback } = useRouter();
  const { handleSelectProduct, products } = useProductContext();

  function handleSelectBuyProduct() {
    handleSelectProduct(product);
  }



  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductsTemplate>
        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt="" />
          </ImageContainer>
          <ProductDetails>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <p>{product.description}</p>

            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleSelectBuyProduct}
            >
              Colocar na sacola
            </button>
          </ProductDetails>
        </ProductContainer>
      </ProductsTemplate>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_OZt6tf4OsLnmoX" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (params) {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    });

    const price = product.default_price as Stripe.Price;

    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          description: product.description,
          price:
            price.unit_amount && priceFormatter.format(price.unit_amount / 100),
          defaultPriceId: price.id,
        },
      },
      revalidate: 60 * 60 * 1, // 1 hour
    };
  }

  return {
    props: {},
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
