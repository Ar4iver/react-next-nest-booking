import * as bcrypt from 'bcrypt';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from 'src/config/configuration';
import { SequalizeConfigService } from 'src/config/sequelizeConfig.service';
import { User } from 'src/modules/users/users.model';
import { UsersModule } from 'src/modules/users/users.module';

describe('Users Controller', () => {
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
        UsersModule,
      ],
    }).compile();

    app = testModule.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await User.destroy({ where: { email: 'test@gmail.com' } });
  });

  it('should create user', async () => {
    const newUser = {
      firstname: 'тест',
      lastname: 'тест',
      email: 'test@gmail.com',
      password: 'test1234',
    };

    const response = await request(app.getHttpServer())
      .post('/users/v1/signup')
      .send(newUser);

    const passwordIsValid = await bcrypt.compare(
      newUser.password,
      response.body.password,
    );

    expect(response.body.email).toBe(newUser.email);
    expect(passwordIsValid).toBe(true);
  });
});
