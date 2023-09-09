import { useProductContext } from "@/contexts/ProductContext";
import {
  BagButton,
  Container,
  DrawerContainer,
  DrawerImage,
  DrawerProduct,
  FooterItems,
  FooterItemsValue,
  Header,
} from "@/styles/pages/template";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import { ReactNode, useState } from "react";
import logoImg from "@/assets/Logo.svg";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSummary } from "@/hooks/useSummary";
import { priceFormatter } from "@/utils/formatter";
import axios from "axios";
import Link from "next/link";

interface ProductsTemplateProps {
  children: ReactNode;
  hideBag?: boolean;
}

export default function ProductsTemplate({
  children,
  hideBag = false,
}: ProductsTemplateProps) {
  const { products } = useProductContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);

  const total = useSummary();

  async function handleBuyProduct() {
    console.log(products);

    const productsDefaultIds = products.map(
      (product) => product.defaultPriceId
    );
    console.log(productsDefaultIds);
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: productsDefaultIds,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      //Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <Container>
      <Header headerLogoImg={hideBag ? "center" : "space"}>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        {!hideBag && (
          <BagButton onClick={toggleDrawer}>
            <Handbag size={24} />
            {products.length > 0 && <div>{products.length}</div>}
          </BagButton>
        )}
      </Header>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{ backgroundColor: "#202024", width: "30rem" }}
      >
        <DrawerContainer>
          <h1>Sacola de compras</h1>
          {products.map((product) => {
            return (
              <DrawerProduct key={product.id}>
                <DrawerImage>
                  <Image src={product.imageUrl} alt="" width={96} height={96} />
                </DrawerImage>
                <div>
                  <span>{product.name}</span>
                  <p>{product.price}</p>
                  <button>Remover</button>
                </div>
              </DrawerProduct>
            );
          })}

          <FooterItems>
            <div>
              <span>Quantidade</span>
              <span>
                {products.length} {products.length === 1 ? "item" : "items"}
              </span>
            </div>
            <FooterItemsValue>
              <p>Valor total</p>
              <span>{priceFormatter.format(total)}</span>
            </FooterItemsValue>

            <button
              disabled={isCreatingCheckoutSession || products.length < 1}
              onClick={handleBuyProduct}
            >
              Finalizar compra
            </button>
          </FooterItems>
        </DrawerContainer>
      </Drawer>
      {children}
    </Container>
  );
}
