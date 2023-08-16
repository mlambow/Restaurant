'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: 'always fresh & always crisp & always hot',
    image: '/slide1.png'
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in SA',
    image: '/slide2.png'
  },
  {
    id: 3,
    title: 'the best pizza to share with your family',
    image: '/slide3.png'
  }
]

export default function Slider() {
  const [slide, setSlide] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1)), 3000);
  //   return () => clearInterval(interval);
  // }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
      {/* text container */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold bg-fuchsia-200'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[slide].title}
        </h1>
        <button className='bg-red-400 text-white py-4 px-8'>Order Now</button>
      </div>
      {/* image container */}
      <div className='flex-1 relative'>
        <Image 
          className='object-cover'
          src={data[slide].image}
          alt=''
          fill
        />
      </div>
    </div>
  )
}
