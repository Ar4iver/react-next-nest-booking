import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './booking.model';
import { Cottages } from '../cottages/cottages.model';

@Module({
  imports: [SequelizeModule.forFeature([Booking, Cottages])],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
