# 📧 Gmail Email Setup Guide (हिंदी में)

## 📱 क्या होगा इस Setup के बाद?

जब कोई आपकी website पर Contact Form भरेगा, तो:
1. ✅ WhatsApp message आएगा (पहले से है)
2. ✅ **Email आएगा kpinvestment7781@gmail.com पर** (नया!)

---

## 🚀 Setup Steps (कुल समय: 12 मिनट)

### Step 1: EmailJS Account बनाएं (2 मिनट)

1. इस link पर जाएं: **https://www.emailjs.com/**
2. **"Sign Up"** पर click करें
3. Email डालें और account बनाएं
4. अपनी email verify करें

---

### Step 2: Gmail App Password बनाएं (3 मिनट)

> **Important:** Normal Gmail password नहीं, App Password चाहिए!

1. इस link पर जाएं: **https://myaccount.google.com/**
2. ऊपर search bar में लिखें: **"App passwords"**
3. **"App passwords"** पर click करें

   **अगर "2-Step Verification is not set up" दिखे:**
   - **"2-Step Verification"** पर click करें
   - **"Get Started"** करें और steps follow करें
   - फिर वापस App passwords पर आएं

4. **"Select app"** → **"Mail"** चुनें
5. **"Select device"** → **"Other (Custom name)"** चुनें
6. लिखें: **"KP Investment Website"**
7. **"Generate"** पर click करें
8. **16 अक्षरों का password COPY करें** (जैसे: `xxxx xxxx xxxx xxxx`)
   - इसे कहीं safe जगह save करें
   - दोबारा नहीं दिखेगा!

---

### Step 3: EmailJS में Gmail जोड़ें (2 मिनट)

1. **https://dashboard.emailjs.com/** पर जाएं
2. बाईं तरफ **"Email Services"** पर click करें
3. **"Add New Service"** button पर click करें
4. **"Gmail"** icon पर click करें
5. भरें:
   - **Service ID:** जो दिख रहा है वो रहने दें
   - **Email Address:** `kpinvestment7781@gmail.com`
   - **Password:** Step 2 का 16-character password paste करें
6. **"Create Service"** पर click करें
7. **Service ID को COPY करें** (ऊपर दिखेगा, जैसे: `service_xxxxxxx`)
   - इसे Step 6 के लिए save करें

---

### Step 4: Email Template बनाएं (3 मिनट)

1. बाईं तरफ **"Email Templates"** पर click करें
2. **"Create New Template"** पर click करें
3. **Template Name:** `KP Investment Contact Form`
4. Template editor में, **सारा content delete करके** यह paste करें:

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

5. नीचे **"To email"** में लिखें: `{{to_email}}`
6. **"Save"** button पर click करें
7. **Template ID को COPY करें** (ऊपर दिखेगा, जैसे: `template_xxxxxxx`)
   - इसे Step 6 के लिए save करें

---

### Step 5: Public Key लें (1 मिनट)

1. बाईं तरफ **"Account"** पर click करें
2. **"General"** tab पर click करें
3. नीचे scroll करके **"Public Key"** section ढूंढें
4. **Public Key को COPY करें** (जैसे: `xxxxxxxxxxxxxx`)
   - इसे Step 6 के लिए save करें

---

### Step 6: अपने Code में IDs डालें (1 मिनट)

अब आपके पास तीनों IDs हैं! चलिए code में डालते हैं:

1. File खोलें: `src/config/emailjs.config.ts`
2. ये तीन चीजें replace करें:

```typescript
export const emailJsConfig = {
  // अपना Public Key (Step 5 से) यहाँ paste करें
  publicKey: "यहाँ_अपना_public_key_paste_करें",

  // अपना Service ID (Step 3 से) यहाँ paste करें
  serviceId: "यहाँ_अपना_service_id_paste_करें",

  // अपना Template ID (Step 4 से) यहाँ paste करें
  templateId: "यहाँ_अपना_template_id_paste_करें",

  recipientEmail: "kpinvestment7781@gmail.com"
};
```

3. **File को Save करें** (Ctrl+S / Cmd+S)

---

## ✅ Testing करें (2 मिनट)

1. अपनी website खोलें
2. **Contact** page पर जाएं
3. Form में test data भरें:
   - Name: Test User
   - Email: test@example.com
   - Phone: 9876543210
   - Subject: General Inquiry
   - Message: This is a test message
4. **"Send Message"** पर click करें
5. अपनी Gmail inbox check करें: `kpinvestment7781@gmail.com`
6. 10-30 seconds में email आ जाएगा!

---

## 🔧 Problem हो तो?

### Email नहीं आ रहा?

**Spam Folder Check करें:**
- Gmail पहली बार spam में डाल सकता है
- Email खोलें और "Not spam" पर click करें

**Configuration Check करें:**
1. `src/config/emailjs.config.ts` में सही IDs हैं?
2. IDs में extra spaces तो नहीं?
3. सारे IDs सही से paste किए?

**Browser Console Check करें:**
1. Webpage पर right-click → Inspect
2. "Console" tab पर जाएं
3. Form submit करें और errors देखें

---

## 📊 EmailJS Free Plan

- **100 emails हर महीने** (बिलकुल free)
- ज्यादा emails चाहिए तो:
  - 1,000 emails/month = $9/month (₹750 लगभग)
  - 10,000 emails/month = $45/month (₹3750 लगभग)

---

## 🔒 Security

✅ आपका Gmail password कभी code में नहीं आएगा
✅ App Password EmailJS servers पर safe रहता है
✅ आपका main Gmail password safe रहेगा
✅ App Password कभी भी revoke कर सकते हैं

---

## 📞 Help चाहिए?

1. ऊपर दिए गए troubleshooting steps try करें
2. हर step फिर से check करें
3. Config file save करना न भूलें

---

## 🎯 जरूरी बातें याद रखें

| क्या चाहिए | कहाँ से मिलेगा | कैसा दिखेगा |
|-----------|--------------|------------|
| **Public Key** | Account > General | 14 characters |
| **Service ID** | Email Services | `service_xxxxx` |
| **Template ID** | Email Templates | `template_xxxxx` |

---

## 💡 कैसे काम करता है?

```
User form भरता है
      ↓
Form submit होता है
      ↓
   ┌─────────────────────┐
   │ दो notifications:   │
   │ 1. WhatsApp ✅      │
   │ 2. Email ✅         │
   └─────────────────────┘
      ↓
आपको दोनों पर message मिलता है!
```

---

## 🎉 बस हो गया!

अब हर contact form submission पर आपको `kpinvestment7781@gmail.com` पर email आएगा!

**Total Setup Time:** लगभग 12 मिनट
**खर्चा:** FREE ✨
