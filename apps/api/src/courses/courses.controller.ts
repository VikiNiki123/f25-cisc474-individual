import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course as CourseModel } from '@repo/database';
import { CourseOut, CourseCreate, CourseDelete, CourseUpdate } from '@repo/api/courses';

@Controller()
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // GET all courses
  @Get('courses')
  async getCourses(): Promise<CourseModel[]> {
    return this.coursesService.findAllCourses({});
  }

  // GET one course by ID
  @Get('courses/:id')
  async getCourseById(@Param('id') id: string): Promise<CourseModel> {
    return this.coursesService.findCourseByIdOrThrow(Number(id));
  }

  // POST create course
  @Post('courses')
  async addCourse(@Body() createCourseDto: CourseCreate): Promise<CourseOut> {
    return this.coursesService.createCourse(createCourseDto);
  }

  // PUT update course
  @Put('courses')
  async editCourse(@Param('id') id: string, @Body() editCourseDto: CourseUpdate): Promise<CourseOut> {
    return this.coursesService.updateCourse(editCourseDto);
  }

  // DELETE course
  @Delete('courses')
  async removeCourse(@Param('id') id: string, @Body() deleteCourseDto: CourseDelete): Promise<CourseOut> {
    return this.coursesService.deleteCourse(deleteCourseDto);
  }
}
