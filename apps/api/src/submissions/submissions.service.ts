import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Submission } from '@repo/database';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SubmissionsService {
  constructor(private prisma: PrismaService) {}

  async findAllSubmissions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubmissionWhereUniqueInput;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput;
  }): Promise<Submission[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.submission.findMany({ skip, take, cursor, where, orderBy });
  }

  async findSubmission(
    submissionWhereUniqueInput: Prisma.SubmissionWhereUniqueInput,
  ): Promise<Submission | null> {
    return this.prisma.submission.findUnique({ where: submissionWhereUniqueInput });
  }

  async findSubmissionByIdOrThrow(id: number): Promise<Submission> {
    const submission = await this.findSubmission({ id });
    if (!submission) throw new NotFoundException(`Submission with ID ${id} not found`);
    return submission;
  }
}
