import { Controller, Get, Param } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { Assignment as AssignmentModel } from '@repo/database';

@Controller()
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Get('assignments')
  async getAssignments(): Promise<AssignmentModel[]> {
    return this.assignmentsService.findAllAssignments({});
  }

  @Get('assignment/:id')
  async getAssignmentById(@Param('id') id: string): Promise<AssignmentModel> {
    return this.assignmentsService.findAssignmentByIdOrThrow(Number(id));
  }
}
