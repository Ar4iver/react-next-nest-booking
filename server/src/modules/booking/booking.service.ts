import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './booking.model';
import { BookingDto } from './dto/bookings.dto';
import { Cottages } from '../cottages/cottages.model';

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

  /**
   * Получение всех бронирований из базы данных.
   * @returns An array of all bookings.
   */
  async getAllBookings(): Promise<Booking[]> {
    return await this.bookingModel.findAll(); // Получаем все бронирования из базы данных
  }

  /**
   * Получение деталей бронирования по ID.
   * @param bookingId - ID бронирования.
   * @returns Объект бронирования или null, если бронирование не найдено.
   */
  async getBookingDetails(bookingId: number): Promise<Booking | null> {
    try {
      // Используем метод findByPk для поиска бронирования по первичному ключу.
      const booking = await this.bookingModel.findByPk(bookingId);

      return booking; // Возвращаем найденное бронирование или null, если бронирование не найдено.
    } catch (error) {
      // Если возникает какая-либо ошибка при взаимодействии с базой данных, прокидываем её дальше.
      throw error;
    }
  }

  async updateBooking(
    bookingId: number,
    updateData: Partial<BookingDto>,
  ): Promise<Booking> {
    const booking = await this.bookingModel.findByPk(bookingId);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${bookingId} not found`);
    }
    return booking.update(updateData);
  }

  async cancelBooking(bookingId: number): Promise<Booking> {
    // Находим бронирование по ID.
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${bookingId} not found`);
    }

    // Изменяем статус бронирования на "отменено".
    booking.status = 'cancelled';

    // Сохраняем измененное бронирование.
    await booking.save();

    return booking;
  }

  async confirmBooking(bookingId: number): Promise<Booking> {
    // Находим бронирование по ID.
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${bookingId} not found`);
    }

    // Изменяем статус бронирования на "отменено".
    booking.status = 'confirmed';

    // Сохраняем измененное бронирование.
    await booking.save();

    return booking;
  }
}
