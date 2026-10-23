try {
  process.loadEnvFile();
} catch {
  // no .env file; rely on real environment variables
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: (process.env.FRONTEND_URL ?? 'http://localhost:3000').split(',').map((o) => o.trim()),
  });
  await app.listen(process.env.PORT ?? 4000);
}
await bootstrap();
