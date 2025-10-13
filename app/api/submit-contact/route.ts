import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, inquiryType } = body;

    // Validate required fields
    if (!name || !email || !message || !inquiryType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Format inquiry type for display
    const inquiryTypeMap: Record<string, string> = {
      general: "General Inquiry",
      bulk_order: "Bulk Order",
      custom_printing: "Custom Printing",
      wholesale: "Wholesale Program",
      la_delivery: "LA Local Delivery",
      support: "Support",
    };
    const inquiryTypeLabel = inquiryTypeMap[inquiryType] || inquiryType;

    // Send email via Resend
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { font-size: 16px; color: #000; }
            .message-box { background: #fff; padding: 15px; border-left: 4px solid #000; margin-top: 10px; }
            .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New ${inquiryTypeLabel}</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #000;">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #000;">${phone}</a></div>
              </div>
              ` : ''}
              ${company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Inquiry Type</div>
                <div class="value">${inquiryTypeLabel}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              Received ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@restaurantsuppliesdirect.com",
      to: process.env.RESEND_TO_EMAIL || "leads@shurehw.com",
      replyTo: email,
      subject: `[RSD] ${inquiryTypeLabel} from ${name}`,
      html: emailHtml,
    });

    // Log successful submission
    console.log("Contact form submission processed:", {
      name,
      email,
      inquiryType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
