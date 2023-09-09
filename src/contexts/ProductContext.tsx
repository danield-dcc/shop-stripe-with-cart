import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  defaultPriceId: string;
}

interface ProductContextType {
  products: Product[];
  setSelectProduct: Dispatch<SetStateAction<Product[]>>;
  handleSelectProduct: (data: Product) => void;
}

interface ProductProviderProps {
  children: ReactNode;
}
const ProductContext = createContext({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setSelectProduct] = useState<Product[]>([]);

function handleSelectProduct(data: Product) {
    setSelectProduct(state => [data, ...state]) 
  }


  return (
    <ProductContext.Provider
      value={{ products, setSelectProduct, handleSelectProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
