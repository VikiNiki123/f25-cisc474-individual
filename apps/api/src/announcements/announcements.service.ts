import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Announcement } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnnouncementsService {
  constructor(private prisma: PrismaService) {}

  async findAllAnnouncements(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput;
  }): Promise<Announcement[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.announcement.findMany({ skip, take, cursor, where, orderBy });
  }

  async findAnnouncement(
    announcementWhereUniqueInput: Prisma.AnnouncementWhereUniqueInput,
  ): Promise<Announcement | null> {
    return this.prisma.announcement.findUnique({ where: announcementWhereUniqueInput });
  }

  async findAnnouncementByIdOrThrow(id: number): Promise<Announcement> {
    const announcement = await this.findAnnouncement({ id });
    if (!announcement) throw new NotFoundException(`Announcement with ID ${id} not found`);
    return announcement;
  }
}
