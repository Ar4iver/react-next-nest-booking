import { Module } from '@nestjs/common';
import { CottagesController } from './cottages.controller';
import { CottagesService } from './cottages.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cottages } from './cottages.model';

@Module({
  imports: [SequelizeModule.forFeature([Cottages])],
  controllers: [CottagesController],
  providers: [CottagesService],
  exports: [CottagesService],
})
export class CottagesModule {}
