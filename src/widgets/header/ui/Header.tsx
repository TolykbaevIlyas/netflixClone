'use client'
import { LeftPanel } from '@/entities/LeftPanel'
import { OpenLeftPanel } from '@/features/OpenLeftPanel'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [open,isOpen] = useState(false);
  return (
    <header className='p-10'>
      <div>
        <OpenLeftPanel open={open} onClick={()=>isOpen(!open)}/>
        {open ? <LeftPanel open={open} onClick={()=>isOpen(!open)}/> : null}
      </div>
      <nav className='flex justify-center'>
        <Link className='ml-5 hover:text-zinc-400 duration-150' href="/">Home</Link>
        <Link className='ml-5 hover:text-zinc-400 duration-150' href="/Category">Category</Link>
        <Link className='ml-5 hover:text-zinc-400 duration-150' href="/AboutUs">About Us</Link>
      </nav>
    </header>
  )
}

export default Header