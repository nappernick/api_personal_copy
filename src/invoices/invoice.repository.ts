import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceRepository {
  constructor(public dataSource: DataSource) {}

  async findByUserId(invuid: number): Promise<Invoice[]> {
    // Use the repository to perform the operation:
    // return await this.repo.find({ where: { invuid } });

    // Or use the dataSource to create a custom query:
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const result = await queryRunner.manager.find(Invoice, {
        where: { invuid },
      });
      return result;
    } finally {
      // Make sure to release the query runner after you're done
      await queryRunner.release();
    }
  }
}
