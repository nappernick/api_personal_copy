import { Controller, Get, Param } from '@nestjs/common';
import { Lead } from './entities/lead.entity';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(public readonly leadsService: LeadsService) {}

  @Get(':luid')
  async getLeadsByUserId(@Param('luid') luid: number): Promise<Lead[]> {
    return await this.leadsService.getLeadsByUid(luid);
  }

  // Add endpoints for create, update, delete, and find by id
}
