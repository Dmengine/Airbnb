import React from 'react'
import Container from '../container'
import Logo from './Logo'
import Search from './Search'

export default function Navbar() {
  return (
    <div className='w-full fixed bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Logo/>
        <Container>
            Olamide
        </Container>
        </div>
        <Search/>
    </div>
  )
}
