'use client'
import { useContext } from "react";
import React, { Dispatch, SetStateAction } from "react";

export interface dataProps {
  category: string;
  description: string;
  id: number | string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const DataContext = React.createContext<{

    data: dataProps[],
    addToCart: (products: dataProps) => void,
    addCart: dataProps[],
    setAddCart: Dispatch<SetStateAction<dataProps[]>>,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,

}>({

    data: [],
    addToCart: () => {},
    addCart: [],
    setAddCart: () => {},
    isOpen: false,
    setIsOpen: () => {},
})

export const DataContextProvider = DataContext.Provider

export default function  useData() {

    return useContext(DataContext);

}
