import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
  phone?: string;
  source: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ActiveCampaign API configuration
    const AC_API_URL = process.env.ACTIVECAMPAIGN_API_URL;
    const AC_API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;
    const AC_LIST_ID = process.env.ACTIVECAMPAIGN_LIST_ID || '1';

    if (!AC_API_URL || !AC_API_KEY) {
      console.error('ActiveCampaign API credentials not configured');
      return NextResponse.json(
        { error: 'Contact form service not configured' },
        { status: 500 }
      );
    }

    // Prepare contact data for ActiveCampaign
    const contactData = {
      contact: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone || '',
        fieldValues: [
          {
            field: '1', // Company field
            value: body.company || ''
          },
          {
            field: '2', // Service Interest field
            value: body.service || ''
          },
          {
            field: '3', // Message field
            value: body.message || ''
          },
          {
            field: '4', // Source field
            value: body.source || 'website_contact_form'
          }
        ]
      }
    };

    // Add contact to ActiveCampaign
    const acResponse = await fetch(`${AC_API_URL}/api/3/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': AC_API_KEY,
      },
      body: JSON.stringify(contactData),
    });

    if (!acResponse.ok) {
      const acError = await acResponse.text();
      console.error('ActiveCampaign API error:', acError);
      throw new Error('Failed to add contact to ActiveCampaign');
    }

    const acResult = await acResponse.json();
    const contactId = acResult.contact?.id;

    if (contactId) {
      // Add contact to list
      const listData = {
        contactList: {
          list: AC_LIST_ID,
          contact: contactId.toString(),
          status: '1' // Active status
        }
      };

      await fetch(`${AC_API_URL}/api/3/contactLists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': AC_API_KEY,
        },
        body: JSON.stringify(listData),
      });
    }

    // Send notification email (optional)
    if (process.env.NOTIFICATION_EMAIL) {
      await sendNotificationEmail(body);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        contactId: contactId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

async function sendNotificationEmail(formData: ContactFormData) {
  try {
    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Company: ${formData.company || 'Not provided'}
      Phone: ${formData.phone || 'Not provided'}
      Service Interest: ${formData.service || 'Not specified'}
      
      Message:
      ${formData.message}
      
      Submitted: ${formData.timestamp}
      Source: ${formData.source}
    `;

    // You can integrate with your preferred email service here
    // For example, using Resend, SendGrid, or Nodemailer
    console.log('Notification email content:', emailContent);
    
  } catch (error) {
    console.error('Failed to send notification email:', error);
  }
}


