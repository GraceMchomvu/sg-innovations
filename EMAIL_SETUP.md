# SG Innovations - Contact Form Setup

## Email Configuration Required

The contact form requires email configuration to send messages. Follow these steps to set it up:

### 1. Create Environment Variables

Create a `.env.local` file in the root directory with the following content:

```env
# Email Configuration for Contact Form
EMAIL_USER=sginnovations36@gmail.com
EMAIL_PASS=your_gmail_app_password_here
EMAIL_TO=sginnovations36@gmail.com
```

### 2. Get Gmail App Password

Since Gmail requires app-specific passwords for SMTP, you need to:

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to **Google Account Settings** → **Security** → **2-Step Verification**
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Use this password (not your regular Gmail password) in the `EMAIL_PASS` variable

### 3. Alternative Email Services

If you prefer not to use Gmail, you can configure other email services by updating the transporter configuration in `src/app/api/contact/route.ts`:

#### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 4. Testing

After setting up the environment variables:

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your email for the message
4. Check the browser console for any error messages

### 5. Troubleshooting

**Common Issues:**

- **"Email service not configured"**: Environment variables are missing or not loaded
- **"Email authentication failed"**: Wrong email or app password
- **"Unable to connect to email server"**: Network or SMTP server issues
- **"Email service timeout"**: Server is slow to respond

**Debug Steps:**

1. Check that `.env.local` exists and has correct values
2. Verify Gmail app password is correct
3. Ensure 2FA is enabled on Gmail account
4. Check server logs for detailed error messages
5. Test with a simple email client first

### 6. Production Deployment

For production deployment (Netlify, Vercel, etc.):

1. Add the environment variables in your hosting platform's settings
2. Never commit `.env.local` to version control
3. Use the same environment variable names in production

---

**Note**: The contact form will show appropriate error messages to users if email sending fails, but you should monitor the server logs for detailed debugging information.
