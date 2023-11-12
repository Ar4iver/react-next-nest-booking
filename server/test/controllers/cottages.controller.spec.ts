import * as bcrypt from 'bcrypt';
import * as session from 'express-session';
import * as passport from 'passport';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from 'src/config/configuration';
import { SequalizeConfigService } from 'src/config/sequelizeConfig.service';
import { User } from 'src/modules/users/users.model';
import { AuthModule } from 'src/modules/auth/auth.module';
import { CottagesModule } from 'src/modules/cottages/cottages.module';
import { Cottages } from 'src/modules/cottages/cottages.model';
import { Images } from 'src/modules/images/images.model';
import { Booking } from 'src/modules/booking/booking.model';

const mockedUser = {
  firstname: 'Сергей',
  lastname: 'Горостопов',
  email: 'sergey@gmail.com',
  password: 'sergey1234',
};

const mockedCottage = {
  id: 4,
  name: 'Новый коттедж 6',
  description: 'описание нового коттеджа 2',
  numberOfBedrooms: 7,
  rate: 3,
  maxGuests: 1,
  price: 6000,
  images: [
    {
      id: 1,
      url: 'uploads/images/2108c773-f8d1-496d-8eb1-df7d45b1a9db.jpg',
      cottageId: 4,
    },
  ],
  bookings: [
    {
      id: 1,
      cottageId: 4,
      startDate: '2023-11-12T00:00:00.000Z',
      endDate: '2023-11-15T00:00:00.000Z',
      status: 'pending',
    },
  ],
};

describe('Cottages Controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: SequalizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
        CottagesModule,
        AuthModule,
      ],
    }).compile();

    app = testModule.createNestApplication();
    app.use(
      session({
        secret: 'keyword',
        resave: false,
        saveUninitialized: false,
      }),
    );
    app.use(passport.initialize());
    app.use(passport.session());
    await app.init();
  });

  const createUser = async () => {
    const user = new User();

    const hashedPassword = await bcrypt.hash(mockedUser.password, 10);

    user.firstname = mockedUser.firstname;
    user.lastname = mockedUser.lastname;
    user.email = mockedUser.email;
    user.password = hashedPassword;

    return user.save();
  };

  const createCottage = async () => {
    const cottage = new Cottages();

    cottage.id = mockedCottage.id;
    cottage.name = mockedCottage.name;
    cottage.description = mockedCottage.description;
    cottage.numberOfBedrooms = mockedCottage.numberOfBedrooms;
    cottage.rate = mockedCottage.rate;
    cottage.maxGuests = mockedCottage.maxGuests;
    cottage.price = mockedCottage.price;

    await cottage.save();

    for (const img of mockedCottage.images) {
      const image = new Images();
      image.id = img.id;
      image.cottageId = img.cottageId;
      image.url = img.url;
      image.cottage = cottage;
      await image.save();
    }

    for (const bk of mockedCottage.bookings) {
      const booking = new Booking();
      booking.id = bk.id;
      booking.cottageId = bk.cottageId;
      booking.startDate = new Date(bk.startDate);
      booking.endDate = new Date(bk.endDate);
      booking.status = bk.status as 'pending' | 'confirmed' | 'cancelled';
      booking.cottage = cottage;
      await booking.save();
    }

    return await Cottages.findByPk(cottage.id, {
      include: [Images, Booking],
    });
  };

  beforeEach(async () => {
    await createUser();
    await createCottage();
  });

  afterEach(async () => {
    await Cottages.destroy({ where: { id: mockedCottage.id } });
    await User.destroy({ where: { email: mockedUser.email } });
  });

  it('should get one cottage', async () => {
    const login = await request(app.getHttpServer())
      .post('/users/v1/login')
      .send({ email: mockedUser.email, password: mockedUser.password });

    const response = await request(app.getHttpServer())
      .get('/cottages/v1/find/4')
      .set('Cookie', login.headers['set-cookie']);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: 4,
        name: expect.any(String),
        description: expect.any(String),
        numberOfBedrooms: expect.any(Number),
        rate: expect.any(Number),
        maxGuests: expect.any(Number),
        price: expect.any(Number),
        updatedAt: expect.any(String),
        createdAt: expect.any(String),
        images: expect.any(Array),
        bookings: expect.any(Array),
      }),
    );

    if (!!response.body.images.length) {
      response.body.images.forEach((image) => {
        expect(image).toEqual({
          id: expect.any(Number),
          url: expect.any(String),
          cottageId: 4,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        });
      });
    }

    if (!!response.body.bookings.length) {
      response.body.bookings.forEach((booking) => {
        expect(booking).toEqual({
          id: expect.any(Number),
          cottageId: 4,
          startDate: expect.any(String),
          endDate: expect.any(String),
          status: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        });
      });
    }
  });
});
