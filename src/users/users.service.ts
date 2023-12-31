import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm'; // Import DataSource
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(public dataSource: DataSource) {}

  async findUsersWithLeads(): Promise<User[]> {
    return this.dataSource
      .getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.leads', 'leads')
      .where('leads.luid IS NOT NULL')
      .getMany();
  }
}
