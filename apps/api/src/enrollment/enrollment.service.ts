import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Enrollment } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async findAllEnrollment(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput;
  }): Promise<Enrollment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.enrollment.findMany({ skip, take, cursor, where, orderBy });
  }

  async findEnrollment(
    enrollmentWhereUniqueInput: Prisma.EnrollmentWhereUniqueInput,
  ): Promise<Enrollment | null> {
    return this.prisma.enrollment.findUnique({ where: enrollmentWhereUniqueInput });
  }

  async findEnrollmentByIdOrThrow(id: number): Promise<Enrollment> {
    const enrollment = await this.findEnrollment({ id });
    if (!enrollment) throw new NotFoundException(`Enrollment with ID ${id} not found`);
    return enrollment;
  }
}
