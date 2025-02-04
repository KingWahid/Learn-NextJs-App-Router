import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="p-5 bg-blue-200">
        <Link href="/" className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Home</Link>
    </header>
  )
}

export default Header