import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG, verifyEmailConfig } from '@/lib/resend';
import ComingSoonEmail from '@/emails/ComingSoonEmail';
import * as React from 'react';

export const runtime = 'edge';

interface ComingSoonData {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    // Verify email configuration
    const config = verifyEmailConfig();
    if (!config.valid) {
      console.error('Email configuration errors:', config.errors);
      return NextResponse.json(
        { error: 'Email service not configured', details: config.errors },
        { status: 500 }
      );
    }

    // Parse request body
    const data: ComingSoonData = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: `📬 New Coming Soon Signup: ${data.email}`,
      react: ComingSoonEmail({
        ...data,
        submittedAt,
      }) as React.ReactElement,
      tags: [
        { name: 'type', value: 'coming-soon' },
        { name: 'source', value: 'rsd-website' },
      ],
    });

    // TODO: Also save to email marketing list (Mailchimp/ConvertKit)
    // TODO: Save to database
    // await db.signups.insert({ email: data.email, submittedAt: new Date(), source: 'homepage' });

    return NextResponse.json(
      {
        success: true,
        message: 'Email captured successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting coming soon signup:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit signup',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
