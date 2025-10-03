import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { PrismaService } from 'src/prisma.service';
import { CoursesController } from './courses.controller';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService],
})
export class CoursesModule {}
