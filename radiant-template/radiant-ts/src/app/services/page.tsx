import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Gradient } from '@/components/gradient'

export default function Services() {
  return (
    <>
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 ring-1 ring-black/5 ring-inset" />
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <Container className="pb-24">
          <Subheading>Services</Subheading>
          <Heading as="h1" className="mt-2 max-w-3xl">
            Marketing strategy and web development services that drive results.
          </Heading>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="lg:col-span-3">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Marketing Strategy</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Comprehensive marketing strategies that align with your business objectives and drive measurable results. I work with you to understand your market, identify opportunities, and create campaigns that convert.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Market research and competitive analysis</li>
                  <li>Brand positioning and messaging</li>
                  <li>Content strategy and SEO optimization</li>
                  <li>Lead generation campaigns</li>
                  <li>Performance tracking and optimization</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Custom web applications and websites built with modern technologies and best practices. From simple landing pages to complex web applications, I create digital experiences that convert visitors into customers.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Custom website design and development</li>
                  <li>E-commerce solutions</li>
                  <li>Web application development</li>
                  <li>Performance optimization</li>
                  <li>Ongoing maintenance and support</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Service Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Starter</h3>
                    <p className="text-gray-600 mb-4">Perfect for small businesses getting started with digital marketing.</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Basic marketing strategy</li>
                      <li>• Website audit</li>
                      <li>• Content recommendations</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Growth</h3>
                    <p className="text-gray-600 mb-4">Comprehensive marketing and development for growing businesses.</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Full marketing strategy</li>
                      <li>• Custom website development</li>
                      <li>• Ongoing optimization</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Enterprise</h3>
                    <p className="text-gray-600 mb-4">Full-service digital transformation for established businesses.</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Strategic consulting</li>
                      <li>• Advanced web applications</li>
                      <li>• Dedicated support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
