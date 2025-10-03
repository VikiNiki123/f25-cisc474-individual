import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { PrismaService } from 'src/prisma.service';
import { EnrollmentController } from './enrollment.controller';

@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService, PrismaService],
})
export class EnrollmentModule {}
