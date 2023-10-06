import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CottagesService } from './cottages.service';
import { Cottages } from './cottages.model';
import { CreateCottagesDto } from './dto/cottages.dto';
import { Images } from 'src/images/images.model';
import { CreateImageDto } from 'src/images/dto/create-image.dto';

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

  @Post(':id/images')
  async addImage(
    @Param('id', ParseIntPipe) cottageId: number,
    @Body() createImageDto: CreateImageDto,
  ): Promise<Images> {
    const newImageDto = { ...createImageDto, cottageId };
    return this.cottagesService.addImageToCottage(newImageDto);
  }
}
