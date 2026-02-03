# EmailJS Setup Guide

To enable email sending functionality in your portfolio, follow these steps:

## 1. Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

## 2. Get Your Credentials

### Public Key
- Navigate to Dashboard → Account → API Keys
- Copy your **Public Key** (looks like: `abc123def456ghi789`)

### Service ID
- Go to Dashboard → Email Services
- Click "Add Service" or select an existing service (Gmail, Outlook, etc.)
- Copy your **Service ID** (looks like: `service_abc123xyz`)

### Template ID
- Go to Dashboard → Email Templates
- Click "Create New Template"
- Use this template structure:

```
From: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

- Copy the **Template ID** (looks like: `template_abc123xyz`)

## 3. Update Your Code

In `src/components/sections/Terminal.tsx`, replace these three values:

```typescript
// Line 15: Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 28: Replace with your service ID
'SERVICE_ID_HERE'

// Line 29: Replace with your template ID
'TEMPLATE_ID_HERE'
```

Example:
```typescript
emailjs.init('u1a2b3c4d5e6f7g8h9i0j');

const response = await emailjs.send(
  'service_abc123def456',
  'template_xyz789abc123',
  {
    from_name: 'Portfolio Visitor',
    from_email: 'portfolio@contact.com',
    to_email: 'abhishekchauhan1310@gmail.com',
    message: input,
    reply_to: 'noreply@portfolio.com',
  }
);
```

## 4. Test It Out

1. Run your portfolio locally: `npm run dev`
2. Navigate to the contact section
3. Type a test message and click Send
4. You should receive the email!

## Troubleshooting

**Email not sending?**
- Check that your Service is connected in EmailJS dashboard
- Verify template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Check browser console for error messages (F12 → Console tab)
- Ensure public key is correct

**Domain restrictions?**
- For production, add your domain to EmailJS allowed origins:
- Dashboard → Account → Security → Authorized origins
- Add: `https://yourportfolio.com`

## Security Note

Keep your public key visible (it's safe), but never expose:
- Your private key (if using backend)
- API access tokens
- Email credentials

For production, consider moving email logic to a backend API.
