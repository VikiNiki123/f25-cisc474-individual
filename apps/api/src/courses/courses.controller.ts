import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course as CourseModel } from '@repo/database';

@Controller()
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('courses')
  async getCourses(): Promise<CourseModel[]> {
    return this.coursesService.findAllCourses({});
  }

  @Get('course/:id')
  async getCourseById(@Param('id') id: string): Promise<CourseModel> {
    return this.coursesService.findCourseByIdOrThrow(Number(id));
  }
}
