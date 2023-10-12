import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  NotFoundException,
  Put,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiNotFoundResponse,
  ApiParam,
  ApiBody,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { BookingDto } from './dto/bookings.dto';
import { CreateBookingDto } from './dto/createBookingDto.dto';

@ApiTags('bookings') // Группировка всех методов этого контроллера под меткой "bookings" в Swagger UI
@Controller('bookings') // Декоратор, определяющий базовый путь для всех методов в этом контроллере.
export class BookingController {
  constructor(private readonly bookingService: BookingService) {} // Внедрение сервиса бронирования для доступа к методам CRUD.

  @Post()
  @ApiOperation({ summary: 'Create a new booking' }) // Описание операции для Swagger.
  @ApiOkResponse({ description: 'Booking has been successfully created.' }) // Ответ Swagger при успешном выполнении.
  @ApiNotFoundResponse({ description: 'Booking is not create.' }) // Ответ Swagger, если бронирование не найдено.
  async create(@Body() data: CreateBookingDto) {
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

  /**
   * GET all bookings.
   * This method fetches all the bookings from the database.
   *
   * @returns A list of all bookings.
   */
  @Get()
  @ApiOkResponse({ description: 'Successfully fetched all bookings.' }) // Описывает успешный ответ от этого метода в Swagger UI.
  async getAll() {
    return await this.bookingService.getAllBookings(); // Получаем все бронирования из базы данных.
  }

  @Get(':id') // Декоратор для обработки GET-запросов на "/booking/:id".
  @ApiOperation({ summary: 'Retrieve booking details by ID' }) // Описание операции для Swagger.
  @ApiOkResponse({ description: 'Booking details returned.' }) // Ответ Swagger при успешном выполнении.
  @ApiNotFoundResponse({ description: 'Booking not found.' }) // Ответ Swagger, если бронирование не найдено.
  async getBooking(@Param('id') bookingId: number) {
    // Используем @Param декоратор, чтобы извлечь ID бронирования из URL.
    try {
      // Пытаемся получить детали бронирования через сервис.
      const booking = await this.bookingService.getBookingDetails(bookingId);

      // Если бронирование не найдено, выбросим ошибку.
      if (!booking) {
        throw new NotFoundException(`Booking with ID ${bookingId} not found`);
      }

      return booking; // Возвращаем детали бронирования.
    } catch (error) {
      // Если произошла ошибка (например, бронирование не найдено), вернем соответствующий ответ.
      if (error instanceof NotFoundException) {
        return { error: 'Booking not found' };
      }
      throw error; // Если возникла другая ошибка, просто передаем ее дальше.
    }
  }

  /**
   * Update booking by ID.
   * This method updates the booking with the given ID using the provided data.
   *
   * @param bookingId The ID of the booking to update.
   * @param updateData The data to update the booking with.
   * @returns The updated booking.
   */
  @Put(':bookingId')
  @ApiParam({ name: 'bookingId', description: 'ID of the booking to update.' }) // Описывает параметр в URL.
  @ApiBody({
    type: BookingDto,
    description: 'Data to update the booking with.',
  }) // Описывает ожидаемое тело запроса.
  @ApiOkResponse({ description: 'Successfully updated the booking.' })
  async update(
    @Param('bookingId') bookingId: number,
    @Body() updateData: Partial<BookingDto>,
  ) {
    return await this.bookingService.updateBooking(bookingId, updateData); // Обновляем информацию о бронировании.
  }

  @Put(':bookingId/cancel')
  @ApiOperation({ summary: 'Cancel a booking' })
  @ApiOkResponse({ description: 'Booking has been successfully cancelled.' })
  @ApiBadRequestResponse({ description: 'Invalid booking ID provided.' })
  @ApiNotFoundResponse({ description: 'Booking not found.' })
  async cancel(@Param('bookingId') bookingId: number) {
    // Валидация: убеждаемся, что ID бронирования представляет собой число.
    if (isNaN(bookingId)) {
      throw new BadRequestException('Invalid booking ID provided.');
    }

    try {
      // Отмена бронирования.
      const updatedBooking = await this.bookingService.cancelBooking(bookingId);

      return updatedBooking;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Booking with ID ${bookingId} not found`);
      }
      throw error;
    }
  }

  @Put(':bookingId/confirmed')
  @ApiOperation({ summary: 'Cancel a booking' })
  @ApiOkResponse({ description: 'Booking has been successfully cancelled.' })
  @ApiBadRequestResponse({ description: 'Invalid booking ID provided.' })
  @ApiNotFoundResponse({ description: 'Booking not found.' })
  async confirmed(@Param('bookingId') bookingId: number) {
    // Валидация: убеждаемся, что ID бронирования представляет собой число.
    if (isNaN(bookingId)) {
      throw new BadRequestException('Invalid booking ID provided.');
    }

    try {
      // Отмена бронирования.
      const updatedBooking =
        await this.bookingService.confirmBooking(bookingId);

      return updatedBooking;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Booking with ID ${bookingId} not found`);
      }
      throw error;
    }
  }
}
