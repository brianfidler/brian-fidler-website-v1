import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Transform your digital presence with expert marketing strategies and custom web development from Brian Fidler.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 ring-1 ring-black/5 ring-inset" />
      <Navbar />
      <Container className="relative">
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Transform Your Digital Presence with <span className="text-sky-400">Expert Marketing & Development</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Professional marketing strategies and web development services that drive real results. 
            No corporate jargon, just clear strategies that work.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Start Your Project</Button>
            <Button variant="secondary" href="/about">Learn More</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="overflow-hidden">
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ServicesSection() {
  return (
    <div className="overflow-hidden">
      <Container className="py-32">
        <div className="mb-20">
          <Heading as="h2" className="max-w-3xl">
            Marketing & Development Services
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            From strategic marketing to custom web development, I help businesses create powerful 
            digital experiences that convert visitors into customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 text-center border border-gray-200 bg-white">
            <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Custom Web Design</h3>
            <p className="text-sm text-gray-600">Beautiful, responsive websites that convert visitors into customers</p>
          </div>
          
          <div className="p-6 text-center border border-gray-200 bg-white">
            <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Marketing Strategy</h3>
            <p className="text-sm text-gray-600">Data-driven marketing frameworks that align with business objectives</p>
          </div>
          
          <div className="p-6 text-center border border-gray-200 bg-white">
            <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Lead Generation</h3>
            <p className="text-sm text-gray-600">High-converting campaigns designed to generate leads and drive growth</p>
          </div>
          
          <div className="p-6 text-center border border-gray-200 bg-white">
            <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Content Strategy</h3>
            <p className="text-sm text-gray-600">Content management and SEO optimization that makes updates easy</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TestimonialsSection() {
  return (
    <div className="overflow-hidden bg-gray-50">
      <Container className="py-32">
        <div className="mb-20">
          <Heading as="h2" className="max-w-3xl">
            Client Success Stories
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Real results from real partnerships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border border-gray-200 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mr-4">
                <span className="font-semibold text-sky-600">SB</span>
              </div>
              <div>
                <div className="font-semibold">Sarah Brown</div>
                <div className="text-sm text-gray-600">CEO, TechStart</div>
              </div>
            </div>
            <p className="text-gray-600">
              "Brian Fidler transformed our online presence. We went from struggling 
              with an outdated website to having a modern, converting digital experience."
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mr-4">
                <span className="font-semibold text-sky-600">MJ</span>
              </div>
              <div>
                <div className="font-semibold">Mike Johnson</div>
                <div className="text-sm text-gray-600">Founder, GrowthCorp</div>
              </div>
            </div>
            <p className="text-gray-600">
              "The marketing strategy Brian developed helped us scale from $100K 
              to $1M in online sales in 12 months. His expertise is invaluable."
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 bg-white">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-sky-100 flex items-center justify-center mr-4">
                <span className="font-semibold text-sky-600">LW</span>
              </div>
              <div>
                <div className="font-semibold">Lisa Wang</div>
                <div className="text-sm text-gray-600">CMO, InnovateNow</div>
              </div>
            </div>
            <p className="text-gray-600">
              "Working with Brian was like having a seasoned marketing team 
              on our side. His expertise elevated our entire digital presence."
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="overflow-hidden bg-black">
      <Container className="py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <Heading as="h2" className="text-white max-w-3xl">
            Ready to Transform Your Digital Presence?
          </Heading>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Let's discuss how expert marketing and development can accelerate your business.
          </p>
          <div className="mt-8">
            <Button href="/contact" className="bg-white text-black hover:bg-gray-100">
              Start Your Project
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <StatsSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  )
}
