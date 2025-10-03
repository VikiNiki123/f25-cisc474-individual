import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { PrismaService } from 'src/prisma.service';
import { AssignmentsController } from './assignments.controller';

@Module({
  controllers: [AssignmentsController],
  providers: [AssignmentsService, PrismaService],
})
export class AssignmentsModule {}
