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

const mockedUser = {
  firstname: 'Сергей',
  lastname: 'Горостопов',
  email: 'sergey@gmail.com',
  password: 'sergey1234',
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

  beforeEach(async () => {
    const user = new User();

    const hashedPassword = await bcrypt.hash(mockedUser.password, 10);

    user.firstname = mockedUser.firstname;
    user.lastname = mockedUser.lastname;
    user.email = mockedUser.email;
    user.password = hashedPassword;

    return user.save();
  });

  afterEach(async () => {
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

    // Дополнительные проверки для images, если массив не пустой
    if (response.body.images.length > 0) {
      response.body.images.forEach((image) => {
        expect(image).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            url: expect.any(String),
            cottageId: 4,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
        );
      });
    }

    // Аналогично для bookings, если массив не пустой
    if (response.body.bookings.length > 0) {
      response.body.bookings.forEach((booking) => {
        // Замените это своей ожидаемой структурой для объекта booking
        expect(booking).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            cottageId: 4,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
        );
      });
    }
  });
});
