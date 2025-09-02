import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Gradient } from '@/components/gradient'

export default function Contact() {
  return (
    <>
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 ring-1 ring-black/5 ring-inset" />
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <Container className="pb-24">
          <Subheading>Contact</Subheading>
          <Heading as="h1" className="mt-2 max-w-3xl">
            Let's discuss how we can transform your digital presence.
          </Heading>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="lg:col-span-4">
              <div className="bg-white p-8 border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="marketing-strategy">Marketing Strategy</option>
                      <option value="web-development">Web Development</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="content-strategy">Content Strategy</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project, goals, and timeline..."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 font-medium hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-gray-100 p-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@brianfidler.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Response Time</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Consultation</h4>
                    <p className="text-gray-600">Free 30-minute discovery call</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="font-medium text-gray-900 mb-3">What to Expect</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Quick response to your inquiry</li>
                    <li>• Free consultation call</li>
                    <li>• Custom proposal within 48 hours</li>
                    <li>• Transparent pricing and timeline</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
