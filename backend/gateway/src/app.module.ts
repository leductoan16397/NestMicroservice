import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import { CompanyModule } from './company/company.module';
import { LanguageModule } from './language/language.module';
import { SearchModule } from './search/search.module';
import { AppController } from './app.controllers';
import { CoreModule } from 'core/core.module';
@Module({
  imports: [
    CoreModule,
    AuthModule,
    JobModule,
    CompanyModule,
    LanguageModule,
    SearchModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
