import { stripe } from "@/lib/stripe";
import {
  FooterItems,
  ImageContainer,
  ImageContainerManyProducts,
  SuccessContainerManyProducts,
  SuccessContainerManyProductsContent,
  SuccessContainerSingleProduct,
} from "@/styles/pages/success";
import ProductsTemplate from "@/template/ProductsTemplate";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

//success?session_id=cs_test_b15vhcblNQy3Ip2Dekv0wZkHZKIJEVTSI7oBtq4oeszBNWgYoWC5GQeLkF

export default function Success({ customerName, products }: SuccessProps) {
  const TotalNumberOfProducts = products.length;

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <ProductsTemplate hideBag={true}>
        {TotalNumberOfProducts > 1 ? (
          <SuccessContainerManyProducts>
            <SuccessContainerManyProductsContent>
              {products.map((product, i) => {
                return (
                  <ImageContainerManyProducts key={i}>
                    <Image
                      src={product.imageUrl}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </ImageContainerManyProducts>
                );
              })}
            </SuccessContainerManyProductsContent>
            <FooterItems>
              <h1>Compra Efetuada!</h1>
              <span>
                <p>
                  Uhuul, <strong>{customerName}</strong>, sua compra de{" "}
                  {TotalNumberOfProducts}{" "}
                  {TotalNumberOfProducts > 1 ? " camisetas" : " camiseta"} já{" "}
                </p>
                <p> está a caminho da sua casa.</p>
              </span>
              <Link href="/">Voltar ao catalogo</Link>
            </FooterItems>
          </SuccessContainerManyProducts>
        ) : (
          <SuccessContainerSingleProduct key={products[0].name}>
            <h1>Compra Efetuada!</h1>

            <ImageContainer>
              <Image
                src={products[0].imageUrl}
                width={120}
                height={110}
                alt=""
              />
            </ImageContainer>

            <p>
              Uhuul, <strong>{customerName}</strong>, sua{" "}
              <strong>{products[0].name}</strong> já está a caminho da sua casa.
            </p>

            <Link href="/">Voltar ao catalogo</Link>
          </SuccessContainerSingleProduct>
        )}
      </ProductsTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  //const products = session.line_items?.data[0].price?.product as Stripe.Product;

  const products = session.line_items?.data.map((item: any) => {
    return {
      name: item.price?.product?.name as string,
      imageUrl: item.price?.product?.images[0] as string,
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
