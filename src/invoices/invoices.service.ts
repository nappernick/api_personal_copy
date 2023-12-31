import { Injectable, NotFoundException } from '@nestjs/common';
import { Invoice } from './entities/invoice.entity';
import { AppDataSource } from '../modules/database.module';

@Injectable()
export class InvoicesService {
  async getInvoicesByUserId(invuid: number): Promise<Invoice[]> {
    try {
      const invoices = await AppDataSource.getRepository(Invoice)
        .createQueryBuilder('invoice')
        .where('invoice.invuid = :invuid', { invuid })
        .getMany();

      if (invoices.length === 0) {
        throw new NotFoundException(
          `Invoices for User ID ${invuid} not found.`,
        );
      }

      return invoices;
    } catch (error) {
      // Handle specific or generic errors as needed
      throw error;
    }
  }
}
