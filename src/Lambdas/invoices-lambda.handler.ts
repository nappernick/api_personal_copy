import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { InvoicesModule } from '../invoices/invoices.module';
import { InvoicesService } from '../invoices/invoices.service';
import {
  createSuccessResponse,
  handleLambdaError,
  parseIntegerOrThrow,
} from './lambda-utils';
import { AppDataSource } from '../modules/database.module';

const logger = new Logger('InvoicesLambdaHandler');
let app;

export const handler = async (event, context) => {
  if (!app) {
    await AppDataSource.initialize();
    app = await NestFactory.createApplicationContext(InvoicesModule);
  }

  const invoicesService = app.get(InvoicesService);
  const userId = parseIntegerOrThrow(event.pathParameters.userId, 'userId');

  try {
    logger.log(`Received userId: ${userId} - Event: ${JSON.stringify(event)}`);
    const invoices = await invoicesService.getInvoicesByUserId(userId);

    context.callbackWaitsForEmptyEventLoop = false; // Allow AWS Lambda to reuse the connection

    return createSuccessResponse(invoices);
  } catch (error) {
    logger.error('Error occurred', error.stack);
    return handleLambdaError(error);
  }
};
