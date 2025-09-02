import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Gradient } from '@/components/gradient'

export default function Privacy() {
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
              Privacy Policy
            </Heading>
            <p className="mt-6 text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="mt-12 prose prose-gray max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Brian Fidler ("we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us, including:</p>
              <ul>
                <li>Name and contact information (email, phone, address)</li>
                <li>Company information and job title</li>
                <li>Project requirements and business goals</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information:</p>
              <ul>
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Click patterns and interactions</li>
              </ul>

              <h3>2.3 Cookies and Tracking Technologies</h3>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and performance</li>
                <li>Provide personalized content and experiences</li>
                <li>Improve our services and user experience</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Communicate with you about projects and services</li>
                <li>Process payments and transactions</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              
              <h3>4.1 Service Providers</h3>
              <p>We may share information with trusted third-party service providers who assist us in:</p>
              <ul>
                <li>Website hosting and maintenance</li>
                <li>Payment processing</li>
                <li>Email marketing and communication</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer support and project management</li>
              </ul>

              <h3>4.2 Legal Requirements</h3>
              <p>We may disclose your information if required by law or in response to:</p>
              <ul>
                <li>Valid legal requests or court orders</li>
                <li>Government investigations</li>
                <li>Protection of our rights and property</li>
                <li>Emergency situations involving public safety</li>
              </ul>

              <h3>4.3 Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</p>

              <h2>5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
              <ul>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>

              <h2>6. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to:</p>
              <ul>
                <li>Provide our services and fulfill contractual obligations</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records and analytics</li>
              </ul>
              <p>When information is no longer needed, we securely delete or anonymize it.</p>

              <h2>7. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights:</p>
              
              <h3>7.1 Access and Portability</h3>
              <ul>
                <li>Request access to your personal information</li>
                <li>Receive a copy of your data in a portable format</li>
                <li>Verify the accuracy of your information</li>
              </ul>

              <h3>7.2 Correction and Updates</h3>
              <ul>
                <li>Request correction of inaccurate information</li>
                <li>Update your contact preferences</li>
                <li>Modify your communication settings</li>
              </ul>

              <h3>7.3 Deletion and Restriction</h3>
              <ul>
                <li>Request deletion of your personal information</li>
                <li>Restrict processing of your data</li>
                <li>Object to certain types of processing</li>
              </ul>

              <h3>7.4 Marketing Communications</h3>
              <p>You can opt out of marketing communications at any time by:</p>
              <ul>
                <li>Clicking the unsubscribe link in emails</li>
                <li>Contacting us directly</li>
                <li>Updating your preferences in your account</li>
              </ul>

              <h2>8. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:</p>
              <ul>
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Other appropriate safeguards as required by law</li>
              </ul>

              <h2>9. Children's Privacy</h2>
              <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>

              <h2>10. Third-Party Links and Services</h2>
              <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>

              <h2>11. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices on our website</li>
              </ul>
              <p>Your continued use of our services after changes become effective constitutes acceptance of the updated policy.</p>

              <h2>12. Contact Information</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              
              <div className="bg-gray-50 p-6 border border-gray-200">
                <p>
                  <strong>Brian Fidler</strong><br />
                  Email: [Your Email]<br />
                  Website: [Your Website]<br />
                  Phone: [Your Phone]<br />
                  Address: [Your Address]
                </p>
              </div>

              <h2>13. Data Protection Officer</h2>
              <p>For privacy-related inquiries, you may also contact our Data Protection Officer at [DPO Email].</p>

              <h2>14. Complaints</h2>
              <p>If you believe we have not addressed your privacy concerns adequately, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.</p>

              <div className="mt-12 p-6 bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> This Privacy Policy is designed to comply with applicable privacy laws and regulations, 
                  including GDPR where applicable. However, laws and regulations may change, and we recommend consulting with 
                  legal counsel to ensure ongoing compliance with current requirements.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
