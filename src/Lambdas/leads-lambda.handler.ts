import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { LeadsModule } from '../leads/leads.module';
import { LeadsService } from '../leads/leads.service';
import { AppDataSource } from '../modules/database.module';
import {
  createSuccessResponse,
  handleLambdaError,
  parseIntegerOrThrow,
} from './lambda-utils';

const logger = new Logger('LeadsLambdaHandler');
let app;

export const handler = async (event, context) => {
  if (!app) {
    await AppDataSource.initialize();
    app = await NestFactory.createApplicationContext(LeadsModule);
  }

  const leadsService = app.get(LeadsService);
  const leadId = parseIntegerOrThrow(event.pathParameters.leadId, 'leadId');

  try {
    logger.log(`Received leadId: ${leadId} - Event: ${JSON.stringify(event)}`);
    const leads = await leadsService.getLeadsByLeadId(leadId);

    context.callbackWaitsForEmptyEventLoop = false; // Allow AWS Lambda to reuse the connection

    return createSuccessResponse(leads);
  } catch (error) {
    logger.error('Error occurred', error.stack);
    return handleLambdaError(error);
  }
};
