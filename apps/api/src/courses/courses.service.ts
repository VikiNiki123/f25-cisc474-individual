import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Course } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

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
}
