import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-normal text-black leading-none tracking-tighter mb-8">
              Let's Make Magic Together
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              Ready to transform your digital presence? Let's chat about how we can make your business shine with expert marketing and development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <h2 className="text-3xl font-normal text-black leading-tight mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm here to help you transform your digital presence. Whether you have a specific project in mind or just want to explore possibilities, let's start a conversation.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-black mb-2">Email</h3>
                    <p className="text-gray-600">hello@brianfidler.com</p>
                    <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-black mb-2">Schedule a Call</h3>
                    <p className="text-gray-600">Book a 30-minute consultation</p>
                    <p className="text-sm text-gray-500">No sales pitch, just a friendly chat about your business</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-black mb-2">LinkedIn</h3>
                    <p className="text-gray-600">Connect with me on LinkedIn</p>
                    <p className="text-sm text-gray-500">I share marketing insights and behind-the-scenes content</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🐦</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-black mb-2">Twitter</h3>
                    <p className="text-gray-600">Follow me for daily marketing tips</p>
                    <p className="text-sm text-gray-500">Quick insights, industry news, and occasional dad jokes</p>
                  </div>
                </div>
              </div>

              {/* Quick Booking */}
              <div className="bg-gray-50 p-8 border border-gray-200">
                <h3 className="text-xl font-normal text-black mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Book a free 30-minute consultation to discuss your marketing challenges and explore how we can work together.
                </p>
                <Link href="/contact" className="btn btn-primary w-full text-center">
                  Book Your Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-normal text-black leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Common questions about working together and what to expect.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-8">
              <h3 className="text-xl font-normal text-black mb-4">
                How long does it take to see results?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most clients start seeing measurable improvements within 30-60 days. However, the timeline depends on your specific goals and current digital foundation. We'll discuss realistic timelines during our initial consultation.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-normal text-black mb-4">
                What makes your approach different?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I combine strategic thinking with genuine personality. No corporate jargon, no endless meetings, just clear strategies that work and a collaborative approach that makes the process enjoyable. Plus, I actually care about your success and deliver real results.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-normal text-black mb-4">
                Do you work with small businesses?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! I specialize in working with small to medium-sized businesses that are ready to grow but don't need (or want) a full-time marketing team. My services are designed to be scalable and cost-effective for businesses of all sizes.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-normal text-black mb-4">
                What's included in the consultation?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The free consultation is a 30-minute chat where we discuss your business goals, current digital challenges, and explore how we might work together. No sales pitch, no pressure - just an honest conversation about your needs.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-normal text-black mb-4">
                Can you work with my existing team?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! I often work alongside existing marketing teams, providing strategic direction and helping optimize their efforts. I can also help you build and train an internal team if that's part of your long-term plan.
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
              Let's start a conversation about how we can make your business shine with expert marketing and development strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-black hover:bg-gray-100">
                Schedule Your Free Consultation
              </Link>
              <Link href="/contact" className="btn btn-secondary text-white border-white hover:bg-white hover:text-black">
                Download My Marketing Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
