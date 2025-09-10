'use client'
import React from 'react'
import useData from '../ApiContext/ApiContext';
import Image from 'next/image';
import Link from 'next/link';

interface dataProps {

  category: string
  description: string
  id: number | string;
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string

}

function SideBar() {

    const {isOpen, setIsOpen, addCart,setAddCart } = useData();

    const deleteItem = (id: number | string ) => {

        setAddCart(addCart.filter((item) => item.id !== id))
        console.log("DeleteItem Working");

    }

    const finalPrice = addCart.reduce((accumulator, currentValue) => {

        return parseFloat((accumulator + currentValue.price).toFixed(3));

    },0)

  return (

    <>

        <div className={isOpen ? 'fixed h-[100vh] w-[100%] bg-black bg-opacity-10 top-0 right-0 z-10' : ''}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={() => setIsOpen(false)}>

            <div className={isOpen ? 'absolute h-[100vh] w-[65%] sm:w-[48%] md:w-[40%] lg:w-[30%] xl:w-[25%] bg-gray-300 top-0 right-0 overflow-y-auto p-2 ' : 'hidden'} onClick={(e) => e.stopPropagation()}>
                <div className={isOpen ? 'flex justify-end p-2 px-5 cursor-pointer mb-2 ' : 'hidden'} onClick={() => setIsOpen(false)}>✖</div>

                <div className='border-2 border-gray-400 rounded-md py-5 px-2 flex flex-col gap-y-3'>

                    {addCart.map(( product: dataProps ) => 
                        
                        <div key={product.id} className='border-gray-400 border-2 rounded-md p-3 flex gap-x-4'>

                            <div className=''>

                                <Image 
                                    className='w-40 h-auto object-fit' 
                                    src={product.image} 
                                    alt={product.title} 
                                    width={150}
                                    height={150}
                                    priority
                                />

                            </div>

                            <div className='flex flex-col gap-y-3'>

                                <div>

                                    <span>Name: {product.title}</span>

                                </div>

                                <div>

                                    <span>Price: ${product.price}</span>

                                </div>

                                <div className='flex justify-center'>

                                    <button className='border-red-500 border p-1 px-2 rounded-md
                                    text-red-500 cursor-pointer' onClick={() => deleteItem(product.id)}>Delete</button>

                                </div>


                            </div>

                        </div>

                    )}

                    <div className='font-semibold text-xl flex flex-col gap-3'>
                        {finalPrice > 0 ? (
                            <>
                                <div className="text-gray-900 font-bold text-lg">
                                    Total Price: ${finalPrice}
                                </div>
                                
                                <Link href={'/purchasing'}>
                                    <button
                                        className="px-2 py-3 w-1/3 
                                        bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                                        font-semibold rounded-lg 
                                        shadow-md hover:from-blue-600 hover:to-blue-700 
                                        hover:shadow-lg active:scale-95 
                                        transition transform duration-150 
                                        focus:outline-none cursor-pointer text-xs 
                                        md:text-sm lg:text-lg"
                                        >
                                        Continue
                                    </button>
                                </Link>
                            </>
                        ) : (
                        <span className="text-gray-500">
                            Your Cart is Empty, Bro! Are You Broke? If not, go buy something, dawg!
                        </span>
                        )}
                    </div>

                </div>

            </div>

        </div>
    </>
  )

}

export default SideBar

