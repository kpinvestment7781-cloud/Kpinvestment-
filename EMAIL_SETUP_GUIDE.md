# 📧 Gmail Email Notification Setup Guide

This guide will help you set up automatic email notifications when users submit the contact form on your KP Investment website.

## ✅ What You'll Get
- Instant email notifications to `kpinvestment7781@gmail.com`
- Emails contain: Name, Email, Phone, Subject, Message, and Timestamp
- Works alongside your existing WhatsApp notifications
- 100% free (100 emails/month with EmailJS free plan)

---

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account (2 minutes)

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"**
3. Create account with any email
4. Verify your email address

---

### Step 2: Get Gmail App Password (3 minutes)

> **Important:** You need a Gmail App Password, NOT your regular Gmail password!

1. Open **https://myaccount.google.com/** in new tab
2. In the search bar at top, type: **"App passwords"**
3. Click on **"App passwords"** result

   **If you see "2-Step Verification is not set up":**
   - Click **"2-Step Verification"**
   - Click **"Get Started"** and follow steps
   - Come back to App passwords

4. Click **"Select app"** → Choose **"Mail"**
5. Click **"Select device"** → Choose **"Other (Custom name)"**
6. Type: **"KP Investment Website"**
7. Click **"Generate"**
8. **COPY the 16-character password** (format: `xxxx xxxx xxxx xxxx`)
   - Save it somewhere safe temporarily
   - You won't see it again!

---

### Step 3: Add Gmail to EmailJS (2 minutes)

1. Go to EmailJS Dashboard: **https://dashboard.emailjs.com/**
2. Click **"Email Services"** in left sidebar
3. Click **"Add New Service"** button
4. Click on **"Gmail"** icon
5. Fill in:
   - **Service ID:** Leave default or type `gmail_service`
   - **Email Address:** `kpinvestment7781@gmail.com`
   - **Password:** Paste the 16-character App Password from Step 2
6. Click **"Create Service"**
7. **COPY the Service ID** (shown at top, looks like: `service_xxxxxxx`)
   - Save this for Step 5

---

### Step 4: Create Email Template (3 minutes)

1. Click **"Email Templates"** in left sidebar
2. Click **"Create New Template"**
3. **Template Name:** `KP Investment Contact Form`
4. In the email template editor, **REPLACE ALL CONTENT** with this:

```
Subject: New Contact Form Submission - KP Investment

New inquiry from your website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Contact Details
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 Message
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ Received at: {{timestamp}}
🌐 Source: KP Investment Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

5. In **"To email"** field at bottom, enter: `{{to_email}}`
6. Click **"Save"** button
7. **COPY the Template ID** (shown at top, looks like: `template_xxxxxxx`)
   - Save this for Step 5

---

### Step 5: Get Your Public Key (1 minute)

1. Click **"Account"** in left sidebar
2. Click **"General"** tab
3. Scroll to **"Public Key"** section
4. **COPY the Public Key** (looks like: `xxxxxxxxxxxxxx`)
   - Save this for Step 6

---

### Step 6: Update Your Code (1 minute)

Now you have all 3 IDs! Let's add them to your project:

1. Open file: `src/config/emailjs.config.ts`
2. Replace the placeholder values:

```typescript
export const emailJsConfig = {
  // Paste your Public Key from Step 5
  publicKey: "paste_your_public_key_here",

  // Paste your Service ID from Step 3
  serviceId: "paste_your_service_id_here",

  // Paste your Template ID from Step 4
  templateId: "paste_your_template_id_here",

  recipientEmail: "kpinvestment7781@gmail.com"
};
```

3. **Save the file**

---

## ✅ Testing (2 minutes)

1. Open your website
2. Go to the **Contact** page
3. Fill in the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: 9876543210
   - Subject: General Inquiry
   - Message: This is a test message
4. Click **"Send Message"**
5. Check your Gmail inbox: `kpinvestment7781@gmail.com`
6. You should receive an email within 10-30 seconds!

---

## 🎯 What Happens After Setup

When someone submits your contact form:

1. ✅ Form data is saved to Supabase database
2. ✅ WhatsApp message sent to both partners (existing feature)
3. ✅ **Email sent to kpinvestment7781@gmail.com** (new!)
4. ✅ User sees success message

---

## 🔧 Troubleshooting

### Not Receiving Emails?

**Check Spam Folder:**
- Gmail might filter it as spam first time
- Open the email and click "Not spam"

**Verify Configuration:**
1. Check `src/config/emailjs.config.ts` has correct IDs
2. Make sure no spaces in the IDs
3. Make sure IDs don't have quotes inside quotes

**Test in EmailJS Dashboard:**
1. Go to Email Templates
2. Click on your template
3. Click "Test it" button
4. Fill dummy data and send
5. If this works, your EmailJS setup is correct

**Check Browser Console:**
1. Right-click on webpage → Inspect
2. Go to "Console" tab
3. Submit form and check for errors

### Gmail App Password Not Working?

- Make sure 2-Step Verification is enabled on Gmail
- Try generating a new App Password
- Make sure you copied all 16 characters (no spaces)

---

## 📊 EmailJS Free Plan Limits

- **100 emails per month** (free)
- For more emails, upgrade to:
  - 1,000 emails/month = $9/month
  - 10,000 emails/month = $45/month

---

## 🔒 Security Notes

✅ **Your Gmail password is NEVER exposed** in your code
✅ **App Password is stored securely** in EmailJS servers
✅ **Your main Gmail password remains safe**
✅ You can revoke App Password anytime from Google Account settings

---

## 📞 Need Help?

If you face any issues:
1. Check the troubleshooting section above
2. Verify each step was completed correctly
3. Make sure you saved the `emailjs.config.ts` file after editing

---

## 🎉 That's It!

Your email notifications are now set up! Every contact form submission will automatically email you at `kpinvestment7781@gmail.com`.

**Total Setup Time:** ~12 minutes
**Cost:** FREE ✨
