import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { createTransport } from 'nodemailer';

interface Enquiry {
  name: string;
  email: string;
  message: string;
}

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  async sendEnquiry(enquiry: Enquiry) {
    // Hosts like Render's free plan block SMTP ports, so prefer the HTTPS API.
    if (process.env.RESEND_API_KEY) return this.sendWithResend(enquiry);
    return this.sendWithSmtp(enquiry);
  }

  private subject(e: Enquiry) {
    return `New enquiry from ${e.name}`;
  }

  private text(e: Enquiry) {
    return `Name: ${e.name}\nEmail: ${e.email}\n\n${e.message}`;
  }

  private async sendWithResend(e: Enquiry) {
    const to = process.env.CONTACT_TO;
    if (!to) {
      this.logger.error('CONTACT_TO is not set');
      throw new ServiceUnavailableException('Email is not configured');
    }
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.MAIL_FROM ?? 'ArthMaa Website <onboarding@resend.dev>',
          to: [to],
          reply_to: e.email,
          subject: this.subject(e),
          text: this.text(e),
        }),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    } catch (err) {
      this.logger.error('Failed to send enquiry email', err as Error);
      throw new ServiceUnavailableException('Could not send message');
    }
  }

  private async sendWithSmtp(e: Enquiry) {
    const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    if (!SMTP_USER || !SMTP_PASS) {
      this.logger.error('Set RESEND_API_KEY, or SMTP_USER / SMTP_PASS, in the environment');
      throw new ServiceUnavailableException('Email is not configured');
    }

    const transport = createTransport({
      service: 'gmail',
      auth: { user: SMTP_USER, pass: SMTP_PASS.replace(/\s+/g, '') },
      connectionTimeout: 10000,
      socketTimeout: 15000,
    });

    try {
      await transport.sendMail({
        from: `"ArthMaa Website" <${SMTP_USER}>`,
        to: CONTACT_TO ?? SMTP_USER,
        replyTo: e.email,
        subject: this.subject(e),
        text: this.text(e),
      });
    } catch (err) {
      this.logger.error('Failed to send enquiry email', err as Error);
      throw new ServiceUnavailableException('Could not send message');
    }
  }
}
