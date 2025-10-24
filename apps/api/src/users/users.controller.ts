import { Controller, Get, Param, UseGuards, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, User as UserModel } from '@repo/database';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtUser } from 'src/auth/jwt.strategy';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

// GET one course by ID
  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  async getMe (@CurrentUser() auth: JwtUser): Promise<UserModel> {
    if(!auth || !auth.userId){
      throw new UnauthorizedException('User not authenticated');
    }
    return this.usersService.findUserByIdOrThrow(auth.userId);
  }

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return this.usersService.findAllUsers({});
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.findUserByIdOrThrow(Number(id));
  }
}
