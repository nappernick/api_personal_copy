import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from './invoices/invoice.repository';
import { LeadRepository } from './leads/lead.repository';
// import { PhotoStorageService } from './photo-storage.service';
import { Invoice } from './invoices/entities/invoice.entity';
import { Lead } from './leads/entities/lead.entity';
import { AppDataSource } from './modules/database.module';
import { User } from './users/entities/user.entity';
import { UsersRepository } from './users/user.repository';

@Injectable()
export class AppService {
  constructor(
    public leadRepository: LeadRepository,
    public invoiceRepository: InvoiceRepository,
    public userRepository: UsersRepository,
    // public dataSource: AppDataSource,
    // public dataSource photoStorageService: PhotoStorageService,
  ) {}

  async getLeadsByUserId(userId: number): Promise<Lead[]> {
    await AppDataSource.initialize();

    const result = this.leadRepository.findByUserId(userId);

    await AppDataSource.destroy();

    return result;
  }

  async getInvoicesByUserId(userId: number): Promise<Invoice[]> {
    await AppDataSource.initialize();

    const result = this.leadRepository.findByUserId(userId);

    await AppDataSource.destroy();

    return result;
  }

  async findUsersWithLeads(): Promise<User[]> {
    return this.leadRepository.find();
  }

  getHello() {
    const hello = 'Hello World!';
    console.log(hello);
    return hello;
  }

  // ! Need to define this once shape is known
  // async postPhoto(file: any): Promise<any> {
  //   return this.photoStorageService.storePhoto(file);
  // }
}
