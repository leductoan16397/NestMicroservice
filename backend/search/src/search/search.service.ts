import { Injectable } from '@nestjs/common';
import {
  ElasticsearchBody,
  SearchServiceInterface,
} from './interfaces/search.service.interface';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService implements SearchServiceInterface<any> {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  getAll = async (index: string): Promise<any> => {
    const { body } = await this.elasticsearchService.search({
      index: index,
      timeout: '5s',
      body: {
        query: {
          match_all: {},
        },
      },
    });
    const hits = body.hits.hits;
    return hits.map((item) => item._source);
  };

  insert = async (index: string, body: ElasticsearchBody): Promise<any> => {
    return this.elasticsearchService.index({
      index: index,
      timeout: '5s',
      body,
    });
  };

  search = async (
    index: string,
    text: string,
    fields: string[],
  ): Promise<any> => {
    const { body } = await this.elasticsearchService.search({
      index: index,
      timeout: '5s',
      body: {
        query: {
          multi_match: {
            query: text,
            fields: [...fields],
          },
        },
      },
    });

    const hits = body.hits.hits;
    return hits.map((item) => item._source);
  };

  updateById = async (index: string, data: ElasticsearchBody): Promise<any> => {
    const script = Object.entries(data).reduce((result, [key, value]) => {
      return `${result} ctx._source.${key}='${value}';`;
    }, '');

    return this.elasticsearchService.updateByQuery({
      index: index,
      timeout: '5s',
      body: {
        query: {
          match: {
            id: data.id,
          },
        },
        script: {
          inline: script,
        },
      },
    });
  };

  deleteById = async (index: string, id: string): Promise<any> => {
    return this.elasticsearchService.deleteByQuery({
      index: index,
      timeout: '5s',
      body: {
        query: {
          match: {
            id: id,
          },
        },
      },
    });
  };

  deleteAll = async (index: string): Promise<any> => {
    return this.elasticsearchService.deleteByQuery({
      index: index,
      body: {
        query: {
          match_all: {},
        },
      },
    });
  };
}
