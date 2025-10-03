import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({ skip, take, cursor, where, orderBy });
  }

  async findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({ where: userWhereUniqueInput });
  }

  // Find via unique field of 'id'
  async findUserById(id: number): Promise<User | null> {
    return this.findUser({ id });
  }

  // Find via unique field of 'id' or throw NotFoundException
  async findUserByIdOrThrow(id: number): Promise<User> {
    const user = await this.findUser({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}