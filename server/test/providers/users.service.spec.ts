import * as bcrypt from 'bcrypt';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from 'src/config/configuration';
import { SequalizeConfigService } from 'src/config/sequelizeConfig.service';
import { User } from 'src/modules/users/users.model';
import { UsersModule } from 'src/modules/users/users.module';
import { UsersService } from 'src/modules/users/users.service';

describe('Users Service', () => {
  let app: INestApplication;
  let usersService: UsersService;

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

    usersService = testModule.get<UsersService>(UsersService);
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

    const user = (await usersService.create(newUser)) as User;

    const passwordIsValid = await bcrypt.compare(
      newUser.password,
      user.password,
    );

    expect(user.email).toBe(newUser.email);
    expect(passwordIsValid).toBe(true);
  });
});
