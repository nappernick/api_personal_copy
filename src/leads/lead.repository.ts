import { DataSource } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { DynamicDatabaseModule } from '../database/database.module';
import { User } from '../users/entities/user.entity';
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadRepository {
  constructor(public dataSource: DataSource) {}

  async findByUserId(luid: number): Promise<Lead[]> {
    return this.dataSource
      .getRepository(Lead)
      .createQueryBuilder('lead')
      .where('lead.luid = :luid', { luid })
      .getMany();
  }

  async findUsersWithLeads(
    offset: number = 0,
    limit: number = 10,
  ): Promise<User[]> {
    // Validate offset and limit
    offset = Math.max(0, Number(offset));
    limit = Math.min(Math.max(1, Number(limit)), 100); // For example, limit the maximum to 100

    try {
      return DynamicDatabaseModule.getRepository(User) // Assuming User repository is what you need
        .createQueryBuilder('user')
        .innerJoin('user.leads', 'lead') // Assuming 'user.leads' is the relation
        .distinct(true) // To return only distinct users
        .skip(offset) // Pagination offset
        .take(limit) // Pagination limit``````
        .getMany(); // Get the results
    } catch (error) {
      // Handle or log the error as needed
      console.error('Error fetching users with leads:', error);
      throw new Error('Unable to fetch users with leads');
    }
  }
}
