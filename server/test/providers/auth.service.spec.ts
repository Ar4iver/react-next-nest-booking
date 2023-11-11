import * as bcrypt from 'bcrypt';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from 'src/config/configuration';
import { SequalizeConfigService } from 'src/config/sequelizeConfig.service';
import { User } from 'src/modules/users/users.model';
import { AuthModule } from 'src/modules/auth/auth.module';
import { AuthService } from 'src/modules/auth/auth.service';

const mockedUser = {
  firstname: 'Сергей',
  lastname: 'Горостопов',
  email: 'sergey@gmail.com',
  password: 'sergey1234',
};

describe('Auth Service', () => {
  let app: INestApplication;
  let authService: AuthService;

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

    authService = testModule.get<AuthService>(AuthService);
    app = testModule.createNestApplication();

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
    const user = await authService.validateUser(
      mockedUser.email,
      mockedUser.password,
    );

    expect(user.email).toBe(mockedUser.email);
    expect(user.firstname).toBe(mockedUser.firstname);
    expect(user.lastname).toBe(mockedUser.lastname);
  });
});
