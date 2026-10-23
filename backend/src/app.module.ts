import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module.js';
import { ContactController } from './contact/contact.controller.js';
import { MailService } from './contact/mail.service.js';

@Module({
  imports: [CatalogModule],
  controllers: [ContactController],
  providers: [MailService],
})
export class AppModule {}
