import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@repo/database';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.usersService.findAllUsers({});
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.findUserByIdOrThrow(Number(id));
  }
}
