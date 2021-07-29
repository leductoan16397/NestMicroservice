import { Module, OnModuleInit } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from 'admin/auth/auth.module';
import { UserModule } from 'admin/user/user.module';
import { JobModule } from 'admin/job/job.module';
import { ReviewModule } from 'admin/review/review.module';
import { CompanyhModule } from 'admin/company/company.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'admin',
        children: [
          {
            path: 'auth',
            module: AuthModule,
          },
          {
            path: 'user',
            module: UserModule,
          },
          {
            path: 'company',
            module: CompanyhModule,
          },
          {
            path: 'job',
            module: JobModule,
          },
          {
            path: 'review',
            module: ReviewModule,
          },
        ],
      },
    ]),
    AuthModule,
    UserModule,
    ReviewModule,
    CompanyhModule,
    JobModule,
  ],
})
export class AdminModule implements OnModuleInit {
  onModuleInit() {
    console.log(`AdminModule has been initialized.`);
  }
}
