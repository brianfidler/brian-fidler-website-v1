# ActiveCampaign Integration Setup

This guide will help you set up the ActiveCampaign integration for the contact form on your Fractional CMO website.

## Prerequisites

1. An ActiveCampaign account
2. API access enabled in your ActiveCampaign account

## Step 1: Get Your ActiveCampaign API Credentials

1. Log in to your ActiveCampaign account
2. Go to **Settings** > **Developer**
3. Copy your **API URL** and **API Key**

## Step 2: Set Up Custom Fields in ActiveCampaign

You'll need to create custom fields to capture the additional form data:

1. Go to **Settings** > **Fields**
2. Create the following custom fields:
   - **Company** (Text field)
   - **Service Interest** (Text field)
   - **Message** (Text area field)
   - **Source** (Text field)

3. Note the field IDs (you'll see them in the URL when editing each field)

## Step 3: Configure Environment Variables

1. Copy `env.example` to `.env.local`
2. Update the ActiveCampaign configuration:

```bash
ACTIVECAMPAIGN_API_URL=https://your-account.api-us1.com
ACTIVECAMPAIGN_API_KEY=your_api_key_here
ACTIVECAMPAIGN_LIST_ID=1
```

## Step 4: Update Field IDs in API Route

If your custom field IDs are different from the defaults, update them in `src/app/api/contact/route.ts`:

```typescript
fieldValues: [
  {
    field: '1', // Company field ID
    value: body.company || ''
  },
  {
    field: '2', // Service Interest field ID
    value: body.service || ''
  },
  {
    field: '3', // Message field ID
    value: body.message || ''
  },
  {
    field: '4', // Source field ID
    value: body.source || 'website_contact_form'
  }
]
```

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your ActiveCampaign account to verify the contact was added

## Step 6: Set Up Automation (Optional)

1. In ActiveCampaign, go to **Automations**
2. Create a new automation triggered by "Contact Added to List"
3. Set up email sequences, tags, or other actions based on form submissions

## Troubleshooting

### Common Issues

1. **API Error 401**: Check your API key and URL
2. **Field Not Found**: Verify your custom field IDs
3. **Contact Not Added**: Check the API response in your browser's developer tools

### Debug Mode

To enable debug logging, add this to your `.env.local`:

```bash
DEBUG_ACTIVECAMPAIGN=true
```

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables for all sensitive data
- Consider implementing rate limiting for the contact form
- Validate all form inputs on both client and server side

## Next Steps

Once the basic integration is working, consider:

1. Setting up email notifications for new submissions
2. Creating different lists for different service interests
3. Implementing form analytics and tracking
4. Adding spam protection (reCAPTCHA, honeypot fields)
5. Setting up automated follow-up sequences


