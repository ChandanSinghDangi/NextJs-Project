'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import useData from '@/components/ApiContext/ApiContext';
import { nanoid } from 'nanoid';

interface dataProps {

  category: string
  description: string
  id: number | string
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string
}

function MansCloths() {

  const { data, addToCart } = useData();
  
    const addBtn = (products: dataProps) => {
    
     addToCart({...products, id:nanoid()});
    
    }

  return (

    <>
    
        <ul className='flex gap-7 text-xs justify-center p-2 px-8 font-semibold'>
                    
            <li className=''> <Link href='/' >All</Link> </li>

            <li className=''> <Link href='/electronics' >ELECTRONICS</Link> </li>

            <li className=''> <Link href='/jewellery' >JEWELLERY</Link> </li>

            <li className="border-b border-b-red-600"><Link href="/manscloths" >{`MEN'S CLOTH`}</Link> </li>

            <li className=''> <Link href='/womenscloths' >{`WOMEN'S CLOTH`}</Link> </li>
                    
        </ul>
  
      <div className='p-1.5'>

        <div  className='grid grid-cols-2 sm:grid-cols-3 border-gray-300 border-1
         rounded-md place-items-center p-2 gap-2 mt-7 md:gap-y-5 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          {data.filter((products: dataProps) => products.category === "men's clothing").map((products: dataProps) => 
                    
            <div key={products.id} className=' text-black'>

                <div className='flex flex-col border-gray-300 border-1 rounded-md items-center justify-between p-2 w-40 h-80 md:w-60'>
                    
                    <Image 
                        className='w-25 h-35 object-contain' 
                        src={products.image} 
                        alt="image" 
                        width={150} height={150}
                        priority
                    />

                    <div className='text-xs p-1 flex flex-col gap-y-2'>

                        <div className='flex justify-end'>
                            
                        <button onClick={() => addBtn(products)} className='group border-red-400 border rounded-md cursor-pointer px-2 py-1
                          mb-3 flex items-center gap-x-2 
                          hover:bg-red-600 transition duration-200 hover:scale-105'>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-red-600 group-hover:text-white transition duration-200">

                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                              14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                              2.1-4.684 2.924-7.138a60.114 60.114 0 0 
                              0-16.536-1.84M7.5 14.25 5.106 5.272M6 
                              20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 
                              1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 
                              .75.75 0 0 1 1.5 0Z"/>
                                
                          </svg>

                          <span className='text-red-600 font-semibold group-hover:text-white transition duration-200'>Add</span>

                        </button>

                        </div>

                        <div className='font-semibold'>

                            <span>{products.title}</span>

                        </div>

                        <div className=''>
                                
                          <span> <span className='font-bold'>Price:</span> {`$ ${products.price}`} </span>
                      
                        </div>

                    </div>

                </div>

              </div>
                  
            )
          
          }

        </div>

      </div>     
    
    
    </>

  )

}


export default MansCloths















