import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@repo/database';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.findAllUsers({});
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.findUserByIdOrThrow(Number(id));
  }
}