import * as React from 'react';

interface CustomPrintingQuoteEmailProps {
  name: string;
  business: string;
  email: string;
  phone: string;
  productType: string;
  quantity?: string;
  details?: string;
  submittedAt: string;
}

export const CustomPrintingQuoteEmail: React.FC<CustomPrintingQuoteEmailProps> = ({
  name,
  business,
  email,
  phone,
  productType,
  quantity,
  details,
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
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
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
          background: #2563EB;
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
          background: #F97316;
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
          <h1>🎨 Custom Printing Quote Request</h1>
          <span className="badge">HIGH VALUE LEAD</span>
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
              <a href={`mailto:${email}`} style={{ color: '#F97316' }}>{email}</a>
            </div>
          </div>

          <div className="field">
            <div className="label">Phone</div>
            <div className="value">
              <a href={`tel:${phone}`} style={{ color: '#F97316' }}>{phone}</a>
            </div>
          </div>

          <div className="field">
            <div className="label">Product Type</div>
            <div className="value">{productType}</div>
          </div>

          {quantity && (
            <div className="field">
              <div className="label">Estimated Quantity</div>
              <div className="value">{quantity}</div>
            </div>
          )}

          {details && (
            <div className="field">
              <div className="label">Additional Details</div>
              <div className="value">{details}</div>
            </div>
          )}

          <div className="field">
            <div className="label">Submitted At</div>
            <div className="value">{submittedAt}</div>
          </div>

          <div className="cta">
            <a href={`mailto:${email}?subject=Re: Custom Printing Quote`} className="button">
              Send Quote
            </a>
          </div>
        </div>

        <div className="footer">
          <p>
            This quote request was submitted via the Custom Printing page<br />
            <strong>restaurantsuppliesdirect.com/custom-printing</strong>
          </p>
          <p style={{ marginTop: '10px' }}>
            💰 Custom printing leads have high conversion rates. Respond within 4 hours for best results.
          </p>
        </div>
      </div>
    </body>
  </html>
);

export default CustomPrintingQuoteEmail;
