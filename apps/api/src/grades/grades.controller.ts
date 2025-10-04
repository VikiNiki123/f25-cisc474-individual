import { Controller, Get, Param } from '@nestjs/common';
import { GradesService } from './grades.service';
import { Grade as GradeModel } from '@repo/database';

@Controller()
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Get('grades')
  async getGrades(): Promise<GradeModel[]> {
    return this.gradesService.findAllGrades({});
  }

  @Get('grades/:id')
  async getGradeById(@Param('id') id: string): Promise<GradeModel> {
    return this.gradesService.findGradeByIdOrThrow(Number(id));
  }
}
