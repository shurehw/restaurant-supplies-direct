import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG, verifyEmailConfig } from '@/lib/resend';
import LALeadEmail from '@/emails/LALeadEmail';
import * as React from 'react';

export const runtime = 'edge';

interface LALeadData {
  name: string;
  business: string;
  email: string;
  phone: string;
  zipCode: string;
  orderType: string;
  message?: string;
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
    const data: LALeadData = await request.json();

    // Validate required fields
    const requiredFields: (keyof LALeadData)[] = [
      'name',
      'business',
      'email',
      'phone',
      'zipCode',
      'orderType',
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate ZIP code format (5 digits)
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(data.zipCode)) {
      return NextResponse.json(
        { error: 'Invalid ZIP code format' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const submittedAt = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: data.email,
      subject: `🎯 New LA Lead: ${data.business} (${data.orderType})`,
      react: LALeadEmail({
        ...data,
        submittedAt,
      }) as React.ReactElement,
      tags: [
        { name: 'type', value: 'la-lead' },
        { name: 'source', value: 'rsd-website' },
        { name: 'orderType', value: data.orderType },
      ],
    });

    // TODO: Also save to database (Vercel Postgres/Supabase)
    // await db.leads.insert({ ...data, submittedAt: new Date(), source: 'LA' });

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting LA lead:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit lead',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
