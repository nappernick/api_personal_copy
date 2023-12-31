import { DataSource } from 'typeorm';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DynamicDatabaseModule } from './database/database.module';
import { setDatabaseConfig } from './helpers';
import { Invoice } from './invoices/entities/invoice.entity';
import { LoggerMiddleware } from './loggers/logger.middleware';
import bootstrapserver from './main';
import { User } from './users/entities/user.entity';
import { Lead } from './leads/entities/lead.entity';

const setDBContext = async () => {
  const { app } = await bootstrapserver();
  const configService = app.get(ConfigService);

  const { useDBPrefix } = setDatabaseConfig(configService);
  if (!useDBPrefix) {
    throw new Error(`The 'USE_DB' environment variable is not set`);
  }

  return useDBPrefix;
};

const useDBPrefix = setDBContext();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>(`${useDBPrefix}_HOST`),
        port: configService.get<number>('DATABASE_PORT') || 3306, // Assuming this is set directly
        username: configService.get<string>(`${useDBPrefix}_USER`),
        password: configService.get<string>(`${useDBPrefix}_PASSWORD`),
        database: configService.get<string>(`${useDBPrefix}_NAME`),
        entities: [Invoice, Lead, User],
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // should be false in production
        autoLoadEntities: true,
      }),
    }),
    // other modules are imported into dynamic module
    DynamicDatabaseModule,
  ],
})
export class AppModule implements NestModule {
  constructor(public dataSource: DataSource) {}

  // Apply middleware globally
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // for every route, or specify paths for specific routes.
  }
}
