import { PartialType } from '@nestjs/swagger';
import { CreateCottagesDto } from './cottages.dto';

export class UpdateCottageDto extends PartialType(CreateCottagesDto) {}
