import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Invoice } from './entities/invoice.entity';
import { InvoiceController } from './invoices.controller';
import { InvoicesService } from './invoices.service';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice, User])], // Register entities
  providers: [InvoicesService, UsersService], // Include updated services
  controllers: [InvoiceController],
  exports: [TypeOrmModule],
})
export class InvoicesModule {}
