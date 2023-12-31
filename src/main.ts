import { fastify, FastifyInstance } from 'fastify';
import { PinoLogger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { setDatabaseConfig } from './helpers';

// TODO Setup separate schema for company configs => lookup a company and get their config
export interface NestApp {
  app: NestFastifyApplication;
  instance: FastifyInstance;
}

async function bootstrapServer(): Promise<NestApp> {
  const instance = fastify({ logger: true });
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(instance),
    { logger: true },
  );

  app.useLogger(app.get(PinoLogger));

  const configService = app.get(ConfigService);

  // Retrieve the prefix for DB-related environment variables
  setDatabaseConfig(configService);

  app.getHttpServer().get('/metrics', metricsService.countHttpRequest('count'));

  // app.setGlobalPrefix(configService.get('API_PREFIX'));

  // Updated CORS configuration based on environment
  app.enableCors({
    origin: configService.get('CORS_ORIGIN'), // Now you can centrally manage origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Setup Graceful Shutdown, Swagger, and Health Check here if necessary

  await app.init();
  return { app, instance };
}

// Consider having a separate loadConfig function to handle config loading

bootstrapServer();
export default bootstrapServer;
