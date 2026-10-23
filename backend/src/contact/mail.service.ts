import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  async sendEnquiry(enquiry: { name: string; email: string; message: string }) {
    const { SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    if (!SMTP_USER || !SMTP_PASS) {
      this.logger.error('SMTP_USER / SMTP_PASS are not set in backend/.env');
      throw new ServiceUnavailableException('Email is not configured');
    }

    const transport = createTransport({
      service: 'gmail',
      auth: { user: SMTP_USER, pass: SMTP_PASS.replace(/\s+/g, '') },
    });

    try {
      await transport.sendMail({
        from: `"ArthMaa Website" <${SMTP_USER}>`,
        to: CONTACT_TO ?? SMTP_USER,
        replyTo: enquiry.email,
        subject: `New enquiry from ${enquiry.name}`,
        text: `Name: ${enquiry.name}\nEmail: ${enquiry.email}\n\n${enquiry.message}`,
      });
    } catch (err) {
      this.logger.error('Failed to send enquiry email', err as Error);
      throw new ServiceUnavailableException('Could not send message');
    }
  }
}
