import { Module } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { PrismaService } from 'src/prisma.service';
import { SubmissionsController } from './submissions.controller';

@Module({
  controllers: [SubmissionsController],
  providers: [SubmissionsService, PrismaService],
})
export class SubmissionsModule {}
