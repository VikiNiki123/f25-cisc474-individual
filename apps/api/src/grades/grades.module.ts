import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { PrismaService } from 'src/prisma.service';
import { GradesController } from './grades.controller';

@Module({
  controllers: [GradesController],
  providers: [GradesService, PrismaService],
})
export class GradesModule {}
