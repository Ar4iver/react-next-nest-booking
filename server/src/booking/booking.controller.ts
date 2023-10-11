import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiOkResponse({ description: 'Booking has been successfully created.' })
  async create(@Body() data: any) {
    try {
      const newBooking = await this.bookingService.createBooking(data);
      return newBooking;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { error: 'Cottage not found' };
      }
      throw error;
    }
  }
}
