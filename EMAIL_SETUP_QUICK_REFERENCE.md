# 📧 Email Setup - Quick Reference

## 🎯 Three IDs You Need

After completing the setup in EmailJS, you need these 3 values:

| ID Type | Where to Find | Looks Like | Example |
|---------|---------------|------------|---------|
| **Public Key** | Account > General | 14 characters | `Xk7J9mP2nQ5wR8` |
| **Service ID** | Email Services | `service_xxxxx` | `service_abc123` |
| **Template ID** | Email Templates | `template_xxxxx` | `template_xyz789` |

---

## ⚡ Quick Setup Checklist

- [ ] Create EmailJS account at https://emailjs.com
- [ ] Generate Gmail App Password at https://myaccount.google.com
- [ ] Add Gmail service in EmailJS with App Password
- [ ] Copy **Service ID**
- [ ] Create email template with the provided content
- [ ] Copy **Template ID**
- [ ] Get **Public Key** from Account settings
- [ ] Update `src/config/emailjs.config.ts` with all 3 IDs
- [ ] Test the contact form

---

## 📝 Where to Add the IDs

**File:** `src/config/emailjs.config.ts`

```typescript
export const emailJsConfig = {
  publicKey: "YOUR_PUBLIC_KEY_HERE",      // ← Paste Public Key here
  serviceId: "YOUR_SERVICE_ID_HERE",      // ← Paste Service ID here
  templateId: "YOUR_TEMPLATE_ID_HERE",    // ← Paste Template ID here
  recipientEmail: "kpinvestment7781@gmail.com"
};
```

---

## 🧪 Quick Test

1. Fill contact form on your website
2. Click "Send Message"
3. Check `kpinvestment7781@gmail.com` inbox
4. Email should arrive within 10-30 seconds

---

## ⚠️ Common Mistakes

❌ **Don't do this:**
- Using regular Gmail password (use App Password!)
- Adding spaces in the IDs
- Forgetting to save the config file

✅ **Do this:**
- Use 16-character App Password from Google
- Copy IDs exactly as shown
- Save file after pasting IDs

---

## 🔗 Important Links

- **EmailJS Dashboard:** https://dashboard.emailjs.com
- **Gmail Account:** https://myaccount.google.com
- **App Passwords:** https://myaccount.google.com/apppasswords

---

## 💡 How It Works

```
User fills form
      ↓
Form submitted
      ↓
   ┌─────────────────────┐
   │ Two notifications:  │
   │ 1. WhatsApp ✅      │
   │ 2. Email ✅         │
   └─────────────────────┘
      ↓
You get notified on both!
```

---

## 📊 Stats

- **Free tier:** 100 emails/month
- **Email delivery:** 10-30 seconds
- **Setup time:** ~12 minutes
- **Cost:** FREE

---

See **EMAIL_SETUP_GUIDE.md** for detailed step-by-step instructions.
