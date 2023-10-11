import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './booking.model';
import { Cottages } from 'src/cottages/cottages.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking)
    private readonly bookingModel: typeof Booking,
    @InjectModel(Cottages)
    private readonly cottageModel: typeof Cottages,
  ) {}

  async createBooking(data: any): Promise<Booking> {
    const cottage = await this.cottageModel.findByPk(data.cottageId);
    if (!cottage) {
      throw new NotFoundException('Cottage not found');
    }

    const booking = new Booking();
    booking.cottageId = data.cottageId;
    booking.startDate = data.startDate;
    booking.endDate = data.endDate;
    booking.status = 'pending';
    return booking.save();
  }
}
