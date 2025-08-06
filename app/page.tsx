import Features from '@/components/Features'
import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
      <Header />
      <Features />
      <Pricing />
    </div>
  )
}

export default page
