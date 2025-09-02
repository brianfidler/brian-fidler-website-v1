import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Gradient } from '@/components/gradient'

export default function Terms() {
  return (
    <>
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 ring-1 ring-black/5 ring-inset" />
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <Container className="py-24">
          <div className="max-w-4xl mx-auto">
            <Subheading>Legal</Subheading>
            <Heading as="h1" className="mt-2">
              Terms of Service
            </Heading>
            <p className="mt-6 text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="mt-12 prose prose-gray max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Brian Fidler ("we," "us," or "our"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>2. Services Description</h2>
              <p>
                We provide marketing strategy consulting and web development services, including but not limited to:
              </p>
              <ul>
                <li>Digital marketing strategy development</li>
                <li>Website design and development</li>
                <li>Content strategy and creation</li>
                <li>Lead generation campaigns</li>
                <li>SEO optimization</li>
                <li>Marketing analytics and reporting</li>
              </ul>

              <h2>3. Client Responsibilities</h2>
              <p>
                As a client, you agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information necessary for project completion</li>
                <li>Review and provide feedback on deliverables within agreed timeframes</li>
                <li>Make timely payments as outlined in project agreements</li>
                <li>Use our services in compliance with applicable laws and regulations</li>
                <li>Respect intellectual property rights and confidentiality agreements</li>
              </ul>

              <h2>4. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul>
                <li>Projects require a deposit before work begins</li>
                <li>Remaining balance is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>

              <h2>5. Project Timeline and Deliverables</h2>
              <p>
                Project timelines and deliverables will be outlined in project agreements. While we strive to meet all deadlines:
              </p>
              <ul>
                <li>Delays may occur due to client feedback timing or scope changes</li>
                <li>Project scope changes may affect timelines and pricing</li>
                <li>We will communicate any anticipated delays promptly</li>
                <li>Final deliverables are provided upon final payment</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>
                Upon full payment, clients receive:
              </p>
              <ul>
                <li>Full rights to final deliverables</li>
                <li>Source code for web development projects</li>
                <li>Marketing strategy documents and materials</li>
              </ul>
              <p>
                We retain the right to:
              </p>
              <ul>
                <li>Use project work in our portfolio (with client permission)</li>
                <li>Reference general strategies and methodologies</li>
                <li>Continue using our proprietary frameworks and tools</li>
              </ul>

              <h2>7. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding:
              </p>
              <ul>
                <li>Client business information and strategies</li>
                <li>Proprietary methodologies and trade secrets</li>
                <li>Client financial information and performance data</li>
                <li>Any other information marked as confidential</li>
              </ul>

              <h2>8. Limitation of Liability</h2>
              <p>
                Our liability is limited to the amount paid for services. We are not liable for:
              </p>
              <ul>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Third-party actions or decisions</li>
                <li>Results that don't meet specific business goals</li>
              </ul>

              <h2>9. Termination</h2>
              <p>
                Either party may terminate services with written notice:
              </p>
              <ul>
                <li>We require 30 days written notice for ongoing projects</li>
                <li>Clients are responsible for payment of completed work</li>
                <li>We will provide all completed deliverables upon termination</li>
                <li>Confidentiality obligations continue after termination</li>
              </ul>

              <h2>10. Dispute Resolution</h2>
              <p>
                In the event of disputes:
              </p>
              <ul>
                <li>Parties agree to attempt resolution through direct communication</li>
                <li>If unresolved, parties agree to mediation</li>
                <li>Legal action may only be taken after mediation attempts</li>
                <li>Governing law is the state of [Your State], United States</li>
              </ul>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                Continued use of our services constitutes acceptance of modified terms.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at:
              </p>
              <p>
                <strong>Brian Fidler</strong><br />
                Email: [Your Email]<br />
                Website: [Your Website]<br />
                Phone: [Your Phone]
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These terms are governed by the laws of [Your State], United States. 
                Any disputes will be resolved in the courts of [Your County], [Your State].
              </p>

              <div className="mt-12 p-6 bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> This document provides general terms and conditions. 
                  Specific project agreements may include additional terms and conditions. 
                  We recommend consulting with legal counsel to ensure these terms meet your specific needs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
