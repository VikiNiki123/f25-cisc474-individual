import { Controller, Get, Param } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { Enrollment as EnrollmentModel } from '@repo/database';

@Controller()
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get('enrollments')
  async getEnrollments(): Promise<EnrollmentModel[]> {
    return this.enrollmentService.findAllEnrollment({});
  }

  @Get('enrollment/:id')
  async getEnrollmentById(@Param('id') id: string): Promise<EnrollmentModel> {
    return this.enrollmentService.findEnrollmentByIdOrThrow(Number(id));
  }
}
