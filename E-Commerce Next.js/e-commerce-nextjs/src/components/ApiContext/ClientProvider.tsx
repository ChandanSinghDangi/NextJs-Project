"use client";
import { DataContextProvider } from "./ApiContext";
import { useEffect, useState } from "react";

interface dataProps {

  category: string
  description: string
  id: number | string
  image: string 
  price: number
  rating: { rate: number, count: number }
  title: string

}

export default function ClientProvider({ children }: {
  children: React.ReactNode;
  // data: dataProps[];
}) {

  const [addCart, setAddCart] = useState<dataProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<dataProps[]>([])

  function addToCart( products: dataProps ) {
    setAddCart(prev => [...prev,products]);
    console.log(addCart);

  }

  useEffect(() => {

    (async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const json = await res.json();
      setData(json)

    })();

  },[])

  return (

    <DataContextProvider value={{ data, addToCart, addCart, setAddCart, isOpen, setIsOpen }}>
      {children}
    </DataContextProvider>

  );
}

