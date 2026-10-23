import { BadRequestException, Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MailService } from './mail.service.js';

interface ContactMessage {
  name?: string;
  email?: string;
  message?: string;
}

export const BUSINESS = {
  name: 'ArthMaa Crafts & Decor',
  phone: '0762098329',
  whatsapp: '94762098329',
};

@Controller()
export class ContactController {
  private readonly logger = new Logger(ContactController.name);

  constructor(private readonly mail: MailService) {}

  @Get('business')
  business() {
    return BUSINESS;
  }

  // No database: each enquiry is emailed to the owner (see .env).
  @Post('contact')
  async send(@Body() body: ContactMessage) {
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    if (!name || !email || !message) {
      throw new BadRequestException('Name, email and message are required');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new BadRequestException('Please enter a valid email address');
    }
    if (message.length > 2000) throw new BadRequestException('Message is too long');
    await this.mail.sendEnquiry({ name, email, message });
    this.logger.log(`Enquiry emailed from ${name} (${email})`);
    return { ok: true };
  }
}
