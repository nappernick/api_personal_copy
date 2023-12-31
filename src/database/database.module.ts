import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Invoice } from '../invoices/entities/invoice.entity';
import { InvoicesModule } from '../invoices/invoices.module';
import { Lead } from '../leads/entities/lead.entity';
import { LeadsModule } from '../leads/leads.module';
import { LoggerMiddleware } from '../loggers/logger.middleware';
import { PhotosModule } from '../photos/photos.module';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { DataSourceOptions, DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

// ! This is called a "dynamic module" and is built to handle our
// very strange setup of each customer having their own DB

// TODO learn if this is necessary - it's not "the way", but a non-
// TODO normal way, which may be required by our multi DB reqs
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
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT') || 306,
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Invoice, Lead, User], // Directly specify entity classes
        // You can also use a glob path pattern as you provided
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('DATABASE_SYNCHRONIZE'), // should be false in production
        autoLoadEntities: true,
      }),
      dataSourceFactory: async (options: DataSourceOptions) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    // Import your feature modules here
    InvoicesModule,
    LeadsModule,
    UsersModule,
    PhotosModule,
  ],
})
export class DynamicDatabaseModule implements NestModule {
  // Apply middleware globally
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // for every route, or specify paths for specific routes.
  }
}
