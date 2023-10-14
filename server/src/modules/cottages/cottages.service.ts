import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cottages } from './cottages.model';
import { CreateCottagesDto } from './dto/cottages.dto';
import { UpdateCottageDto } from './dto/update-cottage.dto';
import { unlink } from 'fs/promises';
import { Images } from '../images/images.model';
import { Booking } from '../booking/booking.model';
import { CreateImageDto } from '../images/dto/create-image.dto';

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
        {
          association: 'reviews',
          attributes: ['title', 'content', 'rating', 'publicationDate'],
        },
      ],
    });
  }

  async create(createCottagesDto: CreateCottagesDto): Promise<Cottages> {
    return this.cottageModel.create(createCottagesDto as any);
  }

  async findOne(cottageId: number): Promise<Cottages> {
    const cottage = await Cottages.findOne({
      where: { id: cottageId },
      include: [Images, Booking],
    });

    if (!cottage) {
      throw new NotFoundException(`Cottage with ID ${cottageId} not found`);
    }

    return cottage;
  }

  async updateCottage(
    cottageId: number,
    updateData: UpdateCottageDto,
  ): Promise<Cottages> {
    const cottage = await this.cottageModel.findByPk(cottageId);
    if (!cottage) {
      throw new NotFoundException(`Cottage with ID ${cottageId} not found`);
    }

    return cottage.update(updateData);
  }

  async deleteCottage(cottageId: number): Promise<void> {
    const cottage = await this.cottageModel.findByPk(cottageId, {
      include: [Images, Booking],
    });

    if (!cottage) {
      throw new NotFoundException(`Cottage with ID ${cottageId} not found`);
    }

    for (const image of cottage.images) {
      try {
        console.log('Пытаюсь удалить файл:');
        await unlink(`${image.url}`);
      } catch (error) {
        console.error(`Error removing file: ${image.url}`, error);
      }
    }
    console.log('Файл удален:');
    await cottage.destroy();
  }

  async addImagesToCottage(dtos: CreateImageDto[]): Promise<Images[]> {
    return this.imagesModel.bulkCreate(dtos as any);
  }

  async createWithImages(
    createCottagesDto: CreateCottagesDto,
    images: CreateImageDto[],
  ): Promise<Cottages> {
    const cottage = await this.cottageModel.create(createCottagesDto as any);

    if (images && images.length > 0) {
      await Promise.all(
        images.map((img) => {
          img.cottageId = cottage.id;
          return this.imagesModel.create(img as any);
        }),
      );
    }

    return cottage;
  }
}
