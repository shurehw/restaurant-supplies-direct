import { Resend } from 'resend';

// Initialize Resend client
// Get your API key from: https://resend.com/api-keys
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
export const EMAIL_CONFIG = {
  from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
  to: process.env.RESEND_TO_EMAIL || 'noreply@example.com',
  replyTo: process.env.RESEND_REPLY_TO || 'info@shurehw.com',
};

// Verify configuration
export function verifyEmailConfig(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!process.env.RESEND_API_KEY) {
    errors.push('RESEND_API_KEY is not configured');
  }

  if (!process.env.RESEND_TO_EMAIL) {
    errors.push('RESEND_TO_EMAIL is not configured (where to send form submissions)');
  }

  if (!process.env.RESEND_FROM_EMAIL) {
    errors.push('RESEND_FROM_EMAIL is not configured (sender email address)');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
