import { Injectable } from '@nestjs/common';
import {
  ElasticsearchBody,
  SearchServiceInterface,
} from './interfaces/search.service.interface';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService implements SearchServiceInterface<any> {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  getAll = async (index: string, from = 0, size = 10): Promise<any> => {
    const { body } = await this.elasticsearchService.search({
      index: index,
      timeout: '5s',
      from,
      size,
      body: {
        query: {
          match_all: {},
        },
      },
    });
    const hits = body.hits.hits;
    return hits.map((item: { _source: any }) => item._source);
  };

  count = async (
    index: string,
    searchs?: { text: string; fields: string[] }[],
  ): Promise<any> => {
    const bodySearch = this.generateSearchBody(searchs);

    const { body } = await this.elasticsearchService.count({
      index: index,
      body: bodySearch,
    });
    return body.count;
  };

  insert = async (index: string, body: ElasticsearchBody): Promise<any> => {
    return this.elasticsearchService.index({
      index: index,
      timeout: '5s',
      body,
    });
  };

  generateSearchBody = (searchs: { text: string; fields: string[] }[]): any => {
    if (searchs.length > 0) {
      return {
        query: {
          dis_max: {
            queries: searchs.map((search) => ({
              multi_match: {
                query: search.text,
                fields: [...search.fields],
              },
            })),
          },
        },
      };
    }
    return {};
  };

  search = async (
    index: string,
    searchs: { text: string; fields: string[] }[],
    from = 0,
    size = 10,
  ): Promise<any> => {
    const bodySearch = this.generateSearchBody(searchs);
    const { body } = await this.elasticsearchService.search({
      index: index,
      timeout: '5s',
      from,
      size,
      body: bodySearch,
    });

    const hits = body.hits.hits;
    return hits.map((item: { _source: any }) => item._source);
  };

  searchByJobAndCity = async (
    index: string,
    searchs: { text: string; fields: string[] }[],
    from = 0,
    size = 10,
  ): Promise<any> => {
    const bodySearch = {
      query: {
        bool: {
          must: searchs.map((search) => ({
            multi_match: {
              query: search.text,
              fields: [...search.fields],
            },
          })),
        },
      },
    };
    const { body } = await this.elasticsearchService.search({
      index: index,
      timeout: '5s',
      from,
      size,
      body: bodySearch,
    });
    const hits = body.hits.hits;
    const countRs = await this.elasticsearchService.count({
      index: index,
      body: bodySearch,
    });

    return {
      total: countRs.body.count,
      items: hits.map((item: { _source: any }) => item._source),
    };
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
