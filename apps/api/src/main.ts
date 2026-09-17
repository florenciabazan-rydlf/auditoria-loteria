import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const globalPrefix = 'api';
  const port = Number(process.env.PORT ?? 3000);

  app.setGlobalPrefix(globalPrefix);

  await app.listen(port, '0.0.0.0');

  Logger.log(`Application running on http://localhost:${port}/${globalPrefix}`);
}

void bootstrap();