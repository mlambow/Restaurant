
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

export default function Navbar() {
  const user = false
  return (
    <div className='h-12 text-red-500 flex p-4 items-center justify-between border-b-2 border-b-red-400 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* left links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/'>Homepage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>
      {/* logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>Massimo</Link>
      </div>
      {/* mobile menu */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* right links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 right-2 lg:static'>
          <Image src='/phone.png' alt='' width={20} height={20}/>
          <span>012 345 6789</span>
        </div>
        {!user ? 
        (
        <Link href='/login'>Login</Link>
        ) : (
        <Link href='/orders'>Order</Link>
        )}
        <CartIcon />
      </div>
    </div>
  )
}
