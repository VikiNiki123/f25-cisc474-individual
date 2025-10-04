import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { Profile as ProfileModel } from '@repo/database';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('profiles')
  async getProfiles(): Promise<ProfileModel[]> {
    return this.profileService.findAllProfiles({});
  }

  @Get('profiles/:id')
  async getProfileById(@Param('id') id: string): Promise<ProfileModel> {
    return this.profileService.findProfileByIdOrThrow(Number(id));
  }
}
