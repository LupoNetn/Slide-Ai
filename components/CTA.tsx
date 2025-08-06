import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowBigRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Presentations?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who are already creating amazing presentations with AI
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/dashboard">
              Start Your Free Trial <ArrowBigRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
  )
}

export default CTA
