import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CottagesService } from './cottages.service';
import { Cottages } from './cottages.model';
import { CreateCottagesDto } from './dto/cottages.dto';
import { Images } from 'src/images/images.model';
import { CreateImageDto } from 'src/images/dto/create-image.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cottages')
@Controller('cottages')
export class CottagesController {
  constructor(private readonly cottagesService: CottagesService) {}

  @ApiOperation({ summary: 'Get all cottages' })
  @ApiOkResponse({ type: [Cottages] })
  @Get('cottages')
  async findAll(): Promise<Cottages[]> {
    return this.cottagesService.findAll();
  }

  @ApiOperation({ summary: 'Add images to a cottage by ID' })
  @ApiOkResponse({ type: [Images] })
  @ApiBody({ type: CreateImageDto })
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, cb) => {
          const fileExtension = file.originalname.split('.').pop();
          cb(null, `${uuidv4()}.${fileExtension}`);
        },
      }),
    }),
  )
  @Post(':id/images')
  async addImage(
    @Param('id', ParseIntPipe) cottageId: number,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<Images[]> {
    const imageUrls = files.map((file) => `uploads/images/${file.filename}`);

    const imageDTOs: CreateImageDto[] = imageUrls.map((imageUrl) => ({
      url: imageUrl,
      cottageId,
    }));

    return this.cottagesService.addImagesToCottage(imageDTOs);
  }

  @ApiOperation({ summary: 'Create a new cottage with an image' })
  @ApiOkResponse({
    description: 'The cottage has been successfully created with its image.',
    type: Cottages,
  })
  @ApiBody({ type: 'multipart/form-data' })
  @UseInterceptors(
    FilesInterceptor('images', 5, {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, cb) => {
          const fileExtension = file.originalname.split('.').pop();
          cb(null, `${uuidv4()}.${fileExtension}`);
        },
      }),
    }),
  )
  @Post('cottages-create')
  async createWithImage(
    @UploadedFiles() files,
    @Body('data') createCottagesDtoString: string,
  ): Promise<Cottages> {
    const createCottagesDto: CreateCottagesDto = JSON.parse(
      createCottagesDtoString,
    );

    const imageUrls = files.map((file) => `uploads/images/${file.filename}`);

    const createdCottage = await this.cottagesService.create(createCottagesDto);

    const imageDTOs: CreateImageDto[] = imageUrls.map((imageUrl) => ({
      url: imageUrl,
      cottageId: createdCottage.id,
    }));

    await this.cottagesService.addImagesToCottage(imageDTOs as any);

    return createdCottage;
  }
}
