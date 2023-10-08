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

  // @ApiOperation({ summary: 'Create a new cottage' })
  // @ApiOkResponse({ type: Cottages })
  // @ApiBody({ type: CreateCottagesDto })
  // @Post('cottages-create')
  // async create(
  //   @Body() CreateCottagesDto: CreateCottagesDto,
  // ): Promise<Cottages> {
  //   return this.cottagesService.create(CreateCottagesDto);
  // }

  @ApiOperation({ summary: 'Add an image to a cottage by ID' })
  @ApiOkResponse({ type: Images })
  @ApiBody({ type: CreateImageDto })
  @Post(':id/images')
  async addImage(
    @Param('id', ParseIntPipe) cottageId: number,
    @Body() createImageDto: CreateImageDto,
  ): Promise<Images[]> {
    const newImageDto = { ...createImageDto, cottageId };
    return this.cottagesService.addImagesToCottage(newImageDto as any);
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

    console.log(files); // массив загруженных файлов

    const imageUrls = files.map((file) => `uploads/images/${file.filename}`);

    const createdCottage = await this.cottagesService.create(createCottagesDto);

    for (const imageUrl of imageUrls) {
      const createImageDto: CreateImageDto = {
        url: imageUrl,
        cottageId: createdCottage.id,
      };
      await this.cottagesService.addImagesToCottage(createImageDto as any);
    }

    return createdCottage;
  }
}
