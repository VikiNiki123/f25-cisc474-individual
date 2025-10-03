import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Grade } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GradesService {
  constructor(private prisma: PrismaService) {}

  async findAllGrades(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GradeWhereUniqueInput;
    where?: Prisma.GradeWhereInput;
    orderBy?: Prisma.GradeOrderByWithRelationInput;
  }): Promise<Grade[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.grade.findMany({ skip, take, cursor, where, orderBy });
  }

  async findGrade(
    gradeWhereUniqueInput: Prisma.GradeWhereUniqueInput,
  ): Promise<Grade | null> {
    return this.prisma.grade.findUnique({ where: gradeWhereUniqueInput });
  }

  async findGradeByIdOrThrow(id: number): Promise<Grade> {
    const grade = await this.findGrade({ id });
    if (!grade) throw new NotFoundException(`Grade with ID ${id} not found`);
    return grade;
  }
}
