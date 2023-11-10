import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private useModel: typeof User,
  ) {}

  findOne(filter: { where: { id?: string; email?: string } }): Promise<User> {
    return this.useModel.findOne({ ...filter });
  }

  async create(
    CreateUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    const user = new User();
    const existingByUserEmail = await this.findOne({
      where: { email: CreateUserDto.email },
    });

    if (existingByUserEmail) {
      return { warningMessage: 'Пользователь с таким email уже существует' };
    }

    const hashedPassword = await bcrypt.hash(CreateUserDto.password, 10);
    user.firstname = CreateUserDto.firstname;
    user.lastname = CreateUserDto.lastname;
    user.email = CreateUserDto.email;
    user.password = hashedPassword;

    return user.save();
  }
}
