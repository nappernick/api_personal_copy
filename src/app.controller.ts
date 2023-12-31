import { Controller, Get } from '@nestjs/common';
import { register } from 'prom-client';

@Controller('metrics')
export class AppController {
  constructor() {}
  @Get('metrics')
  getMetrics() {
    return register.metrics();
  }
}
