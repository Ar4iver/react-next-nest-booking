import { Module } from '@nestjs/common';
import { CottageController } from './cottage.controller';
import { CottageService } from './cottage.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cottage } from './cottage.model';

@Module({
  imports: [SequelizeModule.forFeature([Cottage])],
  controllers: [CottageController],
  providers: [CottageService],
  exports: [CottageService],
})
export class CottageModule {}
