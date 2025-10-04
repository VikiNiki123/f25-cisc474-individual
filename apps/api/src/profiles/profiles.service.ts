import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Profile } from '@repo/database';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async findAllProfiles(params: any): Promise<Profile[]> {
    return this.prisma.profile.findMany(params);
  }

  async findProfileByIdOrThrow(id: number): Promise<Profile> {
    const profile = await this.prisma.profile.findUnique({ where: { id } });
    if (!profile) throw new NotFoundException(`Profile with ID ${id} not found`);
    return profile;
  }
}
