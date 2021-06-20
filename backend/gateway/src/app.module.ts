import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import { CompanyModule } from './company/company.module';
import { LanguageModule } from './language/language.module';
import { SearchModule } from './search/search.module';
import { AppController } from './app.controllers';
@Module({
  imports: [AuthModule, JobModule, CompanyModule, LanguageModule, SearchModule],
  controllers: [AppController],
})
export class AppModule {}
