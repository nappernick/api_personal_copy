import { DataSource } from 'typeorm';

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadsService {
  constructor(private readonly dataSource: DataSource) {}

  async getLeadsByUid(luid: number): Promise<Lead[]> {
    try {
      const leads = await this.dataSource
        .getRepository(Lead)
        .createQueryBuilder('lead')
        .where('lead.luid = :luid', { luid })
        .getMany();

      if (leads.length === 0) {
        throw new NotFoundException(`Leads for User ID ${luid} not found.`);
      }

      return leads;
    } catch (error) {
      // Optionally, log the error or handle specific error types differently
      throw new InternalServerErrorException('Failed to retrieve leads');
    }
  }
}
