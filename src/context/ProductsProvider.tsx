import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

//const initState: ProductType[] = []
const initState: ProductType[] = [
  {
    sku: "flower02",
    name: "Colored Rose",
    price: 11.99,
  },
  {
    sku: "flower03",
    name: "Pink Dahlia",
    price: 14.99,
  },
  {
    sku: "flower04",
    name: "Premium Sunflower",
    price: 10.12,
  },
  {
    sku: "flower05",
    name: "Best Roses",
    price: 14.33,
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  // useEffect(() => {
  //     const fetchProducts = async (): Promise<ProductType[]> => {
  //         const data = await fetch('http://localhost:3500/products').then(res => {
  //             return res.json()
  //         }).catch(err => {
  //             if (err instanceof Error) console.log(err.message)
  //         })
  //         return data
  //     }

  //     fetchProducts().then(products => setProducts(products))
  // }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
