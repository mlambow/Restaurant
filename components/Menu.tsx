'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links = [
  { id: 1, title: 'Homepage', url: '/' },
  { id: 1, title: 'Menu', url: '/menu' },
  { id: 1, title: 'Working Hours', url: '/' },
  { id: 1, title: 'Contact', url: '/' },
]

export default function Menu() {
  const [open, setOpen] = useState(false)
  const user =false
  return (
    <div>
      {!open ? (
        <Image 
          src='/open.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image 
          src='/close.png'
          alt=''
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      { open && (<div className='bg-red-500 text-white absolute lleft-0 top-24 h-[calc(100vh-6rem)] flex flex-col w-full gap-8 items-center justify-center text-3xl z-10'>
        {links.map(link => (
          <Link key={link.id} href={link.url} onClick={() => {setOpen(false)}}>
            {link.title}
          </Link>
        ))}
        {!user ? (<Link href='/login'>Login</Link>) :
          (<Link href='/orders'>Orders</Link>)
        }
        <Link href='/cart' onClick={() => {setOpen(false)}}>
          <CartIcon />
        </Link>
      </div>)}
    </div>
  )
}
