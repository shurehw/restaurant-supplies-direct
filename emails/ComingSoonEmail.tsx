import * as React from 'react';

interface ComingSoonEmailProps {
  email: string;
  submittedAt: string;
}

export const ComingSoonEmail: React.FC<ComingSoonEmailProps> = ({
  email,
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
      `}</style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1>📬 New Coming Soon Signup</h1>
        </div>

        <div className="content">
          <div className="field">
            <div className="label">Email Address</div>
            <div className="value">
              <a href={`mailto:${email}`} style={{ color: '#2563EB' }}>{email}</a>
            </div>
          </div>

          <div className="field">
            <div className="label">Submitted At</div>
            <div className="value">{submittedAt}</div>
          </div>
        </div>

        <div className="footer">
          <p>
            This email was captured via the coming soon page<br />
            <strong>restaurantsuppliesdirect.com</strong>
          </p>
          <p style={{ marginTop: '10px' }}>
            Add to your email marketing list for launch announcements
          </p>
        </div>
      </div>
    </body>
  </html>
);

export default ComingSoonEmail;
