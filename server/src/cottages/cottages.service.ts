import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cottages } from './cottages.model';
import { CreateCottagesDto } from './dto/cottages.dto';
import { CreateImageDto } from 'src/images/dto/create-image.dto';
import { Images } from 'src/images/images.model';

@Injectable()
export class CottagesService {
  constructor(
    @InjectModel(Cottages) private readonly cottageModel: typeof Cottages,
    @InjectModel(Images) private readonly imagesModel: typeof Images,
  ) {}

  async findAll(): Promise<Cottages[]> {
    return this.cottageModel.findAll({
      include: [
        {
          association: 'images',
          attributes: ['url'],
        },
      ],
    });
  }

  async create(createCottagesDto: CreateCottagesDto): Promise<Cottages> {
    return this.cottageModel.create(createCottagesDto as any);
  }

  async addImageToCottage(dto: CreateImageDto): Promise<Images> {
    return this.imagesModel.create({
      url: dto.url,
      cottageId: dto.cottageId,
    });
  }
}
