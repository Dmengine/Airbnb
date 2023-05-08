import Image from 'next/image'
import React from 'react'


export default function Logo() {
  return (
    <Image 
    src='/images/logo.png' 
    width={100} 
    height={100} 
    alt='logo' />
  )
}
