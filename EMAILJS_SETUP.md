# EmailJS Setup Instructions

Follow these steps to enable email functionality for your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose "Gmail" (since you want to receive emails on Gmail)
4. Follow the setup process to connect your Gmail account
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Content:**
```
Hello Ishan,

You have received a new message from your portfolio contact form:

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update the Code
Replace these values in your Contact.jsx file:
- Replace `'service_contact'` with your Service ID
- Replace `'template_contact'` with your Template ID  
- Replace `'YOUR_PUBLIC_KEY'` with your Public Key

## Example:
```javascript
emailjs.sendForm(
    'service_abc123',        // Your Service ID
    'template_xyz789',       // Your Template ID
    form.current,
    'user_def456'           // Your Public Key
)
```

## Step 6: Test Your Form
1. Fill out your contact form
2. Check your Gmail inbox (ishanrshah087@gmail.com)
3. You should receive the form submission!

## Free Tier Limits
- 200 emails per month
- No credit card required
- Perfect for portfolio contact forms

That's it! Your contact form will now send emails directly to your Gmail account.
