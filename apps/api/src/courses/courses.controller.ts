import { Controller, Get, Param, Post, Delete, Put, Body, UsePipes, UseGuards} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course as CourseModel } from '@repo/database';
import { CourseOut, CourseCreate, CourseDelete, CourseUpdate } from '@repo/api/courses';
import { ZodPipe } from 'src/zod_pipe';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { JwtUser } from 'src/auth/jwt.strategy';


@Controller()
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // GET all courses
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
  @Post('courses')
  async addCourse(@Body() createCourseDto: CourseCreate, @CurrentUser() user: JwtUser): Promise<CourseOut> {
    return this.coursesService.createCourse(createCourseDto);
  }

  // PUT update course
  @UseGuards(AuthGuard('jwt'))
  @Put('courses')
  async editCourse(@Param('id') id: string, @Body() editCourseDto: CourseUpdate): Promise<CourseOut> {
    return this.coursesService.updateCourse(editCourseDto);
  }

  // DELETE course
  @UseGuards(AuthGuard('jwt'))
  @Delete('courses')
  async removeCourse(@Param('id') id: string, @Body() deleteCourseDto: CourseDelete): Promise<CourseOut> {
    return this.coursesService.deleteCourse(deleteCourseDto);
  }
}
