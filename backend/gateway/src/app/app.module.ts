import { Module, OnModuleInit } from '@nestjs/common';
import { AuthModule } from 'modules/auth/auth.module';
import { CompanyModule } from 'modules/company/company.module';
import { JobModule } from 'modules/job/job.module';
import { LanguageModule } from 'modules/language/language.module';
import { ReviewModule } from 'modules/review/review.module';
import { SearchModule } from 'modules/search/search.module';
import { UserModule } from 'modules/user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    JobModule,
    CompanyModule,
    LanguageModule,
    ReviewModule,
    SearchModule,
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log(`AppModule has been initialized.`);
  }
}
