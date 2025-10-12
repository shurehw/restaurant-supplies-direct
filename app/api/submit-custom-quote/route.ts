import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG, verifyEmailConfig } from '@/lib/resend';
import CustomPrintingQuoteEmail from '@/emails/CustomPrintingQuoteEmail';
import * as React from 'react';

export const runtime = 'edge';

interface CustomQuoteData {
  name: string;
  business: string;
  email: string;
  phone: string;
  productType: string;
  quantity?: string;
  details?: string;
}

export async function POST(request: NextRequest) {
  try {
    const config = verifyEmailConfig();
    if (!config.valid) {
      console.error('Email configuration errors:', config.errors);
      return NextResponse.json(
        { error: 'Email service not configured', details: config.errors },
        { status: 500 }
      );
    }

    const data: CustomQuoteData = await request.json();

    // Validate required fields
    const requiredFields: (keyof CustomQuoteData)[] = [
      'name',
      'business',
      'email',
      'phone',
      'productType',
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

    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: data.email,
      subject: `🎨 Custom Printing Quote: ${data.business} (${data.productType})`,
      react: CustomPrintingQuoteEmail({
        ...data,
        submittedAt,
      }) as React.ReactElement,
      tags: [
        { name: 'type', value: 'custom-printing-quote' },
        { name: 'source', value: 'rsd-website' },
        { name: 'productType', value: data.productType },
      ],
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting custom quote:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit quote request',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
