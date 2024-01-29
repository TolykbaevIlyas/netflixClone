import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-10'>
      <nav className='flex justify-center'>
        <Link className='ml-5' href="/">Home</Link>
        <Link className='ml-5' href="/Category">Category</Link>
        <Link className='ml-5' href="/AboutUs">About Us</Link>
      </nav>
    </header>
  )
}

export default Header