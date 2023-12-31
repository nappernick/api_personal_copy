import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    public usersRepository: Repository<User>,
  ) {}

  async findUsersWithLeads(): Promise<User[]> {
    return this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.leads', 'leads')
      .where('leads.luid IS NOT NULL')
      .limit(20)
      .getMany();
  }
}
