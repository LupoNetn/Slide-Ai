import CTA from '@/components/CTA'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
      <Header />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default page
