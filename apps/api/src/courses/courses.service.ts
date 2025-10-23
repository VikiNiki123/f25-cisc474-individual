import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Course } from '@repo/database';
import { PrismaService } from 'src/prisma.service';
import { CourseCreate, CourseUpdate, CourseOut, CourseDelete } from '@repo/api/courses';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAllCourses(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CourseWhereUniqueInput;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput;
  }): Promise<Course[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.course.findMany({ skip, take, cursor, where, orderBy });
  }

  async findCourse(
    courseWhereUniqueInput: Prisma.CourseWhereUniqueInput,
  ): Promise<Course | null> {
    return this.prisma.course.findUnique({ where: courseWhereUniqueInput });
  }

  async findCourseById(id: number): Promise<Course | null> {
    return this.findCourse({ id });
  }

  async findCourseByIdOrThrow(id: number): Promise<Course> {
    const course = await this.findCourse({ id });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  async createCourse(createCourseDto: CourseCreate): Promise<CourseOut> {
    const newCourse = await this.prisma.course.create({data: createCourseDto});
    return {
      id: newCourse.id,
      title: newCourse.title,
      description: newCourse.description,
      courseCode: newCourse.courseCode,
      credits: newCourse.credits
    };
  }

   async updateCourse(editCourseDto: CourseUpdate): Promise<CourseOut> {
    const editedCourse = await this.prisma.course.update({data: editCourseDto, where: {id: editCourseDto.id}});
    return {
      id: editedCourse.id,
      title: editedCourse.title,
      description: editedCourse.description,
      courseCode: editedCourse.courseCode,
      credits: editedCourse.credits,
    };
  }
   async deleteCourse(deleteCourseDto: CourseDelete): Promise<CourseOut> {
    const deletedCourse = await this.prisma.course.delete({where: deleteCourseDto});
    return {
      id: deletedCourse.id,
      title: deletedCourse.title,
      description: deletedCourse.description,
      courseCode: deletedCourse.courseCode,
      credits: deletedCourse.credits,
    };
  }
}

