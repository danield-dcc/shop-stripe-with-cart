import { useProductContext } from "@/contexts/ProductContext";
import { useMemo } from "react";

export function useSummary() {
  const { products } = useProductContext();

  const summary = useMemo(() => {
    return products.reduce(
      (acc, values) => {
        let productWithoutMoneySign = values.price
          .replace(/R\$/g, "")
          .replace(/,/g, "")
          .trim();
        acc.total += Number(productWithoutMoneySign);
  
        return acc;
      },
      {
        total: 0,
      }
    );
  },[products])


  return summary.total/100;
}
