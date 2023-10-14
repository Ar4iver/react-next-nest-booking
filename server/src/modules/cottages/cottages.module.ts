import { Module } from '@nestjs/common';
import { CottagesController } from './cottages.controller';
import { CottagesService } from './cottages.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cottages } from './cottages.model';
import { Images } from '../images/images.model';
import { ReviewsModule } from '../reviews/reviews.module';

@Module({
  imports: [SequelizeModule.forFeature([Cottages, Images]), ReviewsModule],
  controllers: [CottagesController],
  providers: [CottagesService],
  exports: [CottagesService],
})
export class CottagesModule {}
