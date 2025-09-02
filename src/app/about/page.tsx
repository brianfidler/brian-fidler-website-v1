import Layout from '@/components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-normal text-black leading-none tracking-tighter mb-8">
              About Brian Fidler
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Marketing Strategist & Web Developer
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-normal text-black leading-tight mb-8">
                The Story Behind the Strategy
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I believe marketing should be as enjoyable as it is effective. After spending years in corporate marketing departments where creativity was often stifled by endless meetings and approval processes, I decided to take a different approach.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  What if we could combine strategic thinking with genuine personality? What if marketing could actually be fun while still driving real business results?
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  That's how my approach was born. No corporate stiffness, no jargon-filled presentations, just clear strategies that work and a personality that makes the journey enjoyable.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-12 border border-gray-200">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 flex items-center justify-center mx-auto mb-8 rounded-full">
                  <span className="text-white text-4xl font-normal">BF</span>
                </div>
                <h3 className="text-2xl font-normal text-black mb-3">Brian Fidler</h3>
                <p className="text-gray-600 mb-6">Marketing Strategist & Web Developer</p>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>Strategic Clarity Expert</p>
                  <p>Results-Driven Approach</p>
                  <p>Problem Solver</p>
                  <p>Creative Thinker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Philosophy Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Executive Marketing Leadership
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 5 years of experience in marketing strategy and web development, I've helped businesses of all sizes transform their digital presence and achieve measurable growth.
                </p>
                <p>
                  My background spans from startup environments to enterprise organizations, giving me a unique perspective on what works across different business models and industries.
                </p>
                <p>
                  I specialize in creating marketing strategies that are not only effective but also sustainable and scalable for long-term business success.
                </p>
              </div>
            </div>
            
            {/* Philosophy Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                My Philosophy
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Marketing should be human, authentic, and results-driven. I believe in creating strategies that reflect the real personality of your business while delivering measurable outcomes.
                </p>
                <p>
                  Every marketing decision should have a clear purpose and measurable outcome. No fluff, just focused strategies that drive real business results.
                </p>
                <p>
                  Success is measured by outcomes, not just outputs. We focus on strategies that actually move the needle for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas of Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Marketing Strategy</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive marketing strategies that align with business objectives and drive measurable results.
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <p className="text-gray-600">
                Custom web applications and websites built with modern technologies and best practices.
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Lead Generation</h3>
              </div>
              <p className="text-gray-600">
                High-converting marketing campaigns designed to generate leads and drive revenue growth.
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Content Strategy</h3>
              </div>
              <p className="text-gray-600">
                Content management and SEO optimization that makes updates easy and drives organic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              The Journey So Far
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              A timeline of key moments that shaped my approach to marketing and development.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start space-x-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-normal text-black mb-3">2019 - The Beginning</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">Started my journey in digital marketing and web development, working with small businesses and startups.</p>
                  <p className="text-sm text-gray-500">First clients saw 200%+ increases in engagement and conversions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-normal text-black mb-3">2021 - The Experiment</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">Began working with small businesses, testing the theory that marketing could be both effective and enjoyable.</p>
                  <p className="text-sm text-gray-500">First clients saw 200%+ increases in engagement and conversions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-normal text-black mb-3">2022 - The Validation</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">Proved that personality-driven marketing consistently outperforms traditional corporate approaches.</p>
                  <p className="text-sm text-gray-500">Average client saw 300% increase in qualified leads.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-normal text-black mb-3">2023 - The Revolution</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">Launched comprehensive marketing and development services, bringing strategic clarity without the corporate stiffness to businesses everywhere.</p>
                  <p className="text-sm text-gray-500">Now helping 50+ businesses transform their marketing approach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              Fun Facts About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Because marketing isn't just about business - it's about people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-lg">
                <span className="text-blue-600 text-xl font-normal">☕</span>
              </div>
              <h3 className="text-lg font-normal text-black mb-4">Coffee Connoisseur</h3>
              <p className="text-gray-600 leading-relaxed">Can taste the difference between a good and great cup of coffee. It's a gift and a curse.</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-lg">
                <span className="text-blue-600 text-xl font-normal">🎸</span>
              </div>
              <h3 className="text-lg font-normal text-black mb-4">Guitar Player</h3>
              <p className="text-gray-600 leading-relaxed">When I'm not crafting marketing strategies, I'm crafting melodies. Both require creativity!</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-lg">
                <span className="text-blue-600 text-xl font-normal">🌮</span>
              </div>
              <h3 className="text-lg font-normal text-black mb-4">Taco Enthusiast</h3>
              <p className="text-gray-600 leading-relaxed">Believe that the best business meetings happen over tacos. It's just science.</p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-lg">
                <span className="text-blue-600 text-xl font-normal">🚀</span>
              </div>
              <h3 className="text-lg font-normal text-black mb-4">Tech Enthusiast</h3>
              <p className="text-gray-600 leading-relaxed">Always exploring new technologies and tools to improve marketing and development processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-normal text-white leading-tight mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's create marketing that's as unique and effective as you are. No corporate stiffness, just real results with personality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-black hover:bg-gray-100">
                Let's Chat About Your Business
              </Link>
              <Link href="/services" className="btn btn-secondary text-white border-white hover:bg-white hover:text-black">
                See My Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


