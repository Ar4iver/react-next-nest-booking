import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'ivan@mail.ru' })
  email: string;

  @ApiProperty({ example: 'ivan1234' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      userId: 1,
      firstname: 'Иван',
      lastname: 'Петров',
      email: 'Ivan@gmail.com',
    },
  })
  user: {
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: '1' })
  userId: number;

  @ApiProperty({ example: 'Иван' })
  firstname: string;

  @ApiProperty({ example: 'Петров' })
  lastname: string;

  @ApiProperty({ example: 'Ivan@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: '1' })
  Id: number;

  @ApiProperty({ example: 'Иван' })
  firstname: string;

  @ApiProperty({ example: 'Петров' })
  lastFname: string;

  @ApiProperty({ example: 'Ivan@gmail.com' })
  email: string;

  @ApiProperty({ example: 'hashedPassword' })
  password: string;

  @ApiProperty({ example: '2023-09-26T14:41:35.261Z' })
  updatedAt: number;

  @ApiProperty({ example: '2023-09-26T14:41:35.261Z' })
  createdAt: number;
}
