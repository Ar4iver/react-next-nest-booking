import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { Booking } from 'src/modules/booking/booking.model';
import { Cottages } from 'src/modules/cottages/cottages.model';
import { Images } from 'src/modules/images/images.model';
import { Reviews } from 'src/modules/reviews/reviews.model';
import { User } from 'src/modules/users/users.model';
@Injectable()
export class SequalizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      sql: { dialect, logging, host, port, username, password, database },
    } = this.configService.get('database');

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [User, Cottages, Images, Booking, Reviews],
      autoLoadModels: true,
      synchronize: true,
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    };
  }
}
