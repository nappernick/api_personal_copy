import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersController } from '../users/users.controller';

let cachedApp;

async function bootstrapApp() {
  if (!cachedApp) {
    const app = await NestFactory.createApplicationContext(AppModule);
    cachedApp = {
      usersController: app.get(UsersController),
    };
  }
  return cachedApp;
}

export const handler = async () => {
  const { usersController } = await bootstrapApp();
  try {
    const usersWithLeads = await usersController.findUsersWithLeads();
    return {
      statusCode: 200,
      body: JSON.stringify(usersWithLeads),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `An error occurred: ${error.message}`,
    };
  }
};
