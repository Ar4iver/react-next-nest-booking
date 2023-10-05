import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cottages } from './cottages.model';
import { CreateCottagesDto } from './dto/cottages.dto';
import { CreateImageDto } from 'src/images/dto/create-image.dto';
import { Images } from 'src/images/images.model';

@Injectable()
export class CottagesService {
  imagesModel: any;
  constructor(
    @InjectModel(Cottages)
    private cottageModel: typeof Cottages,
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

  async create(CreateCottagesDto: CreateCottagesDto): Promise<Cottages> {
    return this.cottageModel.create(CreateCottagesDto);
  }

  async addImageToCottage(dto: CreateImageDto): Promise<Images> {
    const image = new this.imagesModel();
    image.url = dto.url;
    image.cottageId = dto.cottageId;
    return image.save();
  }
}
