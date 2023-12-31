import { Controller, Get, Param } from '@nestjs/common';
import { Invoice } from './entities/invoice.entity';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoiceController {
  constructor(public readonly invoiceService: InvoicesService) {}

  @Get(':invuid')
  getInvoicesByUserId(@Param('invuid') invuid: number): Promise<Invoice[]> {
    return this.invoiceService.getInvoicesByUserId(invuid);
  }

  @Get(':invuid')
  async findByUserId(@Param('invuid') invuid: number) {
    return this.invoiceService.getInvoicesByUserId(invuid);
  }
}
