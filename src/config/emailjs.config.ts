/**
 * EmailJS Configuration
 *
 * Setup Instructions:
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Add Gmail service with your Gmail App Password
 * 3. Create an email template
 * 4. Replace the values below with your actual IDs
 */

export const emailJsConfig = {
  // Your EmailJS Public Key (found in Account > General)
  publicKey: "anBuzWnL6qj_D_FGw",

  // Your Service ID (from Email Services section)
  serviceId: "service_eq7o4mr",

  // Your Template ID (from Email Templates section)
  templateId: "template_paxml9l",

  // Email recipient (your Gmail)
  recipientEmail: "kpinvestment7781@gmail.com",
};

// Validation helper
export const isEmailJsConfigured = () => {
  return (
    emailJsConfig.publicKey !== "YOUR_PUBLIC_KEY_HERE" &&
    emailJsConfig.serviceId !== "YOUR_SERVICE_ID_HERE" &&
    emailJsConfig.templateId !== "YOUR_TEMPLATE_ID_HERE" &&
    emailJsConfig.publicKey.length > 0 &&
    emailJsConfig.serviceId.length > 0 &&
    emailJsConfig.templateId.length > 0
  );
};
