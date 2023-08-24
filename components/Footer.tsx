import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="h-6 md:h-12 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">MASSIMO</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}
