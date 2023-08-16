import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 items-center justify-between'>
      <Link href='/' className='text-xl font-bold'>MASSIMO</Link>
      <p>ALL RIGHTS RESERVED</p>
    </div>
  )
}
