import { Body, Controller, Get, Post } from '@nestjs/common';
import { CottagesService } from './cottages.service';
import { Cottages } from './cottages.model';
import { CreateCottagesDto } from './dto/cottages.dto';

@Controller('cottages')
export class CottagesController {
  constructor(private readonly cottagesService: CottagesService) {}

  @Get()
  async findAll(): Promise<Cottages[]> {
    return this.cottagesService.findAll();
  }

  @Post()
  async create(
    @Body() CreateCottagesDto: CreateCottagesDto,
  ): Promise<Cottages> {
    return this.cottagesService.create(CreateCottagesDto);
  }
}
