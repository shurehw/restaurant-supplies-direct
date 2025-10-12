import * as React from 'react';

interface LALeadEmailProps {
  name: string;
  business: string;
  email: string;
  phone: string;
  zipCode: string;
  orderType: string;
  message?: string;
  submittedAt: string;
}

export const LALeadEmail: React.FC<LALeadEmailProps> = ({
  name,
  business,
  email,
  phone,
  zipCode,
  orderType,
  message,
  submittedAt,
}) => (
  <html>
    <head>
      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #0F172A;
          background-color: #F8FAFC;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }
        .badge {
          display: inline-block;
          background: #F97316;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 10px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #E2E8F0;
        }
        .field:last-child {
          border-bottom: none;
        }
        .label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748B;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .value {
          font-size: 16px;
          color: #0F172A;
          font-weight: 500;
        }
        .footer {
          background: #F8FAFC;
          padding: 20px 30px;
          text-align: center;
          font-size: 12px;
          color: #64748B;
        }
        .cta {
          text-align: center;
          margin: 30px 0;
        }
        .button {
          display: inline-block;
          background: #2563EB;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1>🎯 New LA Lead Submission</h1>
          <span className="badge">RSD-LA-LEAD</span>
        </div>

        <div className="content">
          <div className="field">
            <div className="label">Contact Name</div>
            <div className="value">{name}</div>
          </div>

          <div className="field">
            <div className="label">Business Name</div>
            <div className="value">{business}</div>
          </div>

          <div className="field">
            <div className="label">Email</div>
            <div className="value">
              <a href={`mailto:${email}`} style={{ color: '#2563EB' }}>{email}</a>
            </div>
          </div>

          <div className="field">
            <div className="label">Phone</div>
            <div className="value">
              <a href={`tel:${phone}`} style={{ color: '#2563EB' }}>{phone}</a>
            </div>
          </div>

          <div className="field">
            <div className="label">ZIP Code</div>
            <div className="value">{zipCode}</div>
          </div>

          <div className="field">
            <div className="label">Primary Interest</div>
            <div className="value">{orderType}</div>
          </div>

          {message && (
            <div className="field">
              <div className="label">Message</div>
              <div className="value">{message}</div>
            </div>
          )}

          <div className="field">
            <div className="label">Submitted At</div>
            <div className="value">{submittedAt}</div>
          </div>

          <div className="cta">
            <a href={`mailto:${email}?subject=Re: Restaurant Supplies Inquiry`} className="button">
              Reply to Lead
            </a>
          </div>
        </div>

        <div className="footer">
          <p>
            This lead was submitted via the LA Hospitality Supplies page<br />
            <strong>restaurantsuppliesdirect.com/la-hospitality-supplies</strong>
          </p>
          <p style={{ marginTop: '10px' }}>
            Respond within 1 business day for best conversion rates
          </p>
        </div>
      </div>
    </body>
  </html>
);

export default LALeadEmail;
