import { Controller, Get, Param } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { Submission as SubmissionModel } from '@repo/database';

@Controller()
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Get('submissions')
  async getSubmissions(): Promise<SubmissionModel[]> {
    return this.submissionsService.findAllSubmissions({});
  }

  @Get('submissions/:id')
  async getSubmissionById(@Param('id') id: string): Promise<SubmissionModel> {
    return this.submissionsService.findSubmissionByIdOrThrow(Number(id));
  }
}
