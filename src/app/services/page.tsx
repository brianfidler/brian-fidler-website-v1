import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-normal text-black leading-none tracking-tighter mb-8">
              Marketing & Development Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Executive-level marketing leadership and custom web development without the full-time investment
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              How We Work Together
            </h2>
            <p className="text-lg text-gray-600">
              Get executive-level marketing leadership and development expertise on your timeline and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-normal">1</span>
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Discovery & Strategy</h3>
              <p className="text-gray-600">
                We start with a comprehensive audit of your current marketing efforts, 
                identify gaps, and develop a strategic roadmap aligned with your business goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-normal">2</span>
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Implementation</h3>
              <p className="text-gray-600">
                Execute the strategy through hands-on campaign management, team leadership, 
                and system optimization to drive measurable results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-normal">3</span>
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Optimization</h3>
              <p className="text-gray-600">
                Continuously monitor performance, optimize campaigns, and scale successful 
                initiatives while building internal marketing capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              Core Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive marketing and development leadership across four key pillars
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Marketing Strategy & Leadership</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Strategic marketing leadership that drives business growth without the full-time executive cost.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Marketing strategy development and execution
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Executive reporting and stakeholder management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Budget planning and resource allocation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Marketing technology stack optimization
                </li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Web Development & Design</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Custom web applications and websites built with modern technologies and best practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom website design and development
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  E-commerce solutions and integrations
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  CMS development and optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Performance optimization and SEO
                </li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Lead Generation & Campaigns</h3>
              </div>
              <p className="text-gray-600 mb-4">
                High-converting marketing campaigns designed to generate leads and drive revenue growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lead generation funnel development
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email marketing automation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Paid advertising optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conversion rate optimization
                </li>
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Content Strategy & SEO</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Content management and SEO optimization that makes updates easy and drives organic growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Content strategy development
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SEO optimization and keyword research
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Blog and social media content
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Content performance analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Matrix */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              Service Comparison Matrix
            </h2>
            <p className="text-lg text-gray-600">
              Choose the level of engagement that fits your needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold">Service Area</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Growth</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-medium">Strategic Planning</td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Campaign Execution</td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">Limited</span>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Web Development</td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">-</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">Basic</span>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Monthly Hours</td>
                  <td className="p-4 text-center">10-15</td>
                  <td className="p-4 text-center">20-30</td>
                  <td className="p-4 text-center">40+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-normal text-black leading-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss which service level is right for your business and growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Book a Strategy Session
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}


