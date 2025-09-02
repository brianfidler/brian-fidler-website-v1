import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-normal text-black leading-none tracking-tighter mb-8">
              Transform Your Digital Presence with <span className="text-blue-600">Expert Marketing & Development</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-12">
              Professional marketing strategies and web development services that drive real results. 
              No corporate jargon, just clear strategies that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              Marketing & Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              From strategic marketing to custom web development, I help businesses create powerful 
              digital experiences that convert visitors into customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Custom Web Design</h3>
              <p className="text-sm text-gray-600">Beautiful, responsive websites that convert visitors into customers</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Marketing Strategy</h3>
              <p className="text-sm text-gray-600">Data-driven marketing frameworks that align with business objectives</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Lead Generation</h3>
              <p className="text-sm text-gray-600">High-converting campaigns designed to generate leads and drive growth</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Content Strategy</h3>
              <p className="text-sm text-gray-600">Content management and SEO optimization that makes updates easy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Real results from real partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-semibold text-blue-600">SB</span>
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
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-semibold text-blue-600">MJ</span>
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
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-semibold text-blue-600">LW</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-normal text-white leading-tight mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's discuss how expert marketing and development can accelerate your business.
            </p>
            <Link href="/contact" className="btn bg-white text-black hover:bg-gray-100">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
