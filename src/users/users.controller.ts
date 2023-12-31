import { Controller, Get } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('with-leads')
  async findUsersWithLeads(): Promise<User[]> {
    return await this.usersService.findUsersWithLeads();
  }
}
