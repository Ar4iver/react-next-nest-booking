import * as bcrypt from 'bcrypt';
import * as request from 'supertest';
import * as session from 'express-session';
import * as passport from 'passport';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from 'src/config/configuration';
import { SequalizeConfigService } from 'src/config/sequelizeConfig.service';
import { User } from 'src/modules/users/users.model';
import { AuthModule } from 'src/modules/auth/auth.module';

const mockedUser = {
  firstname: 'Сергей',
  lastname: 'Горостопов',
  email: 'sergey@gmail.com',
  password: 'sergey1234',
};

describe('Auth Controller', () => {
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

  it('should login user', async () => {
    const response = await request(app.getHttpServer())
      .post('/users/v1/login')
      .send({ email: mockedUser.email, password: mockedUser.password });

    expect(response.body.user.firstname).toBe(mockedUser.firstname);
    expect(response.body.user.lastname).toBe(mockedUser.lastname);
    expect(response.body.user.email).toBe(mockedUser.email);
    expect(response.body.msg).toBe('Logged in');
  });

  it('should login-check', async () => {
    const login = await request(app.getHttpServer())
      .post('/users/v1/login')
      .send({ email: mockedUser.email, password: mockedUser.password });

    const loginCheck = await request(app.getHttpServer())
      .get('/users/v1/login-check')
      .set('cookie', login.headers['set-cookie']);

    expect(loginCheck.body.firstname).toBe(mockedUser.firstname);
    expect(loginCheck.body.lastname).toBe(mockedUser.lastname);
    expect(loginCheck.body.email).toBe(mockedUser.email);
  });
});
