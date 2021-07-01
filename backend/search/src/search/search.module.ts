import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigService } from 'core/config/config.service';
import { CoreModule } from 'core/core.module';
import { SearchService } from './search.service';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      imports: [CoreModule],
      useFactory: async (configService: ConfigService) => ({
        node: `http://${configService.get(
          'elasticsearch_host',
        )}:${configService.get('elasticsearch_port')}`,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
