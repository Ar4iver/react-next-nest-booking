import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CottagesController } from './cottages.controller';
import { CottagesService } from './cottages.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cottages } from './cottages.model';
import { Images } from 'src/images/images.model';
import { ImagesCheckMiddleware } from './middleware/images-check.middleware';

@Module({
  imports: [SequelizeModule.forFeature([Cottages, Images])],
  controllers: [CottagesController],
  providers: [CottagesService],
  exports: [CottagesService],
})
export class CottagesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ImagesCheckMiddleware)
      .forRoutes({ path: 'cottages-create', method: RequestMethod.POST });
  }
}
