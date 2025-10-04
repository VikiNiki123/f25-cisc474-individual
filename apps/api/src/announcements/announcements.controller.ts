import { Controller, Get, Param } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { Announcement as AnnouncementModel } from '@repo/database';

@Controller()
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Get('announcements')
  async getAnnouncements(): Promise<AnnouncementModel[]> {
    return this.announcementsService.findAllAnnouncements({});
  }

  @Get('announcements/:id')
  async getAnnouncementById(@Param('id') id: string): Promise<AnnouncementModel> {
    return this.announcementsService.findAnnouncementByIdOrThrow(Number(id));
  }
}
