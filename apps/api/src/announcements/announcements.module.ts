import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { PrismaService } from 'src/prisma.service';
import { AnnouncementsController } from './announcements.controller';

@Module({
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService, PrismaService],
})
export class AnnouncementsModule {}
