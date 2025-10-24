import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { GradesModule } from './grades/grades.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { ProfileModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    CoursesModule,
    UsersModule,
    EnrollmentModule,
    AssignmentsModule,
    SubmissionsModule,
    GradesModule,
    ProfileModule,
    AnnouncementsModule,
    AuthModule,
  ],
})
export class AppModule {}