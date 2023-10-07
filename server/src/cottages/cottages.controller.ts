import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CottagesService } from './cottages.service';
import { Cottages } from './cottages.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  @Get()
  async findAll(): Promise<Cottages[]> {
    return this.cottagesService.findAll();
  }

  @ApiOperation({ summary: 'Create a new cottage' })
  @ApiOkResponse({ type: Cottages })
  @ApiBody({ type: CreateCottagesDto })
  @Post()
  async create(
    @Body() CreateCottagesDto: CreateCottagesDto,
  ): Promise<Cottages> {
    return this.cottagesService.create(CreateCottagesDto);
  }

  @ApiOperation({ summary: 'Add an image to a cottage by ID' })
  @ApiOkResponse({ type: Images })
  @ApiBody({ type: CreateImageDto })
  @Post(':id/images')
  async addImage(
    @Param('id', ParseIntPipe) cottageId: number,
    @Body() createImageDto: CreateImageDto,
  ): Promise<Images> {
    const newImageDto = { ...createImageDto, cottageId };
    return this.cottagesService.addImageToCottage(newImageDto);
  }

  @ApiOperation({ summary: 'Upload an image for a specific cottage by ID' })
  @ApiOkResponse({
    description: 'The image has been successfully uploaded.',
    type: 'object',
  })
  @ApiBody({ type: 'multipart/form-data' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/image',
        filename: (req, file, cb) => {
          const fileExtension = file.originalname.split('.').pop();
          cb(null, `${uuidv4()}.${fileExtension}`);
        },
      }),
    }),
  )
  @Post(':id/upload')
  async uploadFile(
    @Param('id') cottageId: number,
    @UploadedFile() file,
  ): Promise<{ url: string }> {
    const imageUrl = `uploads/image/${file.filename}`;

    const createImageDto: CreateImageDto = {
      url: imageUrl,
      cottageId: Number(cottageId),
    };

    await this.cottagesService.addImageToCottage(createImageDto);

    return { url: imageUrl };
  }
}
