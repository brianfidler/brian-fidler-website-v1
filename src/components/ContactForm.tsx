'use client';

import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
  phone?: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // ActiveCampaign API integration
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website_contact_form',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          message: '',
          phone: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-gray-50 border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-normal text-black mb-4">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for reaching out! I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <h2 className="text-3xl font-normal text-black leading-tight mb-8">Send Me a Message</h2>
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 p-4 mb-6">
          <p className="text-red-700 text-sm">
            Sorry, there was an error sending your message. Please try again or email me directly at hello@brianfidler.com
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-normal text-black mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors ${
                errors.firstName ? 'border-red-300' : ''
              }`}
              placeholder="Your first name"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-2">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-normal text-black mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors ${
                errors.lastName ? 'border-red-300' : ''
              }`}
              placeholder="Your last name"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-2">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-normal text-black mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors ${
              errors.email ? 'border-red-300' : ''
            }`}
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        <div>
          <label htmlFor="phone" className="block text-sm font-normal text-black mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-normal text-black mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
            placeholder="Your company name"
          />
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className="block text-sm font-normal text-black mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
          >
            <option value="">Select a service</option>
            <option value="strategic-marketing">Strategic Marketing</option>
            <option value="web-development">Web Development</option>
            <option value="brand-development">Brand Development</option>
            <option value="lead-generation">Lead Generation</option>
            <option value="content-strategy">Content Strategy</option>
            <option value="seo-optimization">SEO Optimization</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-normal text-black mb-2">
            Tell Me About Your Project *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none ${
              errors.message ? 'border-red-300' : ''
            }`}
            placeholder="What are your marketing challenges? What are your goals? What's your timeline? Tell me everything!"
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-2">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-normal py-4 px-8 transition-colors text-lg ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'btn btn-primary'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message ✨'
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive marketing communications from Brian Fidler. 
          You can unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}


